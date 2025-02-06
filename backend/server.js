const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const LANGUAGES = {
  python: { ext: "py", image: "python:3.9", cmd: "python3" },
  javascript: { ext: "js", image: "node:latest", cmd: "node" },
  java: {
    ext: "java",
    image: "openjdk:11",
    cmd: "javac /code/*.java && java -cp /code Main",
  },
  cpp: {
    ext: "cpp",
    image: "gcc:latest",
    cmd: "sh -c 'g++ /code.cpp -o /code && /code'",
  },
  c: {
    ext: "c",
    image: "gcc:latest",
    cmd: "sh -c 'gcc /code.c -o /code && /code'",
  },
};

app.post("/execute", async (req, res) => {
  const { code, language } = req.body;
  if (!LANGUAGES[language]) return res.status(400).json({ error: "Unsupported language" });

  const { ext, image, cmd } = LANGUAGES[language];

  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  try {
    if (language === "java") {
      const match = code.match(/public\s+class\s+(\w+)/);
      if (!match) {
        return res.status(400).json({ error: "Invalid Java code: no public class found" });
      }
      const className = match[1];
      const filePath = path.join(tempDir, `${className}.java`);
      fs.writeFileSync(filePath, code);

      const dockerCommand = `docker run --rm -v ${tempDir}:/code ${image} sh -c "${cmd}"`;
      
      exec(dockerCommand, (error, stdout, stderr) => {
        fs.rmSync(tempDir, { recursive: true, force: true });
        
        if (error) {
          console.error(`Execution error: ${stderr}`);
          return res.status(500).json({ error: stderr || "Error executing code" });
        }
        res.json({ output: stdout });
      });
    } else {
      // Handle other languages
      const filePath = path.join(tempDir, `code.${ext}`);
      fs.writeFileSync(filePath, code);

      const dockerCommand = `docker run --rm -v ${filePath}:/code.${ext} ${image} ${cmd} /code.${ext}`;
      
      exec(dockerCommand, (error, stdout, stderr) => {
        // Clean up
        fs.rmSync(tempDir, { recursive: true, force: true });
        
        if (error) {
          console.error(`Execution error: ${stderr}`);
          return res.status(500).json({ error: stderr || "Error executing code" });
        }
        res.json({ output: stdout });
      });
    }
  } catch (err) {
    console.error(`File operation error: ${err.message}`);
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

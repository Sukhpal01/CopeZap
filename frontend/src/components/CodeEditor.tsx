import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import Execution from "./Execution";
import SideBar from "./SideBar";
import FileName from "./FileName";
import FullScreen from "./FullScreen";
import ThemesDropdown from "./ThemesDropdown";
import RunCode from "./RunCode";
import useStore from "../store/useStore";

const CodeEditor: React.FC = () => {
     const [language, setLanguage] = useState("python");
     const [languageName, setLanguageName] = useState("py");
     const [code, setCode] = useState(`print("Try programiz.pro")`);
     const [isRunning, setIsRunning] = useState(false);

     const [output, setOutput] = useState("");
     const [theme, setTheme] = useState("vs-dark");
     const { fullScreen } = useStore();

     const executeCode = async () => {
          setIsRunning(true);
          try {
               const response = await axios.post("http://localhost:5000/execute", { code, language });
               setOutput(response.data.output);
          } catch (error) {
               setOutput("Error executing code");
               console.log(error)
          } finally {
               setIsRunning(false);
          }
     };

     const handleSetLanguage = (lang: string, langName: string) => {
          setLanguage(lang);
          setLanguageName(langName);
     };

     return (
          <main className={`flex ${fullScreen ? "flex-col" : ""}`}>
               {!fullScreen && <SideBar setLanguage={handleSetLanguage} languageName={language} />}

               <div className="flex justify-between items-start w-full">
                    <div className="flex flex-col w-full ">
                         <div className={`flex items-center justify-between border-r-[1.5px] border-t-[1.5px] border-[#FFFFFF33] h-12 ${theme === "monokai-bright" ? "bg-[#F5F5F5] border-[#d3dce6] text-[#25265EB3]" : "bg-[#383b40] border-[#FFFFFF33] text-white"} `}>
                              <FileName languageName={languageName} theme={theme} />
                              <div className="flex items-center gap-2 pr-5">
                                   <ThemesDropdown theme={theme} setTheme={setTheme} />
                                   <FullScreen />
                                   <RunCode executeCode={executeCode} isRunning={isRunning} />
                              </div>

                         </div>
                         <div className={` bg-[#2D2F34] ${theme === "monokai-bright" ? "bg-[d3dce6]" : "bg-[#2D2F34]"}`}>
                              <Editor
                                   height={`calc(100vh - ${fullScreen ? "84px" : "121px"})`}
                                   width="100%"
                                   defaultLanguage={language}
                                   language={language}
                                   theme={theme}
                                   value={code}
                                   onChange={(value) => setCode(value || "")}
                              />
                         </div>
                    </div>

                    <div className="w-full">
                         <Execution output={output} setOutput={setOutput} />
                    </div>
               </div>
          </main>
     );
};

export default CodeEditor;

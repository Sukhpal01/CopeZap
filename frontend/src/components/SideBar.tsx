import cppSvg from "../assets/cpp.svg"
import jsSvg from "../assets/js.svg"
import pythonSvg from "../assets/python.svg"
import javaSvg from "../assets/java.svg"
import cLangSvg from "../assets/cLang.svg"
import useStore from "../store/useStore";
import lightPythonSvg from "../assets/lightTheme/lightPython.svg"
import lightCLangSvg from "../assets/lightTheme/lightC.svg"
import lightCppSvg from "../assets/lightTheme/lightCpp.svg"
import lightJsSvg from "../assets/lightTheme/lightJs.svg"
import lightJavaSvg from "../assets/lightTheme/lightJava.svg"

const languages = [
     {
          name: "python",
          icon: pythonSvg,
          lightIcon: lightPythonSvg,
          value: "python",
          extension: "py"
     },
     {
          name: "C",
          icon: cLangSvg,
          lightIcon: lightCLangSvg,
          value: "c",
          extension: "c"
     },
     {
          name: "C++",
          icon: cppSvg,
          lightIcon: lightCppSvg,
          value: "cpp",
          extension: "cpp"
     },
     {
          name: "javascript",
          icon: jsSvg,
          lightIcon: lightJsSvg,
          value: "javascript",
          extension: "js"
     },

     {
          name: "Java",
          icon: javaSvg,
          lightIcon: lightJavaSvg,
          value: "java",
          extension: "java"
     }
]

const SideBar = ({ setLanguage, languageName }: { setLanguage: (language: string, languageName: string) => void, languageName: string }) => {
     const { theme } = useStore();
     
     return (
          <aside className={`p-4 h-[calc(100vh-73px)] w-20 border-t-[1.5px] border-[#FFFFFF33] ${theme === "monokai-bright" ? "bg-[#F5F5F5] border-[#d3dce6] text-[#25265EB3]" : "bg-[#383b40] border-[#FFFFFF33] text-white"} `}>
               <ul className="flex flex-col items-center gap-2">
                    {languages.map((language) => (
                         <li
                              key={language.value}
                              className={`flex justify-center items-center p-1  border-[1.5px] ${theme === "monokai-bright" ? "border-[#d3dce6]" : "border-[#FFFFFF33]"} rounded-md ${theme} cursor-pointer ${languageName !== language.value ? "" : "bg-blue-600"}`}
                              onClick={() => setLanguage(language.value, language.extension)}
                         >
                              <img src={theme === "monokai-bright" && languageName !== language.value ? language.lightIcon : language.icon} alt={language.name} className="w-8 h-8 p-0.5" />
                         </li>
                    ))}
               </ul>
          </aside>
     )
}

export default SideBar;
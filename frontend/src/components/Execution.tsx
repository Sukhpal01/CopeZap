import useStore from "../store/useStore";
import ThemeColor from "../utils/ThemeColor";

const Execution = ({ output, setOutput }: { output: string, setOutput: (output: string) => void }) => {
     const { fullScreen, theme } = useStore();
     const themeClasses = ThemeColor();

     return (
          <div >
               <div className={`flex font-medium px-4 justify-between items-center h-12 border-t-[1.5px]  ${theme === "monokai-bright" ? "bg-[#F5F5F5] border-[#d3dce6] text-[#25265EB3]" : "bg-[#383b40] border-[#FFFFFF33] text-white"} `}>
                    <span className="text-lg">Output</span>
                    <button type="button" className={` border-1 rounded-[2px] px-4 py-1 cursor-pointer ${theme === "monokai-bright" ? "border-[#d3dce6] text-[#25265EB3]" : "border-[#FFFFFF33] "}`} onClick={() => setOutput("")}>Clear</button>
               </div>
               <pre className={`w-full ${fullScreen ? "h-[calc(100vh-84px)]" : "h-[calc(100vh-121px)]"} px-4 py-2 ${themeClasses} ${theme === "vs-dark" ? "bg-[#1E1E1E] text-white" : theme === "monokai-bright" ? "bg-white text-black" : "bg-black text-white"}`}>
                    {output || ""}
               </pre>
          </div>
     )
}

export default Execution
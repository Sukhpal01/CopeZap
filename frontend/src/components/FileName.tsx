const FileName = ({ languageName, theme }: { languageName: string, theme: string }) => {
     return (
          <div
               className={`e py-2 w-28 text-center border-r-[1.5px] border-[#FFFFFF33] h-full ${theme === "vs-dark"
                    ? "bg-[#1E1E1E] text-white"
                    : theme === "monokai-bright"
                         ? "bg-white text-[#25265EB3]"
                         : "bg-black text-white"
                    }`}
          >
               {`main.${languageName.toLowerCase()}`}
          </div>
     )
}

export default FileName;
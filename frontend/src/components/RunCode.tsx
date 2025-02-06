const RunCode = ({ executeCode, isRunning }: { executeCode: () => void, isRunning: boolean }) => {
     return (
          <button disabled={isRunning} className={`h-8 w-20 font-medium flex items-center justify-center rounded-[2px] bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white cursor-pointer ${isRunning ? "bg-gray-500 hover:bg-gray-600" : ""}`} onClick={executeCode}>
               {isRunning ? <div className="spinner"></div> : "Run"}
          </button>
     )
}

export default RunCode;
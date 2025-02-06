import FullScreenIcon from "../assets/fullScreen.svg"
import useStore from "../store/useStore";
import lightFullScreenIcon from "../assets/lightTheme/lightFullScreen.svg"

const FullScreen = () => {
     const { toggleFullScreen } = useStore();
     const { theme } = useStore();
     return (
          <div className={`border border-[#FFFFFF33] p-0.5 rounded-[2px] cursor-pointer ${theme === "monokai-bright" ? "bg-[#F5F5F5] border-[#d3dce6] text-[#25265EB3]" : "bg-[#383b40] border-[#FFFFFF33] text-white"}`} onClick={toggleFullScreen}>
               
               <img src={theme === "monokai-bright" ? lightFullScreenIcon  : FullScreenIcon} alt="fullScreen" className="w-6 h-6 p-0.5" />
          </div>
     )
}

export default FullScreen;
import useStore from "../store/useStore";
import ThemeColor from "../utils/ThemeColor";
import logo from "../assets/logo.svg";

const Header = () => {
     const { fullScreen } = useStore();
     const themeClasses = ThemeColor();
     return (
          <header className={`flex justify-between items-center ${themeClasses}`}>
               <nav className={`flex items-center gap-1 cursor-default w-full ${fullScreen ? "p-1" : "p-5"}`}>
                    <img src={logo} alt="logo" className={` ${fullScreen ? "w-6 h-6" : "w-9 h-9"}`} />
                    <h1 className={`text-2xl font-bold ${fullScreen ? "text-lg" : ""}`}>Code<span className="text-blue-600">Zap</span></h1>
               </nav>
          </header>
     )
}

export default Header;
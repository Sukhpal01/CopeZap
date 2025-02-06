import useStore from "../store/useStore";
const ThemeColor = () => {
     
     const { theme } = useStore()
     if (theme === "vs-dark") {
          return "bg-[#1E1E1E] text-white"
     } else if (theme === "light") {
          return "bg-white text-black"
     } else if (theme === "hc-black") {
          return "bg-black text-white"
     }
}

export default ThemeColor;
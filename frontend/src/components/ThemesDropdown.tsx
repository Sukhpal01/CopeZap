import useStore from "../store/useStore";

const ThemesDropdown = ({ theme, setTheme }: { theme: string, setTheme: (theme: string) => void }) => {
     const { theme: themeStore, setTheme: setThemeStore } = useStore();
     
     const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setTheme(e.target.value);
          setThemeStore(e.target.value);
     }

     return (
          <select
               className={`py-1.5 px-3 border-none outline-none rounded-sm ${themeStore === "monokai-bright" ? "bg-[#d3dce6]" : "bg-[#1E1E1E]"}`}
               value={theme}
               onChange={handleChange}
          >
               <option value="vs-dark">vs-dark</option>
               <option value="monokai-bright">monokai-bright</option>
               <option value="hc-black">hc-black</option>
          </select>
     )
}

export default ThemesDropdown;
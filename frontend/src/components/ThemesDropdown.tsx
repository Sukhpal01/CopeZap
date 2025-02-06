import useStore from "../store/useStore";

const ThemesDropdown = ({ theme, setTheme }: { theme: string, setTheme: (theme: string) => void }) => {
     const { setTheme: setThemeStore } = useStore();
     
     const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setTheme(e.target.value);
          setThemeStore(e.target.value);
     }

     return (
          <select
               className="p-1 bg-gray-700 text-white"
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
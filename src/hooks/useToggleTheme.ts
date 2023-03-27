
import { setCookie } from "nookies";
import { useRecoilState } from "recoil";
import { darkMode } from "recoilAtoms/recoilAtomContainer";

export default function UseToggleTheme() {
  const [darkModeState, setDarkModeState] = useRecoilState(darkMode);

  const save = (value: 'light' | 'dark') => {
    setCookie(null, 'themeCookie', value, {path: '/'})
  };

  const toggle = () => {
    if (darkModeState === 'dark') {
      document.body.dataset.theme = "light"
      setDarkModeState("light")
      save('light');
    } else if(darkModeState === 'light') {
      document.body.dataset.theme = "dark"
      setDarkModeState("dark")
      save('dark');
    }
  };

  return [darkModeState, toggle] as const;
}
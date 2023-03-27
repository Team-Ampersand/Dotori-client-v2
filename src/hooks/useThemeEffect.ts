import { parseCookies, setCookie } from 'nookies';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkMode } from 'recoilAtoms/recoilAtomContainer';
 
const UseThemeEffect = () => {
  const [, setDarkModeState] = useRecoilState(darkMode);
  const { themeCookie } = parseCookies();
  
  useEffect(() => {
    if(!themeCookie) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)',).matches;
      document.body.dataset.theme = systemPrefersDark ? 'dark' : "light"
      setDarkModeState(systemPrefersDark ? 'dark' : 'light');
      setCookie(null, 'theme', systemPrefersDark ? 'dark' : "light", {path: '/',})
    }else {
        document.body.dataset.theme = themeCookie
        setDarkModeState(themeCookie === 'dark' ? 'dark' : "light") 
    }
  }, []);
}
export default UseThemeEffect;
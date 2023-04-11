import { MoonIcon, SunIcon } from 'assets/svg';
import useToggleTheme from 'hooks/useToggleTheme';
import * as S from './style';

const DarkModeButton = () => {
  const [theme, toggle] = useToggleTheme();
  return (
    <S.DarkModeButtonWrapper onClick={toggle} isDarkTheme={theme === 'dark'}>
      <S.TogleIcon isDarkTheme={theme === 'dark'}>
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </S.TogleIcon>
    </S.DarkModeButtonWrapper>
  );
};

export default DarkModeButton;

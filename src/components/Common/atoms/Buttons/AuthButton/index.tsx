import UseToggleTheme from 'hooks/useToggleTheme';
import { Palette } from 'styles/globals';
import { AuthButtonProps } from 'types';
import * as S from './style';

const AuthButton = ({
  text,
  isCheck,
  onClick,
  width,
  type,
}: AuthButtonProps) => {
  const [theme] = UseToggleTheme();
  return (
    <S.AuthButton
      type={type}
      onClick={onClick}
      width={width || 380}
      style={{
        background: isCheck
          ? `${Palette.PRIMARY_P10}`
          : `${Palette.PRIMARY_P30}`,
        color:
          !(theme === 'light') && !isCheck ? `${Palette.NEUTRAL_N20}` : 'white',
      }}
    >
      {text}
    </S.AuthButton>
  );
};

export default AuthButton;

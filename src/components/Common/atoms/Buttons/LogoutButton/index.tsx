import { LogoutIcon } from 'assets/svg';
import { useRouter } from 'next/router';
import { logout } from 'utils/Libs/logout';
import * as S from './style';

const LogoutButton = () => {
  const router = useRouter();
  const handleClickLogout = () => {
    logout();
    router.push('/signin');
  };

  return (
    <S.LogoutButtonWrapper onClick={handleClickLogout}>
      <LogoutIcon />
      <span>로그아웃</span>
    </S.LogoutButtonWrapper>
  );
};

export default LogoutButton;

import MenuOption from 'components/Home/atoms/MenuOption';
import UseToggleTheme from 'hooks/useToggleTheme';
import { useRouter } from 'next/router';
import { MenuModal } from 'types';
import { logout } from 'utils/Libs/logout';
import * as S from './style';

const MenuModal = ({
  isClick,
  setIsClick,
  setPenaltyModal,
  setProfileImgModal,
}: MenuModal) => {
  const [theme] = UseToggleTheme();
  const router = useRouter();
  const menuArr: ('프로필수정' | '규정위반 내역' | '로그아웃')[] = [
    '프로필수정',
    '규정위반 내역',
    '로그아웃',
  ];

  const handleClick = (name: '프로필수정' | '규정위반 내역' | '로그아웃') => {
    setIsClick(!isClick);
    switch (name) {
      case '프로필수정':
        return setProfileImgModal(true);
      case '규정위반 내역':
        return setPenaltyModal(true);
      case '로그아웃':
        return handleClickLogout();
    }
  };

  const handleClickLogout = () => {
    logout();
    router.push('/signin');
  };

  return (
    <>
      <S.MenuOverlay isClick={isClick} onClick={() => setIsClick(false)} />
      <S.MenuModal>
        {isClick &&
          menuArr.map((i) => (
            <MenuOption
              key={i}
              name={i}
              onClick={() => handleClick(i)}
              theme={theme}
            />
          ))}
      </S.MenuModal>
    </>
  );
};

export default MenuModal;

import MenuOption from 'components/Home/atoms/MenuOption';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { MenuModal } from 'types';
import { removeToken } from 'utils/Libs/removeToken';
import * as S from './style';

const MenuModal = ({
  isClick,
  setIsClick,
  setPenaltyModal,
  setProfileImgModal,
}: MenuModal) => {
  const router = useRouter();
  const menuArr: (
    | '프로필수정'
    | '규정위반 내역'
    | '비밀번호 변경'
    | '로그아웃'
  )[] = ['프로필수정', '규정위반 내역', '비밀번호 변경', '로그아웃'];

  const handleClick = (
    name: '프로필수정' | '규정위반 내역' | '비밀번호 변경' | '로그아웃'
  ) => {
    setIsClick(!isClick);
    switch (name) {
      case '프로필수정':
        return setProfileImgModal(true);
      case '규정위반 내역':
        return setPenaltyModal(true);
      case '비밀번호 변경':
        return router.push('/changePasswd');

      case '로그아웃':
        return logout();
    }
  };

  const logout = () => {
    removeToken();
    router.push('/signin');
    toast.info('로그아웃되었습니다.');
  };

  return (
    <>
      <S.MenuOverlay isClick={isClick} onClick={() => setIsClick(false)} />
      <S.MenuModal>
        {isClick &&
          menuArr.map((i) => (
            <MenuOption key={i} name={i} onClick={() => handleClick(i)} />
          ))}
      </S.MenuModal>
    </>
  );
};

export default MenuModal;

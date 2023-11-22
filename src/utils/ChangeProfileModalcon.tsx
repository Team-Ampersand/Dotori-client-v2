import { LogoutIcon, PenIcon, PenaltyIcon } from 'assets/svg';

export const ChangeProfileModalcon = () => {
  return {
    프로필수정() {
      return <PenIcon />;
    },
    '규정위반 내역'() {
      return <PenaltyIcon />;
    },
    로그아웃() {
      return <LogoutIcon />;
    },
  };
};

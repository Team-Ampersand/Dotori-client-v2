import * as S from './style';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';

const MassageHeader = () => {
  return (
    <S.HeaderWrapper>
      <span>안마의자 신청</span>
      <DarkModeButton />
    </S.HeaderWrapper>
  );
};

export default MassageHeader;

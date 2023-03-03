import * as S from './style';
import { CapIcon, CupIcon } from 'assets/svg';
import { NullApplicationItemProps } from 'types';

const NullApplicstionItem = ({ type }: NullApplicationItemProps) => {
  return (
    <S.NullApplicstionWrapper>
      {type === 'selfstudy' ? (
        <>
          <CapIcon />
          <span>자습 신청한 인원이 없습니다..</span>
          <p>홈에서 자습 신청을 해보세요!</p>
        </>
      ) : (
        <>
          <CupIcon />
          <span>안마의자를 신청한 인원이 없습니다..</span>
          <p>홈에서 안마의자 신청을 해보세요!</p>
        </>
      )}
    </S.NullApplicstionWrapper>
  );
};

export default NullApplicstionItem;

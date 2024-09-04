import { CapIcon, CupIcon } from 'assets/svg';
import * as S from './style';

interface Props {
  type: 'selfstudy' | 'massage';
}

const NullApplicstionItem = ({ type }: Props) => {
  const isSelfStudy = type === 'selfstudy';

  const IconComponent = isSelfStudy ? CapIcon : CupIcon;
  const message = isSelfStudy
    ? '자습 신청한 인원이 없습니다..'
    : '안마의자를 신청한 인원이 없습니다..';
  const subMessage = isSelfStudy
    ? '홈에서 자습 신청을 해보세요!'
    : '홈에서 안마의자 신청을 해보세요!';

  return (
    <S.NullApplicstionWrapper>
      <IconComponent />
      <span>{message}</span>
      <p>{subMessage}</p>
    </S.NullApplicstionWrapper>
  );
};

export default NullApplicstionItem;

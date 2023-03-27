import * as S from './style';
import lotation from 'assets/json/lotation.json';
import Lottie from 'lottie-react';
import { DotoriLoadingLogo } from 'assets/svg';

const LoadingPart = () => (
  <S.LoadingPartWrapper>
    <p>로딩이 완료되면 화면을 클릭해주세요...</p>
    <DotoriLoadingLogo width={501} height={125} />
    <Lottie animationData={lotation} className="lottieClass" />
  </S.LoadingPartWrapper>
);

export default LoadingPart;

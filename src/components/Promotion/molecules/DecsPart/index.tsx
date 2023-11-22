import { useRouter } from 'next/router';
import { useState } from 'react';
import { gauthUrl } from 'utils/Libs/gauthUrl';
import * as S from './style';
import { Login } from 'api/member';

const DecsPart = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  const handleMouseEvent = () => {
    if (mouseDown) {
      setMouseDown(false);
      setIsShow(false);
    }
  };
  const router = useRouter();
  Login();
  return (
    <>
      <S.DecsPartOverlay isShow={isShow} />
      <S.DecsPartWrapper
        isShow={isShow}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseMove={handleMouseEvent}
      >
        <S.PomotionTitle>
          DOTORI,
          <S.GradationTitle>Dormitory</S.GradationTitle>를 담다.
        </S.PomotionTitle>
        <S.PomotionDesc>
          <p>
            DOTORI는 GSM 기숙사 관리 시스템으로, 학생들이 주체적으로 개발한
            웹사이트입니다. 소프트웨어
          </p>
          <p>
            마이스터고등학교 &앰퍼샌드 동아리 부원들이 직접 개발하여, 효율적인
            서비스 제공을 목적으로 합니다.
          </p>
          <p>
            이 작은 서비스가 우리 학교의 인식을 바꿀 좋은 마케팅 거리가 될 수
            있도록 만들어졌습니다.
          </p>
        </S.PomotionDesc>
        <S.SignInBtn onClick={() => router.replace(gauthUrl)}>
          <p>GAuth로 로그인</p>
        </S.SignInBtn>
      </S.DecsPartWrapper>
    </>
  );
};

export default DecsPart;

import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import * as S from './style';
import DecsPart from 'components/Promotion/molecules/DecsPart';
import LoadingPart from 'components/Promotion/molecules/LoadingPart';

const PromotionOrganisms = () => {
  const [isShow, setIsShow] = useState(false);
  const [isNotLoading, setIsNotLoading] = useState(true);

  return (
    <>
      <DecsPart isShow={isShow} setIsShow={setIsShow} />
      <S.SplineWrapper>
        {isNotLoading && <LoadingPart />}
        <Spline
          scene="https://prod.spline.design/m1ipzrHAoZPDFFSL/scene.splinecode"
          onClick={() => setIsShow(true)}
          onLoad={() => setIsNotLoading(false)}
        />
      </S.SplineWrapper>
    </>
  );
};

export default PromotionOrganisms;

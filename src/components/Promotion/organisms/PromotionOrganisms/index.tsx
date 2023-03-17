import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import * as S from "./style";
import DecsPart from 'components/Promotion/molecules/DescPart';

const PromotionOrganisms = () => {
  const [isShow, setIsShow] = useState(false);
  
  return (
    <>
        <DecsPart isShow={isShow} setIsShow={setIsShow}/>
        <S.SplineWrapper>
            <Spline
                scene="https://prod.spline.design/m1ipzrHAoZPDFFSL/scene.splinecode"
                onClick={() => setIsShow(true)}
            />
        </S.SplineWrapper>

    </>
  )
}

export default PromotionOrganisms
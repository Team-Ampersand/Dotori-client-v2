import { MainTemplates } from 'components/Common/templates/MainTemplates/style'
import UseThemeEffect from 'hooks/useThemeEffect'
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import * as S from "./style";
import DecsPart from 'components/Promotion/molecules/DescPark';

const PromotionOganisms = () => {
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

export default PromotionOganisms
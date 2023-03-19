import * as S from './style';
import Dotori3DImg from 'assets/png/Dotori3D.png';
import Image from 'next/image';

const ImgForm = () => {
  return (
    <S.Layer>
      <S.TopWrapper>
        <h4>사진</h4>
        <S.ToolTipBtn>!</S.ToolTipBtn>
        <S.ToolTipBox>
          지원형식 : tiff, jfif, pjp, apng, ico, gif, svg, webp, xbm, jxl, svgz,
          jpg, jpeg, png, bmp, tif, pjpeg, avif
        </S.ToolTipBox>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.ImgInput id="imgForm" type="file" />
        <S.ImgInputLabel htmlFor="imgForm">
          <S.Camera />
          <p>이미지 추가</p>
        </S.ImgInputLabel>
        <>
          <S.ImgWrapper>
            <Image
              src={Dotori3DImg}
              alt="image"
              width={200}
              height={200}
              layout="fill"
              objectFit={'cover'}
            />
          </S.ImgWrapper>
        </>
        <>
          <S.ImgWrapper>
            <Image
              src={Dotori3DImg}
              alt="image"
              width={200}
              height={200}
              layout="fill"
              objectFit={'cover'}
            />
          </S.ImgWrapper>
        </>
        <>
          <S.ImgWrapper>
            <Image
              src={Dotori3DImg}
              alt="image"
              width={200}
              height={200}
              layout="fill"
              objectFit={'cover'}
            />
          </S.ImgWrapper>
        </>
        <>
          <S.ImgWrapper>
            <Image
              src={Dotori3DImg}
              alt="image"
              width={200}
              height={200}
              layout="fill"
              objectFit={'cover'}
            />
          </S.ImgWrapper>
        </>
        <>
          <S.ImgWrapper>
            <Image
              src={Dotori3DImg}
              alt="image"
              width={200}
              height={200}
              layout="fill"
              objectFit={'cover'}
            />
          </S.ImgWrapper>
        </>
      </S.BottomWrapper>
    </S.Layer>
  );
};

export default ImgForm;

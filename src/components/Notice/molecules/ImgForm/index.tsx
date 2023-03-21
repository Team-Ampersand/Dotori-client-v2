import * as S from './style';
import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  register: UseFormRegisterReturn;
  data: File[];
}

const ImgForm = ({ register, data }: Props) => {
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
        <S.ImgInput id="imgForm" type="file" {...register} />
        <S.ImgInputLabel htmlFor="imgForm">
          <S.Camera />
          <p>이미지 추가</p>
        </S.ImgInputLabel>
        {data &&
          data.map((item, key) => (
            <S.ImgWrapper key={key}>
              <Image
                src={URL.createObjectURL(item)}
                alt="image"
                width={200}
                height={200}
                layout="fill"
                objectFit={'cover'}
              />
            </S.ImgWrapper>
          ))}
      </S.BottomWrapper>
    </S.Layer>
  );
};

export default ImgForm;

import * as S from './style';
import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { isNoticeModify } from 'recoilAtoms/recoilAtomContainer';

interface Props {
  register: UseFormRegisterReturn;
  data: string[];
  onDelete: (id: number) => void;
}

const ImgForm = ({ register, data, onDelete }: Props) => {
  const noticeModify = useRecoilValue(isNoticeModify);
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
        {!noticeModify && (
          <>
            <S.ImgInput id="imgForm" type="file" {...register} />
            <S.ImgInputLabel htmlFor="imgForm">
              <S.Camera />
              <p>이미지 추가</p>
            </S.ImgInputLabel>
          </>
        )}
        {data &&
          data.map((item, key) => (
            <S.ImgWrapper key={key}>
              <Image
                src={item}
                alt="image"
                width={200}
                height={200}
                layout="fill"
                objectFit={'cover'}
              />
              {!noticeModify && (
                <S.ImgDeleteBtn onClick={() => onDelete(key)} />
              )}
            </S.ImgWrapper>
          ))}
      </S.BottomWrapper>
    </S.Layer>
  );
};

export default ImgForm;

import { UseFormRegister } from 'react-hook-form';
import { noticeFormType } from 'types/components/NoticePage';
import * as S from './style';

interface Props {
  register: UseFormRegister<noticeFormType>;
}

const WriteForm = ({ register }: Props) => {
  return (
    <S.Layer>
      <S.FormHeader>
        <p>작성자: 도토리</p>
        <small>2022년 7월 6일 오후 3시 36분</small>
      </S.FormHeader>
      <S.FormContent>
        <input
          placeholder="제목(1~45자)"
          maxLength={45}
          {...register('title', {
            required: true,
            minLength: 1,
          })}
        />
        <textarea
          placeholder="내용(1~5000자)"
          maxLength={5000}
          {...register('content', {
            required: true,
            minLength: 1,
          })}
        />
      </S.FormContent>
    </S.Layer>
  );
};

export default WriteForm;

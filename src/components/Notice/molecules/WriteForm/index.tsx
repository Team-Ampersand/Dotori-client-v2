import { UseFormRegister } from 'react-hook-form';
import { noticeFormType } from 'types/components/NoticePage';
import * as S from './style';
import { todayDate } from 'utils/todayDate';

interface Props {
  register: UseFormRegister<noticeFormType>;
  role: string;
}

const WriteForm = ({ register, role }: Props) => {
  const writeDate = `${todayDate()[0]}년 ${todayDate()[1]}월 ${
    todayDate()[2]
  }일`;

  return (
    <S.Layer>
      <S.FormHeader>
        <p>{`작성자: ${role}`}</p>
        <small>{writeDate}</small>
      </S.FormHeader>
      <S.FormContent>
        <input
          placeholder="제목(1~45자)"
          maxLength={45}
          {...register('title', {
            required: {
              value: true,
              message: '제목을 입력해 주세요',
            },
          })}
        />
        <textarea
          placeholder="내용(1~5000자)"
          maxLength={5000}
          {...register('content', {
            required: {
              value: true,
              message: '내용을 입력해 주세요',
            },
          })}
        />
      </S.FormContent>
    </S.Layer>
  );
};

export default WriteForm;

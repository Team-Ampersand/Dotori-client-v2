import { useState } from 'react';
import { getMusic, postMusic } from 'api/music';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedDate, songNoticeModal } from 'recoilAtoms/recoilAtomContainer';
import { mutate } from 'swr';
import { dateRegex } from 'utils/dateRegex';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import * as S from './style';
import { debounce } from 'lodash';

const SongForm = () => {
  const role = getRole();
  const setModal = useSetRecoilState(songNoticeModal);
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: { url: '' },
  });

  const regUrl =
    /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;

  const [isValid, setIsValid] = useState(false);

  const date = useRecoilValue(selectedDate);
  const postDate = dateRegex(String(date));

  const debouncedOnSuccess = debounce(async () => {
    const isSuccess = await postMusic(role, getValues('url'));
    if (isSuccess) {
      mutate(SongController.music(role), () => getMusic(role, postDate));
    }
  }, 300);

  const onError = (err: Object) => {
    toast.warn(Object.values(err)[0].message);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const isValid = regUrl.test(url);
    setIsValid(isValid);
  };

  return (
    <S.Layer onSubmit={handleSubmit(debouncedOnSuccess, onError)}>
      <S.FormHeader>
        <h2>음악 신청</h2>
        <S.NoticeModalBtn type="button" onClick={() => setModal(true)}>
          !
        </S.NoticeModalBtn>
      </S.FormHeader>
      {role !== 'admin' ? (
        <>
          <S.Input
            placeholder="URL을 입력해 주세요"
            type="url"
            {...register('url', {
              required: {
                value: true,
                message: '아무것도 입력하지 않았어요',
              },
              pattern: {
                value: regUrl,
                message: 'URL 형식에 맞게 입력해주세요',
              },
            })}
            onChange={handleInputChange}
          />
          <S.Submit type="submit" isValid={isValid}>
            신청하기
          </S.Submit>
        </>
      ) : (
        <S.NotForm>사감선생님은 기상음악을 신청하지 않아도 됩니다</S.NotForm>
      )}
    </S.Layer>
  );
};

export default SongForm;

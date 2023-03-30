import { postMusic } from 'api/music';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { songNoticeModal } from 'recoilAtoms/recoilAtomContainer';
import { mutate } from 'swr';
import { getRole } from 'utils/Libs/getRole';
import * as S from './style';

const SongForm = () => {
  const role = getRole();
  const setModal = useSetRecoilState(songNoticeModal);
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: { url: '' },
  });
  const regUrl =
    /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;

  const onSuccess = async () => {
    const isSuccess = await postMusic(role, getValues('url'));
    if (isSuccess) mutate(`/${role}/music`);
  };

  const onError = (err: Object) => {
    return toast.warn(Object.values(err)[0].message);
  };

  return (
    <S.Layer onSubmit={handleSubmit(onSuccess, onError)}>
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
          />
          <S.Submit type="submit">신청하기</S.Submit>
        </>
      ) : (
        <S.NotForm>사감선생님은 기상음악을 신청하지 않아도 됩니다</S.NotForm>
      )}
    </S.Layer>
  );
};

export default SongForm;

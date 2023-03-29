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
        <S.NoticeModalBtn onClick={() => setModal(true)}>!</S.NoticeModalBtn>
      </S.FormHeader>
      <S.Input
        placeholder="URL을 입력해 주세요"
        type="text"
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
    </S.Layer>
  );
};

export default SongForm;

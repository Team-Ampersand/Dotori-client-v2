import { useState } from 'react';
import { getMusic, postMusic } from 'api/music';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { selectedDate, songNoticeModal } from 'recoilAtoms/recoilAtomContainer';
import { mutate } from 'swr';
import { dateRegex } from 'utils/dateRegex';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import * as S from './style';
import FormHeader from 'components/Song/atoms/FormHeader';
import Input from 'components/Song/atoms/Input';
import Submit from 'components/Song/atoms/Submit';

type SongFormProps = {
  selectedDate: Date;
};

const SongForm: React.FC<SongFormProps> = ({ selectedDate }) => {
  const role = getRole();
  const setModal = useSetRecoilState(songNoticeModal);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { url: '' },
  });

  const [isValid, setIsValid] = useState(false);

  const postDate = dateRegex(String(selectedDate));

  const onSuccess = async () => {
    const isSuccess = await postMusic(role, getValues('url'));
    if (isSuccess) {
      mutate(SongController.music(role), () => getMusic(role, postDate));
    }
  };

  const onError = (err: Object) => {
    toast.warn(Object.values(err)[0].message);
  };

  return (
    <S.Layer onSubmit={handleSubmit(onSuccess, onError)}>
      <FormHeader setModal={setModal} />
      {role !== 'admin' ? (
        <>
          <Input setIsValid={setIsValid} register={register} />
          <Submit isValid={isValid} isSubmitting={isSubmitting} />
        </>
      ) : (
        <S.NotForm>사감선생님은 기상음악을 신청하지 않아도 됩니다</S.NotForm>
      )}
    </S.Layer>
  );
};

export default SongForm;

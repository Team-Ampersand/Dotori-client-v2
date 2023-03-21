import { postNotice } from 'api/notice';
import BottomBtnBox from 'components/Notice/molecules/BottomBtnBox';
import ImgForm from 'components/Notice/molecules/ImgForm';
import WriteForm from 'components/Notice/molecules/WriteForm';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NoticeFormType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import * as S from './style';

const NoticeWrite = () => {
  const { register, watch, handleSubmit } = useForm<NoticeFormType>({
    defaultValues: { title: '', content: '' },
  });
  const formData = new FormData();
  const [imgList, setImgList] = useState<File[]>([]);
  const role = getRole();
  const router = useRouter();
  // const { data, mutate } = useSWR(`/${role}/getNotice`);

  const onChangeImg = () => {
    const images = watch('img');
    setImgList([...imgList, images[0]]);
  };

  const onSubmit = async () => {
    const data = await postNotice(
      role,
      watch('title'),
      watch('content'),
      imgList
    );
    console.log(data);
    if (!data) return;
    router.push('/notice');
  };

  return (
    <S.Layer onSubmit={handleSubmit(onSubmit)}>
      <WriteForm register={register} />
      <ImgForm
        register={register('img', {
          onChange: () => {
            onChangeImg();
          },
        })}
        data={imgList}
      />
      <BottomBtnBox />
    </S.Layer>
  );
};

export default NoticeWrite;

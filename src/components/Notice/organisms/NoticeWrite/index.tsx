import { postNotice, putNotice } from 'api/notice';
import { RoleData } from 'assets/data/RoleData';
import BottomBtnBox from 'components/Notice/molecules/BottomBtnBox';
import ImgForm from 'components/Notice/molecules/ImgForm';
import WriteForm from 'components/Notice/molecules/WriteForm';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isNoticeModify,
  isNoticeWrite,
  noticeContent,
} from 'recoilAtoms/recoilAtomContainer';
import { mutate } from 'swr';
import { noticeFormType } from 'types/components/NoticePage';
import { getUserToken } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import * as S from './style';

const NoticeWrite = () => {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    resetField,
    formState: { isSubmitting },
  } = useForm<noticeFormType>({
    defaultValues: { title: '', content: '' },
  });

  const [imgList, setImgList] = useState<string[]>([]);
  const [postImgList, setPostImgList] = useState<File[]>([]);
  const [content, setContent] = useRecoilState(noticeContent);
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const noticeModify = useRecoilValue(isNoticeModify);

  const baseRole = getUserToken();
  const role = baseRole !== '' ? RoleData.TOKEN[baseRole] : '';
  const writerRole = baseRole !== '' ? RoleData.WRITER[baseRole] : '';

  useEffect(() => {
    if (!content) return;

    setValue('title', content.title);
    setValue('content', content.content);
    content.boardImage.map((img) => {
      setImgList([...imgList, img.url]);
    });
  }, []);

  const onChangeImg = () => {
    const images = watch('img');
    setImgList([...imgList, URL.createObjectURL(images[0])]);
    setPostImgList([...postImgList, images[0]]);

    resetField('img');
  };

  const onImgDelete = (id: number) => {
    URL.revokeObjectURL(imgList[id]);
    setPostImgList([...postImgList.filter((_item, key) => key !== id)]);
    setImgList([...imgList.filter((_item, key) => key !== id)]);
  };

  const onSubmit = async () => {
    noticeModify && content
      ? await putNotice(role, content.id, watch('title'), watch('content'))
      : await postNotice(role, watch('title'), watch('content'), postImgList);

    mutate(NoticeController.getNotice(role));
    setNoticeWrite(false);
    setContent(null);

    router.push('/notice');
  };

  const onError = (err: Object) => {
    return toast.error(Object.values(err)[0].message);
  };

  return (
    <S.Layer onSubmit={handleSubmit(onSubmit, onError)}>
      <WriteForm register={register} role={writerRole} />
      <ImgForm
        register={register('img', {
          onChange: () => {
            onChangeImg();
          },
        })}
        data={imgList}
        onDelete={(id: number) => onImgDelete(id)}
      />
      <BottomBtnBox isSubmitting={isSubmitting} />
    </S.Layer>
  );
};

export default NoticeWrite;

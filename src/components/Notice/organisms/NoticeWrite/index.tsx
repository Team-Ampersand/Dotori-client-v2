import { postNotice, putNotice } from 'api/notice';
import BottomBtnBox from 'components/Notice/molecules/BottomBtnBox';
import ImgForm from 'components/Notice/molecules/ImgForm';
import WriteForm from 'components/Notice/molecules/WriteForm';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isNoticeFetch,
  isNoticeModify,
  isNoticeWrite,
  noticeContent,
} from 'recoilAtoms/recoilAtomContainer';
import { noticeFormType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import requestWriter from 'utils/Libs/requestRole';
import * as S from './style';

const NoticeWrite = () => {
  const { register, watch, handleSubmit, setValue, reset } =
    useForm<noticeFormType>({
      defaultValues: { title: '', content: '' },
    });
  const [imgList, setImgList] = useState<string[]>([]);
  const [postImgList, setPostImgList] = useState<File[]>([]);
  const role = getRole();
  const router = useRouter();
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeFetch = useSetRecoilState(isNoticeFetch);
  const [content, setContent] = useRecoilState(noticeContent);
  const noticeModify = useRecoilValue(isNoticeModify);

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
    reset({ title: watch('title'), content: watch('content') });
  };

  const onSubmit = async () => {
    noticeModify && content
      ? await putNotice(role, content.id, watch('title'), watch('content'))
      : await postNotice(role, watch('title'), watch('content'), postImgList);
    setNoticeFetch(true);
    setNoticeWrite(false);
    setContent(null);

    router.push('/notice');
  };

  const onError = (err: Object) => {
    return toast.error(Object.values(err)[0].message);
  };

  const onImgDelete = (id: number) => {
    URL.revokeObjectURL(imgList[id]);
    setPostImgList([...postImgList.filter((_item, key) => key !== id)]);
    setImgList([...imgList.filter((_item, key) => key !== id)]);
  };

  return (
    <S.Layer onSubmit={handleSubmit(onSubmit, onError)}>
      <WriteForm register={register} role={requestWriter(role)} />
      <ImgForm
        register={register('img', {
          onChange: () => {
            onChangeImg();
          },
        })}
        data={imgList}
        onDelete={(id: number) => onImgDelete(id)}
      />
      <BottomBtnBox />
    </S.Layer>
  );
};

export default NoticeWrite;

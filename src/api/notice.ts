import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { NoticeController } from 'utils/Libs/requestUrls';

export const getNotice = async (role: string) => {
  try {
    const { data } = await apiClient.get(NoticeController.getNotice(role));
    return { data };
  } catch (e: any) {}
};

export const postNotice = async (
  role: string,
  title: string,
  content: string,
  img: File[]
) => {
  let formData = new FormData();
  img.map((item) => formData.append('files', item));

  let boardDto = {
    title: title,
    content: content,
  };

  formData.append(
    'boardDto',
    new Blob([JSON.stringify(boardDto)], { type: 'application/json' })
  );

  try {
    const { data } = await apiClient.post(
      NoticeController.getNotice('developer')
    );
    toast.success('공지사항 작성이 완료되었습니다');
    return { data };
  } catch (e: any) {}
};

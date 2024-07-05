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

  let boardDto = {
    title: title,
    content: content,
  };

  formData.append(
    'boardDto',
    new Blob([JSON.stringify(boardDto)], {
      type: 'application/json',
    })
  );

  if (img.length) img.map((item) => formData.append('files', item));
  else formData.append('files', new Blob());

  try {
    const { data } = await apiClient.post(
      NoticeController.getNotice(role),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    toast.success('공지사항 작성이 완료되었습니다');
    return { data };
  } catch (e: any) {
    toast.error('공지사항 작성에 실패하였습니다');
    return { e };
  }
};

export const deleteNotice = async (role: string, boardIdx: number) => {
  try {
    await apiClient.delete(
      NoticeController.getNoticeDetail(role, String(boardIdx))
    );
    toast.success('공지사항 삭제가 완료되었습니다');
    return;
  } catch (e: any) {}
};

export const putNotice = async (
  role: string,
  boardIdx: number,
  title: string,
  content: string
) => {
  try {
    await apiClient.put(
      NoticeController.getNoticeDetail(role, String(boardIdx)),
      {
        title: title,
        content: content,
      }
    );
    toast.success('공지사항 수정이 완료되었습니다');
    return;
  } catch (e: any) {
    toast.error('공지사항 수정이 실패하였습니다');
  }
};

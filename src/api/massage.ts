import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { MassageController } from 'utils/Libs/requestUrls';

export const applyMassage = async (role: string) => {
  try {
    const {
      data: { code, msg },
    } = await apiClient.post(MassageController.massage(role));
    if (code === 202) return !toast.error(msg);
    return toast.success('안마의자 신청이 완료되었어요');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 409')
      toast.warning('안마의자 신청을 할 수 없는 상태에요');
    return false;
  }
};

export const applyCancelMassage = async (role: string) => {
  try {
    const {
      data: { code, msg },
    } = await apiClient.delete(MassageController.massage(role));
    if (code === 202) return !toast.error(msg);
    return toast.success('안마의자 신청이 취소 되었어요.');
  } catch (e) {
    return false;
  }
};

export const applyModifyMassage = async (role: string, limit: number) => {
  try {
    await apiClient.patch(MassageController.modifyMassage(role), {
      limit,
    });
    return toast.success('안마의자 인원이 수정 되었어요');
  } catch (e) {
    return false;
  }
};

import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { SelfstudyController } from 'utils/Libs/requestUrls';

export const applySelfStudy = async (role: string) => {
  try {
    const {
      data: { code, msg },
    } = await apiClient.post(SelfstudyController.selfStudy(role));
    if (code === 202) return !toast.error(msg);
    return toast.success('자습 신청이 완료 되었어요');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 409')
      toast.warning('신청을 할 수 없는 상태에요');
    return false;
  }
};

export const applyCancelStudy = async (role: string) => {
  try {
    const {
      data: { code, msg },
    } = await apiClient.delete(SelfstudyController.selfStudy(role));
    if (code === 202) return !toast.error(msg);
    return toast.success('자습 신청이 취소 되었어요');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 409')
      toast.warning('신청취소를 할 수 없는 상태에요');
    return false;
  }
};

export const applyModifyStudy = async (role: string, limit: number) => {
  try {
    await apiClient.patch(SelfstudyController.modiftStudy(role), {
      limit,
    });
    return toast.success('자습 인원이 수정 되었어요');
  } catch (e) {
    return false;
  }
};

export const selfStudySearch = async (
  role: string,
  name: string | null,
  grade: string | null,
  classNum: string | null,
  gender: string | null
) => {
  try {
    const { data } = await apiClient.get(
      SelfstudyController.selfStudySearch(role),
      {
        params: {
          name: name,
          grade: grade,
          classNum: classNum,
          gender: gender,
        },
      }
    );
    return { data };
  } catch (e: any) {}
};

export const selfStudyCheck = async (
  role: string,
  memberId: number | undefined,
  check: boolean
) => {
  try {
    const { data } = await apiClient.patch(
      SelfstudyController.selfStudyCheck(role, memberId),
      {
        selfStudyCheck: check,
      }
    );
    return { data };
  } catch (e: any) {}
};

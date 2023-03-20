import SelfstudyCheck from 'components/SelfStudy/atoms/SelfstudyCheck/SelfstudyCheck';
import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { SelfstudyController } from 'utils/Libs/requestUrls';

export const applySelfStudy = async (role: string) => {
  try {
    const { data } = await apiClient.post(SelfstudyController.selfStudy(role));
    if (data.code === 202) {
      toast.error(data.msg);
      return false;
    }
    toast.success('자습 신청이 완료 되었어요');
    return true;
  } catch (e: any) {
    if (e.message === 'Request failed with status code 409') {
      toast.warning('신청을 할 있는 상태가 아니에요');
    }
    return false;
  }
};

export const applyCancelStudy = async (role: string) => {
  try {
    const { data } = await apiClient.delete(
      SelfstudyController.selfStudy(role)
    );
    if (data.code === 202) {
      toast.error(data.msg);
      return false;
    }
    toast.success('자습 신청이 취소 되었어요');
    return true;
  } catch (e: any) {
    if (e.message === 'Request failed with status code 409') {
      toast.warning('신청취소을 할 있는 상태가 아니에요');
    }
    return false;
  }
};

export const applyModifyStudy = async (role: string, num:number) => {
	try {
		await apiClient.put(SelfstudyController.studyModify(role,num), {
			number:num,
		});
		toast.success('자습 인원이 수정 되었어요');
		return true;
	} catch (e) {
		return false;
	}
};

export const selfStudySearch = async (
  name: string,
  gender: string,
  classNum: string,
  grade: string,
  role: string,
  selfStudyCheck: boolean | null
) => {
  try {
    const { data } = await apiClient.get(
      SelfstudyController.selfStudySearch(
        name,
        gender,
        classNum,
        grade,
        role,
        selfStudyCheck
      )
    );
    return { data };
  } catch (e) {}
};

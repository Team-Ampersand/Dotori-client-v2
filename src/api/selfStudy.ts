import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { SelfstudyController } from 'utils/Libs/requestUrls';

export const applySelfStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudy(role));
		toast.success('자습 신청이 완료 되었어요');
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 202'){
			toast.warning('자습신청할 수 있는 시간이 아니에요');
		}
		else if(e.message === 'Request failed with status code 409') {
			toast.warning('자습 신청을 할 있는 상태가 아니에요');
		}
	}
};

export const applyCancelStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudy(role));
		toast.success('자습 신청이 취소 되었어요');
		return { data };
	} catch (e) {}
};

export const applyModifyStudy = async (role: string, num:number) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.studyModify(role,num), {
			number:num,
		});
		toast.success('자습 인원이 수정 되었어요');
		return { data };
	} catch (e) {}
};

export const selfStudyInfo = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudyInfo(role));
		return { data };
	} catch (e) {}
}
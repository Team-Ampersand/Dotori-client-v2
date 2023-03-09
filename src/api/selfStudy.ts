import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { SelfstudyController } from 'utils/Libs/requestUrls';

export const applySelfStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudy(role));
		toast.success('자습 신청이 완료 되었어요');
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409')
			toast.warning('자습 신청 인원이 50명이 넘어 신청하실 수 없어요');
		else toast.warning('자습 신청을 할 수 없는 상태에요');
	}
};

export const applyCancelStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.cancelStudy(role));
		toast.success('자습 신청이 취소 되었어요');
		return { data };
	} catch (e) {}
};

export const applyModifyStudy = async (role: string, num:number) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.modifyStudy(role,num), {
			number:num,
		});
		toast.success('자습 인원이 수정 되었어요');
		return { data };
	} catch (e) {}
};
import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { MassageController } from 'utils/Libs/requestUrls';

export const applyMassage = async (role: string) => {
	try {
		const {data} = await apiClient.post(MassageController.massage(role));
		if (data.code === 202){
			toast.error(data.msg);
			return false;
		}
		toast.success('안마의자 신청이 완료되었어요');
		return true;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409')
			toast.warning('안마의자 신청 인원이 5명을 넘어 신청할 수 없어요');
		else toast.warning('안마의자 신청을 할 수 없는 상태에요');
		return false;
	}
};

export const applyCancelMassage = async (role: string) => {
	try {
		await apiClient.put(MassageController.cancelMassage(role));
		toast.success('안마의자 신청이 취소 되었어요.');
		return true;
	} catch (e) {
		return false
	}
};

export const applyModifyMassage = async (role: string, num:number) => {
	try {
		await apiClient.put(MassageController.modifyMassage(role,num), {
			limir:num,
		});
		toast.success('안마의자 인원이 수정 되었어요');
		return true;
	} catch (e) {
		return false;
	}
};
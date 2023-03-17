import { toast } from "react-toastify";
import { apiClient } from "utils/Libs/apiClient";
import { NoticeController } from "utils/Libs/requestUrls";

export const getNotice = async (role: string) => {
	try {
		const { data } = await apiClient.get(NoticeController.getNotice(role));
		return { data };
	} catch (e: any) {}
};
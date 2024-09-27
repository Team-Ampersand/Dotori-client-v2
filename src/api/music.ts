import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { SongController } from 'utils/Libs/requestUrls';

export const getMusic = async (role: string, date: string) => {
  try {
    const { data } = await apiClient.get(SongController.music(role), {
      params: {
        date: date,
      },
    });
    return data;
  } catch (e: any) {}
};

export const postMusic = async (role: string, url: string) => {
  try {
    const { data } = await apiClient.post(SongController.music(role), {
      url: url,
    });

    if (data.code === 202) {
      toast.error(data.msg);
      return false;
    }

    toast.success('음악신청을 성공하셨습니다');
    return true;
  } catch (e: any) {
    if (e.response.status === 409) toast.error('이미 노래를 신청하셨습니다');
    return false;
  }
};

export const deleteMusic = async (role: string, musicId: number) => {
  try {
    await apiClient.delete(SongController.deleteMusic(role, musicId));

    toast.success('음악삭제를 성공하셨습니다');
    return true;
  } catch (e) {
    toast.error('삭제하려는 음악을 찾지 못했습니다');
    return false;
  }
};

export const likeMusic = async (role: string, musicId: number) => {
  const response = await apiClient.patch(
    SongController.likeMusic(role, musicId),
  );
  return response.data;
};

export const getLikeMusic = async (role: string, date: string) => {
  try {
    const { data } = await apiClient.get(SongController.getlikeMusic(role), {
      params: {
        date: date,
      },
    });
    return data;
  } catch (e: any) {}
};

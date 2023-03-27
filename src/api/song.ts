import { apiClient } from 'utils/Libs/apiClient';
import { SongController } from 'utils/Libs/requestUrls';

export const getMusic = async (role: string) => {
  try {
    const { data } = await apiClient.get(SongController.music(role));
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postMusic = async (role: string) => {
  try {
    await apiClient.post(SongController.music(role));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteMusic = async (role: string, musicId: number) => {
  try {
    await apiClient.delete(SongController.deleteMusic(role, musicId));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

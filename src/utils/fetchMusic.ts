import { getLikeMusic, getMusic } from 'api/music';

export const fetchMusic = (role: string, date: string, option: string) => {
  return option === '좋아요순'
    ? getLikeMusic(role, date)
    : getMusic(role, date);
};

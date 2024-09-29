export interface SongType {
  id: number;
  url: string;
  username: string;
  email: string;
  createdTime: Date;
  stuNum: number;
  thumbnail: string;
  title: string;
  likeCount: number;
  memberLikeCheck: boolean;
}

export interface SongListType {
  content: SongType[];
}

export interface OptionType {
  value: string;
  label: string;
}

export interface MusicListSelectProps {
  options: OptionType[];
  selectedOption: OptionType;
  setSelectedOption: React.Dispatch<React.SetStateAction<OptionType>>; // string에서 OptionType으로 수정
}

export interface SongType {
  id: number;
  url: string;
  username: string;
  email: string;
  createdTime: Date;
  stuNum: number;
  thumbnail: string;
  title: string;
}

export interface SongListType {
  content: SongType[];
}

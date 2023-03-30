export interface SongType {
  id: number;
  url: string;
  username: string;
  email: string;
  createdTime: Date;
  stuNum: number;
}

export interface SongListType {
  content: SongType[];
}

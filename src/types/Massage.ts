export interface massageRankProps {
  rank: number;
  id: number;
  stuNum: string;
  memberName: string;
  gender: 'MALE' | 'FEMALE';
  profileImage: string | null
}

export interface massageListType {
  list: massageRankProps[];
}

export interface massageRankProps {
  rank: number;
  id: number;
  stuNum: string;
  memberName: string;
  gender: 'MALE' | 'FEMALE';
}

export interface massageListType {
  list: massageRankProps[];
}

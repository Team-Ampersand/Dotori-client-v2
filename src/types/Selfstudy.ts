export interface selfstudyListProps {
  rank?: number | undefined;
  id?: number;
  email?: string;
  memberName: string;
  stuNum: string;
  gender: 'MAN' | 'WOMAN';
  role?: string;
  selfStudyCheck: boolean;
}

export interface selfstudyListType {
  list: selfstudyListProps[];
}

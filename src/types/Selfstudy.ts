export interface selfstudyRankProps {
  rank: number;
  id: number;
  stuNum: string;
  memberName: string;
  gender: 'MAN' | 'WOMAN';
  selfStudyCheck: boolean;
}

export interface selfstudySearchProps {
  email: string;
  memberName: string;
  stuNum: string;
  gender: 'MAN' | 'WOMAN';
  role: string;
  selfStudyCheck: boolean;
}

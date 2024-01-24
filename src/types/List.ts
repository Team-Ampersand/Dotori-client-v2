export interface ApplicationItemProps {
  id: number | undefined;
  rank: number | undefined;
  selfStudyCheck: boolean | null;
  memberName: string;
  gender: string;
  stuNum: string;
  listType: string;
  lastRank?: number;
}

export interface NullApplicationItemProps {
  type: string;
}

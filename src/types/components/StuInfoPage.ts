export interface StuInfoType {
  id: number;
  gender: 'MAN' | 'WOMAN';
  memberName: string;
  stuNum: string;
  role: 'ROLE_DEVELOPER' | 'ROLE_COUNCILLOR' | 'ROLE_ADMIN' | 'ROLE_MEMBER';
  selfStudyStatus: 'CAN' | 'IMPOSSIBLE';
}

export interface SearchStuInfoType
  extends Omit<StuInfoType, 'selfStudyStatus'> {
  email: string;
  selfStudyStatus: boolean;
}

export interface ButtonProps {
  status?: boolean;
  hide?: boolean;
}

export interface StuInfoParamsType {
  name: string | null;
  gender: string | null;
  classNum: string | null;
  grade: number | null;
  role: string | null;
  selfStudyStatus: string | null;
}

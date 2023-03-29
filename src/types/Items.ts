export interface NoticeItemProps {
  writer: 'ROLE_DEVELOPER' | 'ROLE_COUNCILLOR' | 'ROLE_ADMIN';
  date: string;
  title: string;
  desc: string;
  isCurrenPage: boolean;
  id: number;
}

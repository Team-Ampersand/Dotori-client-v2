export interface NoticeItemProps {
  writer: '도토리' | '사감선생님' | '기숙사자치위원회';
  date: string;
  title: string;
  desc: string;
  isCurrenPage: boolean;
  id: number;
  onClick?: () => void;
}

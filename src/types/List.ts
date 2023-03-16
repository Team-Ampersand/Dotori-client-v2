export interface ApplicationItemProps {
  index: number;
  selfStudyCheck: boolean | null;
  memberName: string;
  gender: string;
  stuNum: string;
  listType: string;
}

export interface NullApplicationItemProps {
  type: string;
}

// export interface NoticeListProps {
//   id: number,
//   title: string,
//   roles: string,
//   createdTime: Date
// }
import { noticePageProps } from 'types/Home';

export interface noticeFormType {
  title: string;
  content: string;
  img: FileList;
}

export interface noticeListType {
  boardList: noticePageProps[];
}

export interface noticeDetailType extends Omit<noticePageProps, 'createdTime'> {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  modifiedDate: string | null;
  boardImage: {
    id: number;
    url: string;
  }[];
}

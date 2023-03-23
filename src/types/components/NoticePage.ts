import { noticePageProps } from 'types/Home';

export interface noticeFormType {
  title: string;
  content: string;
  img: FileList;
}

export interface noticeDetailType extends Omit<noticePageProps, 'createdTime'> {
  createdDate: string;
  modifiedDate: string | null;
  boardImage: {
    id: number;
    url: string;
  }[];
}

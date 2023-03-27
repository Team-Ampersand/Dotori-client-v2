import { atom } from 'recoil';
import { selfstudyListProps, SignupForm } from 'types';
import { noticeDetailType } from 'types/components/NoticePage';

export const signUpObject = atom<SignupForm>({
  key: 'signUpObject',
  default: {},
});

export const signUpStep = atom<string>({
  key: 'signUpStep',
  default: 'first',
});

export const darkMode = atom<'dark' | 'light'>({
  key: 'darkMode',
  default: 'light',
});

export const penaltySelected = atom<string[]>({
  key: 'penaltySelected',
  default: [],
});

export const penaltyStudent = atom<string[]>({
  key: 'penaltyStudent',
  default: [],
});

export const filterModal = atom<boolean>({
  key: 'filterModal',
  default: false,
});

export const penaltyModalState = atom<boolean>({
  key: 'penaltyModalState',
  default: false,
});

export const profileModalState = atom<boolean>({
  key: 'profileModalState',
  default: false,
});

export const menuModalState = atom<boolean>({
  key: 'menuModalState',
  default: false,
});

export const imgBase64profile = atom<string>({
  key: 'imgBase64profile',
  default: '',
});

export const selfStudyList = atom<selfstudyListProps[] | undefined>({
  key: 'selfStudyList',
  default: [],
});

export const selfStudyLookup = atom<boolean>({
  key: 'selfStudyLookup',
  default: false,
});

export const noticeContent = atom<noticeDetailType | null>({
  key: 'noticeContent',
  default: {
    id: 0,
    title: '',
    content: '',
    roles: '',
    createdDate: '',
    modifiedDate: null,
    boardImage: [],
  },
});

export const isNoticeWrite = atom<boolean>({
  key: 'isNoticeWrite',
  default: false,
});
export const isNoticeEdit = atom<boolean>({
  key: 'isNoticeEdit',
  default: false,
});

export const isNoticeFetch = atom<boolean>({
  key: 'isNoticeFetch',
  default: false,
});

export const isNoticeModify = atom<boolean>({
  key: 'isNoticeModify',
  default: false,
});

import { atom } from 'recoil';
import {
  PenaltyListProps,
  PenaltyRuleItemProps,
  PenaltyStuType,
  selfstudyListProps,
  SignupForm,
} from 'types';
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

export const penaltyStudent = atom<PenaltyStuType[]>({
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
  default: null,
});

export const isNoticeWrite = atom<boolean>({
  key: 'isNoticeWrite',
  default: false,
});
export const isNoticeDelete = atom<boolean>({
  key: 'isNoticeDeletes',
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

export const noticeChoice = atom<number[]>({
  key: 'noticeChoice',
  default: [],
});

export const selectedDate = atom<Date>({
  key: 'selectedDate',
  default: new Date(),
});

export const isemailPasswordCheck = atom<{
  isAuth: boolean;
  authEmail?: string;
}>({
  key: 'isemailPasswordCheck',
  default: { isAuth: false, authEmail: '' },
});

export const penaltyListModalState = atom<boolean>({
  key: 'penaltyListModal',
  default: false,
});

export const penaltyRecordModalState = atom<boolean>({
  key: 'penaltyRecordModal',
  default: false,
});

export const penaltyList = atom<PenaltyListProps[] | undefined>({
  key: 'penaltyList',
  default: [],
});

export const penaltyRuleList = atom<PenaltyRuleItemProps[] | undefined>({
  key: 'penaltyRuleList',
  default: [],
});

export const penaltyStuNumber = atom<string>({
  key: 'penaltyStuNumber',
  default: '',
});

export const calendarModalState = atom<boolean>({
  key: 'calendarModalState',
  default: false,
});

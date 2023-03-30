import { atom } from 'recoil';
import {
  SignupForm,
  selfstudyListProps,
  PenaltyListProps,
  PenaltyStuType,
  PenaltyRuleItemProps,
} from 'types';

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

export const selectedDate = atom<Date>({
  key: 'selectedCalendar',
  default: new Date(),
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

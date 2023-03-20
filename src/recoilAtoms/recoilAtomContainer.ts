import { atom } from 'recoil';
import { SignupForm } from 'types';

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


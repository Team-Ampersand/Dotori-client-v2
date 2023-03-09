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

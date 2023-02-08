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
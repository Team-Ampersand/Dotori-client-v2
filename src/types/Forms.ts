export interface SigninForm {
  email?: string;
  password?: string;
}

export interface SignupForm {
  name?: string;
  stuId?: number;
  gender?: string;
  email?: string;
  certiNum?: number;
  password?: string;
  passwordCheck?: string;
}

export interface ChangePasswdForm {
  password?: string;
  newPassword?: string;
  newPasswordCheck?: string;
}

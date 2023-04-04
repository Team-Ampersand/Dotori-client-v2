import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { DotoriLogo } from 'assets/svg';
import { signin } from 'api/member';
import { SigninForm } from 'types';
import { isNotNull } from 'utils/isNotNull';
import { AuthInput, AuthButton } from 'components/Common';
import {
  AuthBottomWrapper,
  AuthFormWrapper,
} from 'components/Common/atoms/Wrappers/AuthWrapper/style';
import * as S from './style';
import { useResetRecoilState } from 'recoil';
import { signUpStep } from 'recoilAtoms';
import { RegexsData } from 'assets/data/RegexsData';

const SignInForm = () => {
  const router = useRouter();
  const [isCheck, setIsCheck] = useState(false);
  const usersAreaReset = useResetRecoilState(signUpStep);
  const { register, watch, handleSubmit, resetField } = useForm<SigninForm>();

  useEffect(() => {
    usersAreaReset();
  }, []);

  useEffect(() => {
    setIsCheck(isNotNull(watch('email') && watch('password')));
  }, [watch(['email', 'password'])]);

  const onInvalid: SubmitErrorHandler<SigninForm> = (data) => {
    if (data.email?.message) return toast.error(data.email?.message);
    else if (data.password?.message) return toast.error(data.password.message);
  };

  const onValid: SubmitHandler<SigninForm> = async (data) => {
    if (!data.email || !data.password) return;
    const notError = await signin(data.email + '@gsm.hs.kr', data.password);
    if (notError) router.push('/home');
  };

  return (
    <AuthFormWrapper>
      <DotoriLogo />
      <form>
        <S.SignInInputsWrapper>
          <AuthInput
            register={register('email', {
              required: 'GSM메일을 입력해주세요.',
              pattern: {
                value: RegexsData.EMAIL,
                message: 'gsm메일형식에 맞게 입력해주세요.',
              },
            })}
            type="text"
            placeholder=""
            maxLength={6}
            labelName="persen"
            DeleteBtnClick={() => resetField('email')}
            isValue={isNotNull(watch('email'))}
            isEmail={true}
          />
          <AuthInput
            register={register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
            type="password"
            placeholder="비밀번호"
            maxLength={20}
            labelName="lock"
            DeleteBtnClick={() => resetField('password')}
            isValue={isNotNull(watch('password'))}
          />
          <Link href={'/changePasswd'}>
            <a>비밀번호 찾기</a>
          </Link>
        </S.SignInInputsWrapper>
        <AuthBottomWrapper>
          <AuthButton
            text={'로그인'}
            isCheck={isCheck}
            onClick={handleSubmit(onValid, onInvalid)}
            type={'submit'}
          />
          <p>
            Doroti가 처음이라면?
            <Link href={'/signup'}>
              <a>회원가입</a>
            </Link>
          </p>
        </AuthBottomWrapper>
      </form>
    </AuthFormWrapper>
  );
};
export default SignInForm;

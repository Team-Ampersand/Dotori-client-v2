import { authCheck, emailCheck } from 'api/member';
import { AuthButton, AuthInput } from 'components/Common';
import { AuthBottomWrapper } from 'components/Common/atoms/Wrappers/AuthWrapper/style';
import { InputsWrapper } from 'components/SignUp/atoms/Wrapper/style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { signUpObject, signUpStep } from 'recoilAtoms';
import { SignupForm } from 'types';
import { isNotNull } from 'utils/isNotNull';
import * as S from './style';

const EmailCheck = () => {
  const router = useRouter();
  const [isCheck, setIsCheck] = useState(false);
  const [isAuthCheck, setIsAuthEmailCheck] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [SignUpObject, setSignUpObject] = useRecoilState(signUpObject);
  const [, setSignUpStep] = useRecoilState(signUpStep);
  const { register, watch, handleSubmit, resetField } = useForm<SignupForm>({
    defaultValues: {
      email: '@gsm.hs.kr',
    },
  });

  useEffect(() => {
    setIsCheck(
      isNotNull(
        watch('email')?.replace('@gsm.hs.kr', '') &&
          watch('certiNum') &&
          !isAuth
      )
    );
    setIsAuthEmailCheck(
      isNotNull(watch('email')?.replace('@gsm.hs.kr', '') && isAuth)
    );
  }, [watch(['email', 'certiNum'])]);

  const handleCertiEmailBtnClick = async () => {
    if (!isAuthCheck) return;
    else if (!/^s[0-9]{5}@gsm.hs.kr$/.test(watch().email || ''))
      return toast.error('이메일형식이 잘못되었어요.');
    const notError = await emailCheck(watch().email || '');
    if (notError) {
      toast.success('인증번호가 이메일로 전송되었습니다.');
      setIsAuthEmailCheck(false);
      setIsAuth(false);
    }
  };

  const onInvalid: SubmitErrorHandler<SignupForm> = (state) => {
    toast.error(
      (!isNotNull(watch('email')?.replace('@gsm.hs.kr', '')) &&
        '이메일을 입력해주세요.') ||
        state.email?.message ||
        state.certiNum?.message
    );
  };

  const onValid: SubmitHandler<SignupForm> = async (state) => {
    const notError = await authCheck(state.certiNum || 0);
    if (notError) {
      setSignUpObject({ ...SignUpObject, email: state.email });
      setSignUpStep('last');
    }
  };

  return (
    <form>
      <InputsWrapper>
        <p>이메일</p>
        <S.EmailCertiWrapper>
          <AuthInput
            register={register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^s[0-9]{5}@gsm.hs.kr$/,
                message: '이메일형식이 잘못되었어요.',
              },
            })}
            type="text"
            placeholder="@gsm.hs.kr"
            maxLength={16}
            isEmailAuth={true}
            DeleteBtnClick={() => resetField('email')}
            isValue={isNotNull(watch('email')?.replace('@gsm.hs.kr', ''))}
          />
          <AuthButton
            width={120}
            text={'인증하기'}
            isCheck={isAuthCheck}
            onClick={handleCertiEmailBtnClick}
            type={'button'}
          />
        </S.EmailCertiWrapper>
        <p>인증번호</p>
        <AuthInput
          register={register('certiNum', {
            required: '인증번호를 입력해주세요.',
          })}
          type="number"
          placeholder={`${isAuth ? '인증먼저 해주세요.' : '인증번호'}`}
          DeleteBtnClick={() => resetField('certiNum')}
          isValue={isNotNull(watch('certiNum'))}
          readOnly={isAuth}
        />
      </InputsWrapper>
      <AuthBottomWrapper>
        <AuthButton
          text={'다음'}
          isCheck={isCheck}
          onClick={handleSubmit(onValid, onInvalid)}
          type={'submit'}
        />
        <p>
          이미 회원이라면?
          <Link href={'/signin'}>
            <a>로그인</a>
          </Link>
        </p>
      </AuthBottomWrapper>
    </form>
  );
};

export default EmailCheck;

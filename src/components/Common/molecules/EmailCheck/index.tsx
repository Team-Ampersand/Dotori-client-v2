import { authCheck, emailCheck, emailPasswordCheck } from 'api/member';
import { RegexsData } from 'assets/data/RegexsData';
import { AuthButton, AuthInput } from 'components/Common';
import { AuthBottomWrapper } from 'components/Common/atoms/Wrappers/AuthWrapper/style';
import { InputsWrapper } from 'components/SignUp/atoms/Wrapper/style';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signUpObject, signUpStep } from 'recoilAtoms';
import { isemailPasswordCheck } from 'recoilAtoms/recoilAtomContainer';
import { SignupForm } from 'types';
import { isNotNull } from 'utils/isNotNull';
import * as S from './style';

const EmailCheck = ({ isLogin }: { isLogin: boolean }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isAuthCheck, setIsAuthEmailCheck] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [SignUpObject, setSignUpObject] = useRecoilState(signUpObject);
  const setIsemailPasswordCheck = useSetRecoilState(isemailPasswordCheck);
  const setSignUpStep = useSetRecoilState(signUpStep);
  const { register, watch, handleSubmit, resetField } = useForm<SignupForm>();

  useEffect(() => {
    setIsCheck(isNotNull(watch('email') && watch('certiNum') && !isAuth));
    setIsAuthEmailCheck(
      isNotNull(watch('email')?.replace('@gsm.hs.kr', '') && isAuth)
    );
  }, [watch(['email', 'certiNum'])]);

  const handleCertiEmailBtnClick = async () => {
    if (!isAuthCheck) return;
    else if (!RegexsData.EMAIL.test(watch().email || ''))
      return toast.error('이메일 형식이 잘못되었어요.');
    else if (
      isLogin
        ? await emailCheck(`${watch().email}@gsm.hs.kr`)
        : await emailPasswordCheck(`${watch().email}@gsm.hs.kr`)
    ) {
      toast.success('인증번호가 이메일로 전송되었습니다.');
      setIsAuthEmailCheck(false);
      setIsAuth(false);
    }
  };

  const onInvalid: SubmitErrorHandler<SignupForm> = (state) => {
    toast.error(
      (!isNotNull(watch('email')) && '이메일을 입력해주세요.') ||
        state.email?.message ||
        state.certiNum?.message
    );
  };

  const onValid: SubmitHandler<SignupForm> = async (state) => {
    if (await authCheck(state.certiNum || 0)) {
      if (isLogin) {
        setSignUpStep('last');
        setSignUpObject({ ...SignUpObject, email: state.email });
      } else {
        setIsemailPasswordCheck({ authEmail: state.email, isAuth: true });
      }
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
                value: RegexsData.EMAIL,
                message: '이메일형식이 잘못되었어요.',
              },
            })}
            type="text"
            placeholder=""
            maxLength={6}
            isEmailAuth={true}
            DeleteBtnClick={() => resetField('email')}
            isValue={isNotNull(watch('email'))}
            isEmail={true}
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
          placeholder={`${isAuth ? '인증 먼저 해주세요.' : '인증번호'}`}
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
          {isLogin ? '이미 회원이라면?' : '비밀번호를 변경할 필요가 없다면?'}
          <Link href={'/signin'}>
            <a>로그인</a>
          </Link>
        </p>
      </AuthBottomWrapper>
    </form>
  );
};

export default EmailCheck;

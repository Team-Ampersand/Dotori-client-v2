import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { DotoriLogo } from 'assets/svg';
import { authPasswordChange, passwordChange } from 'api/member';
import { ChangePasswdForm } from 'types';
import { isNotNull } from 'utils/isNotNull';
import { AuthInput, AuthButton } from 'components/Common';
import {
  AuthBottomWrapper,
  AuthFormWrapper,
} from 'components/Common/atoms/Wrappers/AuthWrapper/style';
import { InputsWrapper } from 'components/SignUp/atoms/Wrapper/style';
import { isemailPasswordCheck } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';
import { RegexsData } from 'assets/data/RegexsData';

const ChangePasswdForm = ({ isLogin }: { isLogin: boolean }) => {
  const router = useRouter();
  const [isCheck, setIsCheck] = useState(false);
  const [IsemailPasswordCheck, setIsemailPasswordCheck] =
    useRecoilState(isemailPasswordCheck);
  const { register, watch, handleSubmit, resetField } =
    useForm<ChangePasswdForm>();

  useEffect(() => {
    setIsCheck(
      isNotNull(
        watch('newPassword') &&
          watch('newPasswordCheck') &&
          (watch('password') || !isLogin)
      )
    );
  }, [watch(['password', 'newPassword', 'newPasswordCheck'])]);

  const onInvalid: SubmitErrorHandler<ChangePasswdForm> = (data) => {
    toast.error(
      (data.password || data.newPassword || data.newPasswordCheck) &&
        (data.password?.message ||
          data.newPassword?.message ||
          data.newPasswordCheck?.message)
    );
  };

  const onValid: SubmitHandler<ChangePasswdForm> = async (state) => {
    if (state.password === state.newPassword && isLogin)
      return toast.error('비밀번호확인이 현재 비밀번호와 똑같습니다.');
    else if (state.newPassword !== state.newPasswordCheck)
      return toast.error(
        '새로운 비밀번호확인이 새로운 비밀번호와 맞지 않습니다.'
      );
    if (
      isLogin
        ? await passwordChange(state.password ?? '', state.newPassword ?? '')
        : await authPasswordChange(
            state.newPassword ?? '',
            IsemailPasswordCheck.authEmail + '@gsm.hs.kr'
          )
    ) {
      setIsemailPasswordCheck({ authEmail: '', isAuth: false });
      router.push('/home');
    }
  };

  return (
    <AuthFormWrapper>
      <DotoriLogo />
      <form>
        <InputsWrapper>
          {isLogin && (
            <>
              <p>현재 비밀번호</p>
              <AuthInput
                register={register('password', {
                  required: '비밀번호를 입력해주세요.',
                  pattern: {
                    value: RegexsData.PASSWORD,
                    message: '영문, 숫자, 특수문자 포함 8~20자로 입력하세요.',
                  },
                })}
                type="password"
                placeholder="영문,숫자,특수문자 포함 8~20자"
                maxLength={20}
                DeleteBtnClick={() => resetField('password')}
                isValue={isNotNull(watch('password'))}
              />
            </>
          )}
          <p>새로운 비밀번호</p>
          <AuthInput
            register={register('newPassword', {
              required: '비밀번호확인칸을 입력해주세요.',
              pattern: {
                value: RegexsData.PASSWORD,
                message: '영문, 숫자, 특수문자 포함 8~20자로 입력하세요.',
              },
            })}
            type="password"
            placeholder="특수문자 포함 8~20"
            maxLength={20}
            DeleteBtnClick={() => resetField('newPassword')}
            isValue={isNotNull(watch('newPassword'))}
          />
          <p>새로운 비밀번호 확인</p>
          <AuthInput
            register={register('newPasswordCheck', {
              required: '새로운 비밀번호 확인칸을 입력해주세요.',
            })}
            type="password"
            placeholder="새로운 비밀번호 확인"
            maxLength={20}
            DeleteBtnClick={() => resetField('newPasswordCheck')}
            isValue={isNotNull(watch('newPasswordCheck'))}
          />
        </InputsWrapper>
        <AuthBottomWrapper>
          <AuthButton
            text={'확인'}
            isCheck={isCheck}
            onClick={handleSubmit(onValid, onInvalid)}
            type={'submit'}
          />
          <p>
            비밀번호를 변경할 필요가 없다면?
            <Link href={isLogin ? '/home' : '/signin'}>
              {isLogin ? '홈화면' : '로그인'}
            </Link>
          </p>
        </AuthBottomWrapper>
      </form>
    </AuthFormWrapper>
  );
};
export default ChangePasswdForm;

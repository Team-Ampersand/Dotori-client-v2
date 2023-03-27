import { AuthFormWrapper } from 'components/Common/atoms/Wrappers/AuthWrapper/style';
import StepHeader from 'components/SignUp/molecules/StepHeader';
import StuInfo from 'components/SignUp/molecules/StuInfo';
import EmailCheck from 'components/SignUp/molecules/EmailCheck';
import PasswordCheck from 'components/SignUp/molecules/PasswordCheck';
import { useRecoilState } from 'recoil';
import { signUpStep } from 'recoilAtoms';

const SignUpForm = () => {
  const [SignupStep] = useRecoilState(signUpStep);
  return (
    <AuthFormWrapper>
      <StepHeader order={SignupStep} />
      {SignupStep === 'first' ? (
        <StuInfo />
      ) : SignupStep === 'second' ? (
        <EmailCheck />
      ) : (
        <PasswordCheck />
      )}
    </AuthFormWrapper>
  );
};

export default SignUpForm;

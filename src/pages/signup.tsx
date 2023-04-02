import { SignUpForm } from 'components';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const SignUpPage = () => {
  UseThemeEffect();
  return (
    <AuthTemplates>
      <SignUpForm />
    </AuthTemplates>
  );
};

export default SignUpPage;

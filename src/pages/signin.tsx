import { SignInForm } from 'components';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const SignInPage = () => {
  UseThemeEffect();
  return (
    <AuthTemplates>
      <SignInForm />
    </AuthTemplates>
  );
};

export default SignInPage;

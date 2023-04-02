import { SignInForm } from 'components';
import SEOHead from 'components/Common/atoms/SEOHead';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const SignInPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'로그인페이지'} />
      <AuthTemplates>
        <SignInForm />
      </AuthTemplates>
    </>
  );
};

export default SignInPage;

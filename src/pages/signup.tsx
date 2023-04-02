import { SignUpForm } from 'components';
import SEOHead from 'components/Common/atoms/SEOHead';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const SignUpPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'회원가입페이지'} />
      <AuthTemplates>
        <SignUpForm />
      </AuthTemplates>
    </>
  );
};

export default SignUpPage;

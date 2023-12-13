import DotoriLogo from 'components/Common/atoms/DotoriLogo';
import SEOHead from 'components/Common/atoms/SEOHead';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import dynamic from 'next/dynamic';

const SignInForm = dynamic(
  () => import('../components/SignIn/organisms/SignInForm'),
  { ssr: false, loading: () => <DotoriLogo /> }
);

const SignInPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 로그인페이지'} />
      <AuthTemplates>
        <SignInForm />
      </AuthTemplates>
    </>
  );
};

export default SignInPage;

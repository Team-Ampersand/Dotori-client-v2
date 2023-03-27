import { SignInForm } from 'components';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps } from 'next';
import { getToken } from 'utils/Libs/getToken';

const SignInPage = () => {
  UseThemeEffect();
  return (
    <AuthTemplates>
      <SignInForm />
    </AuthTemplates>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);

  if (Authorization) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default SignInPage;

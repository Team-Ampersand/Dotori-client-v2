import { SignUpForm } from "components";
import { AuthTemplates } from "components/Common/templates/AuthTemplates/style";
import { GetServerSideProps } from "next";
import { getToken } from "utils/Libs/getToken";

const SignUpPage = () => {
  return (
    <AuthTemplates>
        <SignUpForm />
    </AuthTemplates>
  )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);

  if (Authorization) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }
  
  return {
    props: {},
  };
}

export default SignUpPage
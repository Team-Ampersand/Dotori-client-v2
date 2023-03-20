import ChangePasswdForm from "components/ChangePasswd/organisms/ChangePasswdForm";
import { AuthTemplates } from "components/Common/templates/AuthTemplates/style";
import { GetServerSideProps } from "next";
import { getToken } from "utils/Libs/getToken";

const ChangePasswdPage = () => {
  return (
    <AuthTemplates>
        <ChangePasswdForm/>
    </AuthTemplates>
  )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);

  if (!Authorization) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }
  
  return {
    props: {},
  };
}

export default ChangePasswdPage
import ChangePasswdForm from 'components/ChangePasswd/organisms/ChangePasswdForm';
import PasswdEmailCheck from 'components/ChangePasswd/organisms/PasswdEmailCheck';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import { GetServerSideProps, NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { isemailPasswordCheck } from 'recoilAtoms/recoilAtomContainer';
import { isNotNull } from 'utils/isNotNull';
import { getToken } from 'utils/Libs/getToken';

const ChangePasswdPage: NextPage<{ isLogin: boolean }> = ({ isLogin }) => {
  const [IsemailPasswordCheck] = useRecoilState(isemailPasswordCheck);
  return (
    <AuthTemplates>
      {isLogin || IsemailPasswordCheck.isAuth ? (
        <ChangePasswdForm isLogin={isLogin} />
      ) : (
        <PasswdEmailCheck />
      )}
    </AuthTemplates>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const isLogin = isNotNull(Authorization);
  return {
    props: { isLogin },
  };
};

export default ChangePasswdPage;

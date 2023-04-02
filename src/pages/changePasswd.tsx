import ChangePasswdForm from 'components/ChangePasswd/organisms/ChangePasswdForm';
import PasswdEmailCheck from 'components/ChangePasswd/organisms/PasswdEmailCheck';
import SEOHead from 'components/Common/atoms/SEOHead';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import { useRecoilState } from 'recoil';
import { isemailPasswordCheck } from 'recoilAtoms/recoilAtomContainer';
import { isNotNull } from 'utils/isNotNull';
import { getToken } from 'utils/Libs/getToken';

const initIsLogin = async () => {
  const { Authorization } = await getToken(null);
  return isNotNull(Authorization);
};

const ChangePasswdPage = () => {
  const isLogin = initIsLogin();
  const [IsemailPasswordCheck] = useRecoilState(isemailPasswordCheck);
  return (
    <>
      <SEOHead title={'| 비밀번호변경페이지'} />
      <AuthTemplates>
        {isLogin || IsemailPasswordCheck.isAuth ? (
          <ChangePasswdForm isLogin={isLogin as unknown as boolean} />
        ) : (
          <PasswdEmailCheck />
        )}
      </AuthTemplates>
    </>
  );
};

export default ChangePasswdPage;

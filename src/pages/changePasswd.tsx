import { DotoriLogo } from 'assets/svg';
import SEOHead from 'components/Common/atoms/SEOHead';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import dynamic from 'next/dynamic';
import { parseCookies } from 'nookies';
import { useRecoilState } from 'recoil';
import { isemailPasswordCheck } from 'recoilAtoms/recoilAtomContainer';
import { isNotNull } from 'utils/isNotNull';

const ChangePasswdForm = dynamic(
  () => import('../components/ChangePasswd/organisms/ChangePasswdForm'),
  { ssr: false, loading: () => <DotoriLogo /> }
);

const PasswdEmailCheck = dynamic(
  () => import('../components/ChangePasswd/organisms/PasswdEmailCheck'),
  { ssr: false, loading: () => <DotoriLogo /> }
);

const ChangePasswdPage = () => {
  const { Authorization } = parseCookies();
  const [IsemailPasswordCheck] = useRecoilState(isemailPasswordCheck);
  const isLogin = isNotNull(Authorization);

  return (
    <>
      <SEOHead title={'| 비밀번호변경페이지'} />
      <AuthTemplates>
        {isLogin || IsemailPasswordCheck.isAuth ? (
          <ChangePasswdForm isLogin={isLogin} />
        ) : (
          <PasswdEmailCheck />
        )}
      </AuthTemplates>
    </>
  );
};

export default ChangePasswdPage;

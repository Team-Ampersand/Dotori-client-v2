import DotoriLogo from 'components/Common/atoms/DotoriLogo';
import { AuthFormWrapper } from 'components/Common/atoms/Wrappers/AuthWrapper/style';
import EmailCheck from 'components/Common/molecules/EmailCheck';

const PasswdEmailCheck = () => {
  return (
    <AuthFormWrapper>
      <DotoriLogo />
      <EmailCheck isLogin={false} />
    </AuthFormWrapper>
  );
};

export default PasswdEmailCheck;

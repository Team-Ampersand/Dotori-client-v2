import { DotoriLogo } from 'assets/svg';
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

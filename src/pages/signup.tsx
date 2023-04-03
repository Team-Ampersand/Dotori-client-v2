import SEOHead from 'components/Common/atoms/SEOHead';
import { AuthTemplates } from 'components/Common/templates/AuthTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import dynamic from 'next/dynamic';
import React from 'react';
import { Suspense } from 'react';

const SignUpForm = dynamic(
  () => import('../components/SignUp/organisms/SignUpForm'),
  { ssr: false }
);

const SignUpPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 회원가입페이지'} />
      <AuthTemplates>
        <SignUpForm />
      </AuthTemplates>
    </>
  );
};

export default SignUpPage;

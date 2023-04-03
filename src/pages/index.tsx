import UseThemeEffect from 'hooks/useThemeEffect';
import { PromotionTemplates } from 'components/Promotion/templates/PromotionTemplates/style';
import SEOHead from 'components/Common/atoms/SEOHead';
import dynamic from 'next/dynamic';
import React from 'react';

const PromotionOrganisms = dynamic(
  () => import('../components/Promotion/organisms/PromotionOrganisms'),
  { ssr: false }
);

const PromotionPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead />
      <PromotionTemplates>
        <PromotionOrganisms />
      </PromotionTemplates>
    </>
  );
};

export default PromotionPage;

import UseThemeEffect from 'hooks/useThemeEffect';
import { PromotionTemplates } from 'components/Promotion/templates/PromotionTemplates/style';
import PromotionOrganisms from 'components/Promotion/organisms/PromotionOrganisms';
import SEOHead from 'components/Common/atoms/SEOHead';

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

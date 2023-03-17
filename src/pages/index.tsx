import UseThemeEffect from 'hooks/useThemeEffect'
import { PromotionTemplates } from 'components/Promotion/templates/PromotionTemplates/style';
import PromotionOrganisms from 'components/Promotion/organisms/PromotionOrganisms';

const PromotionPage = () => {
  UseThemeEffect()
  return (
    <PromotionTemplates>
      <PromotionOrganisms/>
    </PromotionTemplates>
  )
}

export default PromotionPage
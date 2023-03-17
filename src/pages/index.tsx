import UseThemeEffect from 'hooks/useThemeEffect'
import PromotionOganisms from 'components/Promotion/organisms/PromotionOganisms';
import { PromotionTemplates } from 'components/Promotion/templates/PromotionTemplates/style';

const PromotionPage = () => {
  UseThemeEffect()
  return (
    <PromotionTemplates>
      <PromotionOganisms/>
    </PromotionTemplates>
  )
}

export default PromotionPage
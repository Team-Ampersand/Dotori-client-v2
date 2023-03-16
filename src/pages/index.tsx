import { MainTemplates } from 'components/Common/templates/MainTemplates/style'
import UseThemeEffect from 'hooks/useThemeEffect'
import PromotionOganisms from 'components/Promotion/organisms/PromotionOganisms';

const PromotionPage = () => {
  UseThemeEffect()
  return (
    <MainTemplates>
      <PromotionOganisms/>
    </MainTemplates>
  )
}

export default PromotionPage
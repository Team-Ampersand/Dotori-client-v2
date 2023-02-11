import SideBar from 'components/Common/organisms/Sidebar'
import { MainTemplates } from 'components/Common/templates/MainTemplates/style'
import UseThemeEffect from 'hooks/useThemeEffect'

const HomePage = () => {
  UseThemeEffect()
  return (
    <MainTemplates>
      <SideBar/>
   </MainTemplates>
  )
}

export default HomePage
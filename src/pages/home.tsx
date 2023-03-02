import SideBar from 'components/Common/organisms/Sidebar'
import { MainTemplates } from 'components/Common/templates/MainTemplates/style'
import { TimeBoard, Profile, NoticeBoard, SelfStudyBoard, MassageBoard, MealBoard } from 'components/Home/organisms'
import { HomeTemplates } from 'components/Home/templates/HomeTemplates/style'
import UseThemeEffect from 'hooks/useThemeEffect'
import ChannelIOScript from 'components/Home/atoms/Script/SomeScript'

const HomePage = () => {
  UseThemeEffect()
  return (
    <>
      <MainTemplates>
        <SideBar/>
        <HomeTemplates>
          <TimeBoard/>
          <Profile/>
          <MealBoard/>
          <NoticeBoard/>
          <SelfStudyBoard/>
          <MassageBoard/>
        </HomeTemplates>
      </MainTemplates>
      <ChannelIOScript stunumName={'3308유환빈'} email={'s21067@gsm.hs.kr'}/>
    </>
  )
}

export default HomePage
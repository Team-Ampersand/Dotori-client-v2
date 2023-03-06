import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { SelfStudyTable } from 'components/SelfStudy/organisms';
import { SelfstudyTemplates } from 'components/SelfStudy/templates/SelfstudyTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import CommonHeader from 'components/Common/organisms/CommonHeader';

const SelfStudyPage = () => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar />
      <SelfstudyTemplates>
        <CommonHeader />
        <SelfStudyTable />
      </SelfstudyTemplates>
    </MainTemplates>
  );
};

export default SelfStudyPage;

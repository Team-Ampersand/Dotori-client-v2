import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { MassageHeader, MassageTable } from 'components/Massage/organisms';
import { MassageTemplates } from 'components/Massage/templates/MassageTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const MassagePage = () => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar />
      <MassageTemplates>
        <MassageHeader />
        <MassageTable />
      </MassageTemplates>
    </MainTemplates>
  );
};

export default MassagePage;

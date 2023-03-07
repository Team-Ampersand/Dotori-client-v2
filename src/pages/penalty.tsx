import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { PenaltyTable } from 'components/Penalty/organisms';
import { PenaltyTemplates } from 'components/Penalty/templates/PenaltyTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import CommonHeader from 'components/Common/organisms/CommonHeader';

const PenaltyPage = () => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar />
      <PenaltyTemplates>
        <CommonHeader />
        <PenaltyTable />
      </PenaltyTemplates>
    </MainTemplates>
  );
};

export default PenaltyPage;

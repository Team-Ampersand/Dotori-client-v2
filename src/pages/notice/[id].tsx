import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeContent from 'components/Notice/organisms/NoticeContent';
import NoticeHeader from 'components/Notice/organisms/NoticeHeader';
import NoticeList from 'components/Notice/organisms/NoticeList';
import {
  NoticeTemplate,
  NoticeWrapper,
} from 'components/Notice/templates/NoticeTemplate/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const Notice = () => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar />
      <NoticeTemplate>
        <NoticeHeader />
        <NoticeWrapper>
          <NoticeList />
          <NoticeContent />
        </NoticeWrapper>
      </NoticeTemplate>
    </MainTemplates>
  );
};

export default Notice;

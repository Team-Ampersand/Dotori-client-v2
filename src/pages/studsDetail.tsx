import SEOHead from 'components/Common/atoms/SEOHead';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import StuInfoForm from 'components/StuInfo/organisms/StuInfoForm';
import StuInfoList from 'components/StuInfo/organisms/StuInfoList';
import {
  StuInfoLayer,
  StuInfoTemplate,
} from 'components/StuInfo/template/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import { StuInfoType } from 'types/components/StuInfoPage';

const StudsDetail: NextPage<{
  fallback: Record<string, StuInfoType[]>;
}> = ({ fallback }) => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title="| 학생정보페이지" />
      <SWRConfig value={fallback}>
        <MainTemplates>
          <SideBar />
          <StuInfoTemplate>
            <CommonHeader />
            <StuInfoLayer>
              <StuInfoList />
              <StuInfoForm />
            </StuInfoLayer>
          </StuInfoTemplate>
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export default StudsDetail;

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
import { GetServerSideProps, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { StuInfoType } from 'types/components/StuInfoPage';
import { apiClient } from 'utils/Libs/apiClient';
import { getToken } from 'utils/Libs/getToken';
import { StuInfoController } from 'utils/Libs/requestUrls';

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);

  try {
    const { data: stuInfo } = await apiClient.get(StuInfoController.stuInfo, {
      headers: { Authorization },
    });
    const { data: searchStuInfo } = await apiClient.get(
      StuInfoController.stuInfo,
      {
        headers: { Authorization },
      }
    );
    return {
      props: {
        fallback: {
          [StuInfoController.stuInfo]: stuInfo,
          [StuInfoController.searchStuInfo]: searchStuInfo,
        },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default StudsDetail;

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
import { GetServerSideProps, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { SongListType } from 'types/components/SongPage';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { StuInfoController } from 'utils/Libs/requestUrls';

const StudsDetail: NextPage<{
  fallback: Record<string, SongListType>;
}> = ({ fallback }) => {
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
  const role = getRole();
  const { Authorization } = await getToken(ctx);

  try {
    const { data: stuInfo } = await apiClient.get(
      StuInfoController.stuInfo(role),
      { headers: { Authorization } }
    );
    return {
      props: {
        fallback: { [StuInfoController.stuInfo(role)]: stuInfo },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default StudsDetail;

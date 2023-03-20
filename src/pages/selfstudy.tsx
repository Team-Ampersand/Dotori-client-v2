import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { SelfStudyTable } from 'components/SelfStudy/organisms';
import { SelfstudyTemplates } from 'components/SelfStudy/templates/SelfstudyTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import { GetServerSideProps, NextPage } from 'next';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';

const SelfStudyPage:NextPage<{role:string}> = ({role}) => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar role={role} />
      <SelfstudyTemplates>
        <CommonHeader />
        <SelfStudyTable />
      </SelfstudyTemplates>
    </MainTemplates>
  );
};

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);
  
  try {
                
    return {
      props: {
        fallback: {
        },
        role
      },
    };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
}

export default SelfStudyPage;

import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { MassageTable } from 'components/Massage/organisms';
import { MassageTemplates } from 'components/Massage/templates/MassageTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';

const MassagePage:NextPage<{role:string}> = ({role}) => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar role={role}/>
      <MassageTemplates>
        <CommonHeader />
        <MassageTable />
      </MassageTemplates>
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

export default MassagePage;

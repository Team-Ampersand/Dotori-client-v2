import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import {
  TimeBoard,
  Profile,
  NoticeBoard,
  SelfStudyBoard,
  MassageBoard,
  MealBoard,
} from 'components/Home/organisms';
import { HomeTemplates } from 'components/Home/templates/HomeTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { getToken } from 'utils/Libs/getToken';
import { getRole } from 'utils/Libs/getRole';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';
import {
  MassageController,
  MemberController,
  NoticeController,
  SelfstudyController,
} from 'utils/Libs/requestUrls';
import { applyPageProps, myProfileType, noticePageProps } from 'types';
import ChannelBtn from 'components/Home/molecules/ChannelBtn';

const HomePage: NextPage<{
  fallback: Record<string, myProfileType> &
    Record<string, noticePageProps> &
    Record<string, applyPageProps> &
    Record<string, applyPageProps>;
  role: string;
}> = ({ fallback, role }) => {
  UseThemeEffect();
  return (
    <SWRConfig value={fallback}>
      <MainTemplates>
        <SideBar role={role} />
        <HomeTemplates>
          <TimeBoard />
          <Profile />
          <MealBoard />
          <NoticeBoard />
          <SelfStudyBoard />
          <MassageBoard />
        </HomeTemplates>
      </MainTemplates>
      <ChannelBtn />
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);

  if (!Authorization) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  try {
    const { data: myData } = await apiClient.get(MemberController.myProfile, {
      headers: { Authorization },
    });
    const { data: noticeData } = await apiClient.get(
      NoticeController.getNotice(role),
      { headers: { Authorization } }
    );
    const { data: selfStudyData } = await apiClient.get(
      SelfstudyController.selfStudyInfo(role),
      { headers: { Authorization } }
    );
    const { data: massageData } = await apiClient.get(
      MassageController.massage(role),
      { headers: { Authorization } }
    );

    return {
      props: {
        fallback: {
          [MemberController.myProfile]: myData,
          [NoticeController.getNotice(role)]: noticeData,
          [SelfstudyController.selfStudyInfo(role)]: selfStudyData,
          [MassageController.massage(role)]: massageData,
        },
        role,
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default HomePage;

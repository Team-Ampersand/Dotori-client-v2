import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import {
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
import SEOHead from 'components/Common/atoms/SEOHead';
import dynamic from 'next/dynamic';

const TimeBoard = dynamic(
  () => import('../components/Home/organisms/TimeBoard'),
  { ssr: false }
);

const HomePage: NextPage<{
  fallback: Record<string, myProfileType> &
    Record<string, noticePageProps> &
    Record<string, applyPageProps> &
    Record<string, applyPageProps>;
}> = ({ fallback }) => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 홈페이지'} />
      <SWRConfig value={fallback}>
        <MainTemplates>
          <SideBar />
          <HomeTemplates>
            <TimeBoard />
            <Profile />
            <MealBoard />
            <NoticeBoard />
            <SelfStudyBoard />
            <MassageBoard />
          </HomeTemplates>
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);
  const header = {
    headers: { Authorization },
  };

  const promises = [
    apiClient.get(MemberController.myProfile, header),
    apiClient.get(NoticeController.getNotice(role), header),
    apiClient.get(SelfstudyController.selfStudyInfo(role), header),
    apiClient.get(MassageController.massage(role), header),
  ];

  try {
    const [
      { data: myData },
      { data: noticeData },
      { data: selfStudyData },
      { data: massageData },
    ] = await Promise.all(promises);

    return {
      props: {
        fallback: {
          [MemberController.myProfile]: myData,
          [NoticeController.getNotice(role)]: noticeData,
          [SelfstudyController.selfStudyInfo(role)]: selfStudyData,
          [MassageController.massage(role)]: massageData,
        },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default HomePage;

import UseThemeEffect from 'hooks/useThemeEffect';
import { PromotionTemplates } from 'components/Promotion/templates/PromotionTemplates/style';
import PromotionOrganisms from 'components/Promotion/organisms/PromotionOrganisms';
import { GetServerSideProps } from 'next';
import { getToken } from 'utils/Libs/getToken';
import SEOHead from 'components/Common/atoms/SEOHead';

const PromotionPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'프로모션 페이지'} />
      <PromotionTemplates>
        <PromotionOrganisms />
      </PromotionTemplates>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);

  if (Authorization) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default PromotionPage;

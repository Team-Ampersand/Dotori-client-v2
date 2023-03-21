import UseThemeEffect from 'hooks/useThemeEffect';
import { PromotionTemplates } from 'components/Promotion/templates/PromotionTemplates/style';
import PromotionOrganisms from 'components/Promotion/organisms/PromotionOrganisms';
import { GetServerSideProps } from 'next';
import { getToken } from 'utils/Libs/getToken';

const PromotionPage = () => {
  UseThemeEffect();
  return (
    <PromotionTemplates>
      <PromotionOrganisms />
    </PromotionTemplates>
  );
};

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);

  if (Authorization) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }
  
  return {
    props: {},
  };
}

export default PromotionPage

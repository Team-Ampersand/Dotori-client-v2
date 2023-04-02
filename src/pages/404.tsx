import UseThemeEffect from 'hooks/useThemeEffect';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NotFoundOrganism from 'components/NotFound/organisms/NotFoundOrganisms';
import SEOHead from 'components/Common/atoms/SEOHead';

const NotFoundPage = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 404페이지'} />
      <MainTemplates>
        <NotFoundOrganism />
      </MainTemplates>
    </>
  );
};

export default NotFoundPage;

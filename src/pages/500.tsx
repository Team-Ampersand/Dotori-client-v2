import SEOHead from 'components/Common/atoms/SEOHead';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NotFoundOrganism from 'components/NotFound/organisms/NotFoundOrganisms';
import UseThemeEffect from 'hooks/useThemeEffect';

const Custom500Page = () => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 500페이지'} />
      <MainTemplates>
        <NotFoundOrganism statusCode={500} />
      </MainTemplates>
    </>
  );
};

export default Custom500Page;

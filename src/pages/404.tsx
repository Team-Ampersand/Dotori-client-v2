import UseThemeEffect from 'hooks/useThemeEffect';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NotFoundOrganism from 'components/NotFound/organisms/NotFoundOrganisms';

const NotFoundPage = () => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <NotFoundOrganism />
    </MainTemplates>
  );
};

export default NotFoundPage;

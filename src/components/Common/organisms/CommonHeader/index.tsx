import * as S from './style';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';
import { useRouter } from 'next/router';
import { MenuData } from 'assets/data/SidebarMenuData';

const CommonHeader = () => {
  const { pathname } = useRouter();

  return (
    <S.HeaderWrapper>
      <span>
        {MenuData.filter((i) => i.routerName == pathname)[0].menuTitle}
      </span>
      <DarkModeButton />
    </S.HeaderWrapper>
  );
};

export default CommonHeader;

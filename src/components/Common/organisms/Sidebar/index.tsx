import { DotoriIcon, DotoriLogo } from 'assets/svg';
import LogoutButton from 'components/Common/atoms/Buttons/LogoutButton';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import * as S from './style';
import Link from 'next/link';
import { MenuData } from 'assets/data/SidebarMenuData';
import { getRole } from 'utils/Libs/getRole';
import dynamic from 'next/dynamic';

const SideBarList = dynamic(
  () => import('../../../Common/molecules/SidebarList'),
  { ssr: false }
);

const SideBar = () => {
  const { pathname } = useRouter();
  const [currentRouter, setCurrentRouter] = useState(pathname);
  const role = getRole();

  const mappingSidebarMenu = useMemo(
    () => (
      <SideBarList
        role={role}
        menuDataList={MenuData}
        currentRouter={currentRouter}
        setCurrentRouter={setCurrentRouter}
      />
    ),
    [currentRouter]
  );

  return (
    <S.SideBarWrapper>
      <Link href="/home">
        <a>
          <S.DototiTitle>
            <DotoriIcon />
            <span>DOTORI</span>
          </S.DototiTitle>
        </a>
      </Link>
      {mappingSidebarMenu}
      <LogoutButton />
    </S.SideBarWrapper>
  );
};

export default SideBar;

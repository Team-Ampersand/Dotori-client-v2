import * as S from './style';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';
import { useRouter } from 'next/router';
import { MenuData } from 'assets/data/SidebarMenuData';
import {
  FilterIcon,
  CalendarIcon,
  PlusIcon,
  HanbergerIcon,
  DownloadIcon,
} from 'assets/svg';
import { useRecoilState } from 'recoil';
import { filterModal } from 'recoilAtoms/recoilAtomContainer';
import { useState } from 'react';
import NavigationDrawer from 'components/Common/organisms/NavigationDrawer';

const CommonHeader = () => {
  const { pathname } = useRouter();
  const [modalState, setModalState] = useRecoilState(filterModal);
  const [navigationDrawer, setNavigationDrawer] = useState(false);

  return (
    <S.HeaderWrapper>
      <S.Title>
        {MenuData.filter((i) => i.routerName == pathname)[0].menuTitle}
      </S.Title>
      <S.MobileTitle>
        {/* {role !== 'member' && ( */}
        {/* <HanbergerIcon onClick={() => setNavigationDrawer((pre) => !pre)} /> */}
        {/* )} */}
        <span>DOTORI</span>
      </S.MobileTitle>
      {navigationDrawer && (
        <NavigationDrawer
          modalState={navigationDrawer}
          setModalState={setNavigationDrawer}
        />
      )}
      <S.RightWrapper>
        <S.ModalBtnWrapper>
          {(pathname === '/selfstudy' || pathname === '/studentDetail') && (
            <S.ModalBtn onClick={() => setModalState(true)}>
              <FilterIcon />
              <span>필터</span>
            </S.ModalBtn>
          )}
          {pathname === '/penalty' && (
            <>
              <S.ModalBtn>
                <DownloadIcon />
                <span>엑셀 다운로드</span>
              </S.ModalBtn>
              <S.ModalBtn onClick={() => setModalState(true)}>
                <FilterIcon />
                <span>필터</span>
              </S.ModalBtn>
            </>
          )}
          {pathname === 'song' && (
            <>
              <S.ModalBtn>
                <CalendarIcon />
                <span>달력</span>
              </S.ModalBtn>
              <S.ModalBtn>
                <PlusIcon />
                <span>음악신청</span>
              </S.ModalBtn>
            </>
          )}
        </S.ModalBtnWrapper>
        <DarkModeButton />
      </S.RightWrapper>
    </S.HeaderWrapper>
  );
};

export default CommonHeader;

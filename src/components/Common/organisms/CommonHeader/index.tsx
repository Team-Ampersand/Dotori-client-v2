import { MenuData } from 'assets/data/SidebarMenuData';
import {
  CalendarIcon,
  DownloadIcon,
  FilterIcon,
  HanbergerIcon,
  PlusIcon,
} from 'assets/svg';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';
import NavigationDrawer from 'components/Common/organisms/NavigationDrawer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getRole } from 'utils/Libs/getRole';
import { useSetRecoilState } from 'recoil';
import {
  calendarModalState,
  filterModal,
} from 'recoilAtoms/recoilAtomContainer';
import * as S from './style';

const CommonHeader = () => {
  const role = getRole();
  const { pathname } = useRouter();
  const setModalState = useSetRecoilState(filterModal);
  const setCalendarModalState = useSetRecoilState(calendarModalState);
  const [navigationDrawer, setNavigationDrawer] = useState(false);

  return (
    <S.HeaderWrapper>
      <S.Title>
        {MenuData.filter((i) => pathname.includes(i.routerName))[0].menuTitle}
      </S.Title>
      <S.MobileTitle>
        {role !== 'member' && (
          <HanbergerIcon onClick={() => setNavigationDrawer((pre) => !pre)} />
        )}
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
          {(pathname === '/selfstudy' || pathname === '/studsDetail') && (
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
          {pathname === '/song' && (
            <>
              <S.ModalBtn
                onClick={() => {
                  setCalendarModalState(true);
                  setModalState(true);
                }}
              >
                <CalendarIcon />
                <span>달력</span>
              </S.ModalBtn>
              <S.ModalBtn
                onClick={() => {
                  setCalendarModalState(false);
                  setModalState(true);
                }}
              >
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

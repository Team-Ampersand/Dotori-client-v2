import styled from '@emotion/styled';
import { MenuData } from 'assets/data/SidebarMenuData';
import { CalendarIcon, FilterIcon, PlusIcon } from 'assets/svg';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  calendarModalState,
  filterModal,
  penaltyRecordModalState,
  penaltyStudent,
} from 'recoilAtoms/recoilAtomContainer';
import { Palette } from 'styles/globals';

const ResponsiveHeader = () => {
  const { pathname } = useRouter();
  const setModal = useSetRecoilState(filterModal);
  const penaltyStu = useRecoilValue(penaltyStudent);
  const setPenaltyRecordModal = useSetRecoilState(penaltyRecordModalState);
  const setCalendarModalState = useSetRecoilState(calendarModalState);

  const ClickPenaltyBtn = () => {
    penaltyStu.length >= 1
      ? setPenaltyRecordModal(true)
      : toast.warning('학생을 선택해주세요');
  };

  return (
    <Header>
      {MenuData.filter((i) => pathname.includes(i.routerName))[0].menuTitle}

      {(pathname === '/selfstudy' || pathname === '/studsDetail') && (
        <FilterIcon onClick={() => setModal(true)} />
      )}
      {pathname === '/penalty' && (
        <div>
          <PenaltyBtn onClick={ClickPenaltyBtn}>규정 위반 기록</PenaltyBtn>
          <FilterIcon onClick={() => setModal(true)} />
        </div>
      )}
      {pathname === '/song' && (
        <div>
          <CalendarIcon
            onClick={() => {
              setCalendarModalState(true);
              setModal(true);
            }}
          />
          <PlusIcon
            onClick={() => {
              setCalendarModalState(false);
              setModal(true);
            }}
          />
        </div>
      )}
    </Header>
  );
};

const Header = styled.div`
  width: calc(100% + 6vw);
  margin-left: -3vw;
  display: none;
  font-weight: 700;
  font-size: 18px;
  color: ${Palette.NEUTRAL_N10};
  justify-content: space-between;
  background-color: ${Palette.BACKGROUND_CARD};
  padding: 13px 20px;
  margin-bottom: 16px;

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 420px) {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

export const PenaltyBtn = styled.div`
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Palette.SYSTEM_ERROR};
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${Palette.SYSTEM_ERROR};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    color: ${Palette.BACKGROUND_CARD};
    background-color: ${Palette.SYSTEM_ERROR};
  }
`;

export default ResponsiveHeader;

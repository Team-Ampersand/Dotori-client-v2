import * as S from './style';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';
import { useRouter } from 'next/router';
import { MenuData } from 'assets/data/SidebarMenuData';
import { DotoriIcon, XtextIcon } from 'assets/svg';
import { ChangeMenuIcon } from 'utils/ChangeMenuIcon';
import { ModalOverayWrapper } from 'components/Home/atoms/Wrapper/style';
import { ModalProps } from 'types';

const NavigationDrawer = ({modalState, setModalState}:ModalProps) => {
  const router = useRouter();

  return (
    <ModalOverayWrapper isClick={modalState} >
      <S.NavigationDrawerWrapper>
        <S.NavigationDrawerTop>
          <XtextIcon onClick={() => setModalState(false)}/>
        </S.NavigationDrawerTop>
          <S.DototiTitle>
              <DotoriIcon/>
              <span>DOTORI</span>
          </S.DototiTitle>

          <S.NavigationDrawerList>
              <S.NavigationDrawerItem onClick={() => router.push('/studsDetail')}>
              <>
                {ChangeMenuIcon(false)['학생정보']()}
              </>
                <S.DrawerItemTitle>{'학생정보'}</S.DrawerItemTitle>
              </S.NavigationDrawerItem>
              <S.NavigationDrawerItem onClick={() => router.push('/penalty')}>
              <>
                {ChangeMenuIcon(false)['규정위반']()}
              </>
                <S.DrawerItemTitle>{'규정위반'}</S.DrawerItemTitle>
              </S.NavigationDrawerItem>
          </S.NavigationDrawerList>

      </S.NavigationDrawerWrapper>
    </ModalOverayWrapper>

  );
};

export default NavigationDrawer;

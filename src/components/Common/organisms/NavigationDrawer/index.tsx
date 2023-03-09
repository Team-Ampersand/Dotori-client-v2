import * as S from './style';
import { useRouter } from 'next/router';
import { DotoriIcon, XtextIcon } from 'assets/svg';
import { ChangeMenuIcon } from 'utils/ChangeMenuIcon';
import { ModalProps } from 'types';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';

const NavigationDrawer = ({modalState, setModalState}:ModalProps) => {
  const router = useRouter();

  const isCurrentRouter = (route:string) => router.pathname === route;

  return (
    <>
    <ModalOverayWrapper isClick={modalState} onClick={() => setModalState(false)} />
      <S.NavigationDrawerWrapper>
        <S.NavigationDrawerTop>
          <XtextIcon onClick={() => setModalState(false)}/>
        </S.NavigationDrawerTop>
          <S.DototiTitle>
              <DotoriIcon/>
              <span>DOTORI</span> 
          </S.DototiTitle>
          <S.NavigationDrawerList>
              <S.NavigationDrawerItem 
                title='학생정보'
                onClick={() => router.push('/studsDetail')}
                isCurrentRouter={isCurrentRouter('/studsDetail')}
              >
              <>
                {ChangeMenuIcon(isCurrentRouter('/studsDetail'))['학생정보']()}
              </>
                <S.DrawerItemTitle>학생정보</S.DrawerItemTitle>
              </S.NavigationDrawerItem>
              <S.NavigationDrawerItem 
                  title='규정위반'
                  onClick={() => router.push('/penalty')}
                  isCurrentRouter={isCurrentRouter('/penalty')}
              >
              <>
                {ChangeMenuIcon(isCurrentRouter('/penalty'))['규정위반']()}
              </>
                <S.DrawerItemTitle>규정위반</S.DrawerItemTitle>
              </S.NavigationDrawerItem>
          </S.NavigationDrawerList>

      </S.NavigationDrawerWrapper>
    </>
  );
};

export default NavigationDrawer;

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getDate } from 'utils/getDate';
import * as S from './style';
import Dotori3DImg from 'assets/png/Dotori3D.png';
import Dotori3DDarkImg from 'assets/png/Dotori3DDark.png';
import ShadowImg from 'assets/png/shadow.png';
import UseToggleTheme from 'hooks/useToggleTheme';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';
import { DefaultProfile, HanbergerIcon } from 'assets/svg';
import MenuModal from 'components/Home/molecules/MenuModal';
import PenaltyModal from 'components/Home/molecules/PenaltyModal';
import ProileImgModal from 'components/Home/molecules/ProfileImgModal';
import NavigationDrawer from 'components/Common/organisms/NavigationDrawer';
import GradationImg from '../../../../assets/png/Gradation.png';
import { useRecoilState } from 'recoil';
import {
  menuModalState,
  penaltyModalState,
  profileModalState,
} from 'recoilAtoms/recoilAtomContainer';
import { getRole } from 'utils/Libs/getRole';
import { useSWRConfig } from 'swr';
import { MassageController, SelfstudyController } from 'utils/Libs/requestUrls';

const TimeBoard = () => {
  const [date, setDate] = useState<string>('');
  const [year, month, day, minute] = getDate();
  const [theme] = UseToggleTheme();
  const [menuModal, setMenuModal] = useRecoilState(menuModalState);
  const [penaltyModal, setPenaltyModal] = useRecoilState(penaltyModalState);
  const [profileImgModal, setProfileImgModal] =
    useRecoilState(profileModalState);
  const [navigationDrawer, setNavigationDrawer] = useState(false);
  const { mutate } = useSWRConfig();
  const role = getRole();

  useEffect(() => tick(), []);

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  const tick = () => {
    if (new Date().toLocaleTimeString() === '오후 8:00:00') {
      mutate(SelfstudyController.selfStudyInfo(role));
    } else if (new Date().toLocaleTimeString() === '오후 8:20:00') {
      mutate(MassageController.massage(role));
    } else if (new Date().toLocaleTimeString() === '오후 9:00:00') {
      mutate(SelfstudyController.selfStudyInfo(role));
      mutate(MassageController.massage(role));
    }
    setDate(new Date().toLocaleTimeString());
  };

  if (!date) return <></>;
  return (
    <S.TimeBoardWrapper>
      <S.BoardTop>
        <S.BoardTopLeftWrapper>
          <span>홈</span>
          <S.TodayDate>{`${year}년 ${month}월 ${day}일`}</S.TodayDate>
        </S.BoardTopLeftWrapper>
        <S.MobileTitle>
          {role !== 'member' && (
            <HanbergerIcon onClick={() => setNavigationDrawer((pre) => !pre)} />
          )}
          <span>DOTORI</span>
        </S.MobileTitle>
        <S.BoardTopRightWrapper>
          <DarkModeButton />
          <DefaultProfile
            width={40}
            height={40}
            onClick={() => setMenuModal((pre) => !pre)}
            className="defaultProfileImg"
          />
          <MenuModal
            isClick={menuModal}
            setIsClick={setMenuModal}
            setPenaltyModal={setPenaltyModal}
            setProfileImgModal={setProfileImgModal}
          />
        </S.BoardTopRightWrapper>
      </S.BoardTop>
      {penaltyModal && <PenaltyModal role={role} />}
      {profileImgModal && <ProileImgModal />}
      {navigationDrawer && (
        <NavigationDrawer
          modalState={navigationDrawer}
          setModalState={setNavigationDrawer}
        />
      )}
      <S.BoardBottom>
        <Image
          src={GradationImg}
          layout="fill"
          priority
          alt="GradationImg"
          placeholder="blur"
        />
        <span>현재시간</span>
        <S.CurrentTime>{date}</S.CurrentTime>
        <S.DotoriImgBox>
          <Image
            src={theme === 'light' ? Dotori3DImg : Dotori3DDarkImg}
            alt="도토리"
            priority
            layout="fill"
            objectFit={'cover'}
            // placeholder="blur"
          />
        </S.DotoriImgBox>
        <S.ShadowImgBox>
          <Image
            src={ShadowImg}
            layout="fill"
            priority
            alt="그림자이미지"
            placeholder="blur"
          />
        </S.ShadowImgBox>
      </S.BoardBottom>
    </S.TimeBoardWrapper>
  );
};

export default TimeBoard;

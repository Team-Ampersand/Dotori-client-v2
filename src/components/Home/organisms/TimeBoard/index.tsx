import Image from "next/image";
import { useEffect, useState } from "react";
import { todayDate } from "utils/todayDate";
import * as S from "./style";
import Dotori3DImg from 'assets/png/Dotori3D.png';
import Dotori3DDarkImg from 'assets/png/Dotori3DDark.png';
import UseToggleTheme from "hooks/useToggleTheme";
import DarkModeButton from "components/Common/atoms/Buttons/DarkModeBtn";
import { DefaultProfile, HanbergerIcon } from "assets/svg";
import MenuModal from "components/Home/molecules/MenuModal";
import PenaltyModal from "components/Home/molecules/PenaltyModal";
import ProileImgModal from "components/Home/molecules/ProfileImgModal";
import { useRole } from "hooks/useRole";
import NavigationDrawer from "components/Common/organisms/NavigationDrawer";

const TimeBoard = () => {
    const [date, setDate] = useState<string>("");
    const [year, month, day] = todayDate();
    const [theme, ] = UseToggleTheme();
    const [menuModal, setMenuModal] = useState(false);
    const [penaltyModal, setPenaltyModal] = useState(false);
    const [profileImgModal, setProfileImgModal] = useState(false);
    const [navigationDrawer, setNavigationDrawer] = useState(false);
    // const role = useRole()

    useEffect(() => tick(),[])

    useEffect(()=> {
        setInterval(() => tick(),1000)
    },[])

    const tick = () => setDate(new Date().toLocaleTimeString())

    if (!date) return <></>;
    return (
        <S.TimeBoardWrapper>
            <S.BoardTop>
                <S.BoardTopLeftWrapper>
                    <span>홈</span>
                    <S.TodayDate>{`${year}년 ${month}월 ${day}일`}</S.TodayDate>
                </S.BoardTopLeftWrapper>
                <S.MobileTitle>
                    {/* {
                        role !== 'member' && */}
                        {/* <HanbergerIcon onClick={() => setNavigationDrawer(pre => !pre)}/> */}
                    {/* } */}
                    <span>DOTORI</span>
                </S.MobileTitle>
                <S.BoardTopRightWrapper className="homeprofile">
                    <DarkModeButton/>
                    <DefaultProfile width={40} height={40} onClick={() => setMenuModal(pre => !pre)} className="defaultProfileImg"/>
                    <MenuModal
                        isClick={menuModal} 
                        setIsClick={setMenuModal} 
                        setPenaltyModal={setPenaltyModal} 
                        setProfileImgModal={setProfileImgModal}
                    />
                </S.BoardTopRightWrapper>
            </S.BoardTop>
            {
                penaltyModal && <PenaltyModal modalState={penaltyModal} setModalState={setPenaltyModal}/>
            }
            {
                profileImgModal && <ProileImgModal modalState={profileImgModal} setModalState={setProfileImgModal}/>
            }
            {
                navigationDrawer && <NavigationDrawer modalState={navigationDrawer} setModalState={setNavigationDrawer}/>
            }
            <S.BoardBottom>
                <span>현재시간</span>
                <S.CurrentTime>{date}</S.CurrentTime>
                <S.DotoriImgBox>
                    <Image src={theme === 'light' ? Dotori3DImg : Dotori3DDarkImg} alt="도토리" width={305} height={315} objectFit={"cover"}/>
                </S.DotoriImgBox>
            </S.BoardBottom>
        </S.TimeBoardWrapper>
    )
}

export default TimeBoard
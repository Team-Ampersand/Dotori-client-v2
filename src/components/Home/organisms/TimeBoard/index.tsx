import Image from "next/image";
import { useEffect, useState } from "react";
import { todayDate } from "utils/todayDate";
import * as S from "./style";
import Dotori3DImg from 'assets/png/Dotori3D.png';
import Dotori3DDarkImg from 'assets/png/Dotori3DDark.png';
import UseToggleTheme from "hooks/useToggleTheme";

const TimeBoard = () => {
    const [date, setDate] = useState<string>("");
    const [year, month, day] = todayDate();
    const [theme, ] = UseToggleTheme();

    useEffect(() => tick(),[])

    useEffect(()=> {
        setInterval(() => tick(),1000)
    },[])

    const tick = () => setDate(new Date().toLocaleTimeString())

    if (!date) return <></>;
    return (
        <S.TimeBoardWrapper>
            <S.BoardTop>
                <span>홈</span>
                <S.TodayDate>{`${year}년 ${month}월 ${day}일`}</S.TodayDate>
            </S.BoardTop>
            <S.BoardBottom>
                <p>현재시간</p>
                <S.CurrentTime>{date}</S.CurrentTime>
                <S.DotoriImgBox>
                    <Image src={theme === 'light' ? Dotori3DImg : Dotori3DDarkImg} alt="도토리" width={319} height={330}/>
                </S.DotoriImgBox>
            </S.BoardBottom>
        </S.TimeBoardWrapper>
    )
}

export default TimeBoard
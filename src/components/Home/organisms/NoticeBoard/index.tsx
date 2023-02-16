import NoticeItem from "components/Common/atoms/Items/NoticeItem";
import * as S from "./style";

const NoticeBoard = () => {
    return (
        <S.NoticeBoardWrapper>
            <p>공지사항</p>
            <S.NoticeList>
                <NoticeItem writer={"도토리"} date={"2022-07-06"} title={"[기숙사 자습실 관련 공지]"} desc={"많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식"} isCurrenPage={false}/>
                <NoticeItem writer={"도토리"} date={"2022-07-06"} title={"[기숙사 자습실 관련 공지]"} desc={"많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식"} isCurrenPage={false}/>
                <S.DateLine>
                    <hr/>{"8월 25일"}<hr/>
                    {/* <hr/>{`${date.slice(4, 6)}월 ${date.slice(6)}일`}<hr/> */}
                </S.DateLine>
                <NoticeItem writer={"도토리"} date={"2022-07-06"} title={"[기숙사 자습실 관련 공지]"} desc={"많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식"} isCurrenPage={false}/>
                <NoticeItem writer={"도토리"} date={"2022-07-06"} title={"[기숙사 자습실 관련 공지]"} desc={"많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식"} isCurrenPage={false}/>
                <NoticeItem writer={"도토리"} date={"2022-07-06"} title={"[기숙사 자습실 관련 공지]"} desc={"많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식"} isCurrenPage={false}/>
                <NoticeItem writer={"도토리"} date={"2022-07-06"} title={"[기숙사 자습실 관련 공지]"} desc={"많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식"} isCurrenPage={false}/>
            </S.NoticeList>
        </S.NoticeBoardWrapper>
    )
}

export default NoticeBoard;
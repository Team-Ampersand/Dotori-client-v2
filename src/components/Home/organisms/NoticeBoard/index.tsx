import NoticeItem from "components/Common/atoms/Items/NoticeItem";
import * as S from "./style";
import useSWR from 'swr';
import { noticePageProps } from "types";
import { getRole } from "utils/Libs/getRole";


const NoticeBoard = () => {
	const role = getRole();
	const { data } = useSWR<noticePageProps[]>([`/${role}/getNotice`]);	

    return (
        <S.NoticeBoardWrapper>
            <p>공지사항</p>
            <S.NoticeList>
                {
                    data ? (
                    data.map((i,idx) => (
                        <>
                            <NoticeItem 
                                writer={'도토리'} 
                                date={i.createdTime.slice(1,10)} 
                                title={i.title} 
                                desc={i.content} 
                                isCurrenPage={false} 
                                id={idx}
                            />
                            {
                                data[idx]?.createdTime.slice(1,10) !== data[idx-1]?.createdTime.slice(1,10) &&
                                <S.DateLine>
                                    <hr/>{`${i?.createdTime.slice(5, 7)}월 ${i?.createdTime.slice(8, 10)}일`}<hr/>
                                </S.DateLine>
                            }
                        </>
                    ))
                    ):(
                        <S.EmptyNoticeItem/>
                    )
                }              
            </S.NoticeList>
			<S.NoticeBottom/>
        </S.NoticeBoardWrapper>
    )
}

export default NoticeBoard;
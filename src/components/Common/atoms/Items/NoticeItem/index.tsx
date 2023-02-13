import { Palette } from 'styles/globals';
import { NoticeItemProps } from 'types';
import { dateRegex } from 'utils/dateRegex';
import { writerColor } from 'utils/writerColor';
import * as S from './style';

const NoticeItem = ({
    writer,
    date,
    title,
    desc,
    isCurrenPage,
}:NoticeItemProps) => {
    return (
        <S.NoticeItemWrapper style={{border : isCurrenPage ? `2px solid ${Palette.PRIMARY_P10}` : "" }}>
            <S.ItemTopWrapper>
                <S.Writer>
                    <S.WriterDot style={{background: writerColor[writer]}}/>
                    <span>{writer}</span>
                </S.Writer>
                <span>{dateRegex(date)}</span>
            </S.ItemTopWrapper>
            <span>{title}</span>
            <S.ItemDescWrapper>
                {desc}
            </S.ItemDescWrapper>
        </S.NoticeItemWrapper>
    )
}   

export default NoticeItem
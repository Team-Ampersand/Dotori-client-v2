import { NoticeItemProps } from 'types';
import { writerColor } from 'utils/writerColor';
import * as S from './style';

const NoticeItem = ({
    writer,
    date,
    title,
    desc,
}:NoticeItemProps) => {
    const Date = date?.replace(/(-0|-)/g,'. ');
    return (
        <S.NoticeItemWrapper>
            <S.ItemTopWrapper>
                <S.Writer>
                    <S.WriterDot style={{background: writerColor[writer]}}/>
                    <span>{writer}</span>
                </S.Writer>
                <span>{Date}</span>
            </S.ItemTopWrapper>
            <span>{title}</span>
            <S.ItemDescWrapper>
                {desc}
            </S.ItemDescWrapper>
        </S.NoticeItemWrapper>
    )
}   

export default NoticeItem
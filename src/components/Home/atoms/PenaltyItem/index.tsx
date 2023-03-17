import { PenaltyItemType } from "types";
import { dateRegex } from "utils/dateRegex";
import * as S from "./style";

const PenaltyItem = ({name, createDate}:PenaltyItemType) => (
    <S.PenaltyItemWrapper>
        <span>{name}</span>
        <S.PenaltyItemDate>{dateRegex(createDate)}</S.PenaltyItemDate>
    </S.PenaltyItemWrapper>
)

export default PenaltyItem;
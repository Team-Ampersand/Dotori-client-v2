import { XtextIcon } from "assets/svg";
import ModalHeader from "components/Home/atoms/ModalHeader";
import PenaltyItem from "components/Home/atoms/PenaltyItem";
import { ModalOverayWrapper } from "components/Home/atoms/Wrapper/style";
import { PenaltyModalProps } from "types";
import * as S from "./style";

const PenaltyModal = ({penaltyModal, setPenaltyModal}:PenaltyModalProps) => {
    return (
        <ModalOverayWrapper isClick={penaltyModal}>
            <S.PenaltyModalWrapper>
                <ModalHeader name={"규정 위반 내역"} setState={setPenaltyModal} />
                <S.PenaltyItems>
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                </S.PenaltyItems>
            <S.PenaltyModalBtn onClick={() => setPenaltyModal(false)}>확인</S.PenaltyModalBtn>
            </S.PenaltyModalWrapper>
        </ModalOverayWrapper>
    )
}

export default PenaltyModal;
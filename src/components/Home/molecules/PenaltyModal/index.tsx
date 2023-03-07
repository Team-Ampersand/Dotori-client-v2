import { XtextIcon } from "assets/svg";
import ModalHeader from "components/Common/atoms/ModalHeader";
import PenaltyItem from "components/Home/atoms/PenaltyItem";
import { ModalOverayWrapper } from "components/Home/atoms/Wrapper/style";
import { ModalProps } from "types";
import * as S from "./style";

const PenaltyModal = ({modalState, setModalState}:ModalProps) => {
    return (
        <ModalOverayWrapper isClick={modalState}>
            <S.PenaltyModalWrapper>
                <ModalHeader name={"규정 위반 내역"} setState={setModalState} />
                <S.PenaltyItems>
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                    <PenaltyItem name={"타호실 출입"} date={"2022-04-17"} />
                </S.PenaltyItems>
            <S.PenaltyModalBtn onClick={() => setModalState(false)}>확인</S.PenaltyModalBtn>
            </S.PenaltyModalWrapper>
        </ModalOverayWrapper>
    )
}

export default PenaltyModal;
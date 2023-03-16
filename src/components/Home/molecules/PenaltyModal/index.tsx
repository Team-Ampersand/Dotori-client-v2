import { XtextIcon } from "assets/svg";
import ModalHeader from "components/Common/atoms/ModalHeader";
import PenaltyItem from "components/Home/atoms/PenaltyItem";
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { ModalProps, myProfileType, PenaltyItemType } from "types";
import * as S from "./style";
import useSWR from 'swr';
import { MemberController, penaltyController } from "utils/Libs/requestUrls";
import { penaltyModalState } from "recoilAtoms/recoilAtomContainer";
import { useRecoilState } from "recoil";

const PenaltyModal = () => {
    const [penaltyModal, setPenaltyModal] = useRecoilState(penaltyModalState);
    const { data:ProfileData } = useSWR<myProfileType>(MemberController.myProfile);
    const { data } = useSWR<PenaltyItemType[]>(penaltyController.strRule(ProfileData?.stuNum || ""));
    
    return (
        <ModalOverayWrapper isClick={penaltyModal}>
            <S.PenaltyModalWrapper>
                <ModalHeader name={"규정 위반 내역"} setState={setPenaltyModal} />
                <S.PenaltyItems>
                    {
                        data ? (
                            data?.map((i,idx) => (
                                <PenaltyItem 
                                    name={i.name} 
                                    date={i.date}
                                    key={idx} 
                                />
                            ))
                        ):(
                            <S.NullPenalty>규정위반 내역이 없습니다</S.NullPenalty>    
                        )
                    }
                </S.PenaltyItems>
            <S.PenaltyModalBtn onClick={() => setPenaltyModal(false)}>확인</S.PenaltyModalBtn>
            </S.PenaltyModalWrapper>
        </ModalOverayWrapper>
    )
}

export default PenaltyModal;
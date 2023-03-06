import { XtextIcon } from "assets/svg";
import { ModalHeaderProps } from "types";
import * as S from "./style";

const ModalHeader = ({name, setState}:ModalHeaderProps) => {
    return (
        <S.ModalHeaderWrapper>
            <div>{name}</div>
            <XtextIcon onClick={() => setState(false)}/>
        </S.ModalHeaderWrapper>
    )
}

export default ModalHeader
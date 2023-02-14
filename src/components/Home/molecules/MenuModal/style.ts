import styled from "@emotion/styled";
import { ModalStyleProps } from "types";


export const MenuModal = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 105px;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    z-index: 100;
`;

export const MenuOverlay = styled.div`
    visibility: ${(props:ModalStyleProps) => (props.isClick ? 'visible' : 'hidden')};
    position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
    z-index: 0;
`;
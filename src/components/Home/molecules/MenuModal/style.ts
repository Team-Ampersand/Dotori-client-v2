import styled from "@emotion/styled";
import { ModalStyleProps } from "types";


export const MenuModal = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 30px;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    z-index: 5;

    @media (max-width: 950px) {
        right: 0px;
        top: 45px;
	}
		
    @media (max-width: 420px) {
        position: fixed;
        top: 0px;
    }
`;

export const MenuOverlay = styled.div`
    visibility: ${(props:ModalStyleProps) => (props.isClick ? 'visible' : 'hidden')};
    position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
    z-index: 5;

    @media (max-width: 420px) {
        background: rgba(6, 9, 45, 0.45);
    }
`;
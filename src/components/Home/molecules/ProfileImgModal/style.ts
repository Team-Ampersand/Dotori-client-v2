import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { ModalStyleProps } from "types";

export const ProileImgModalOveray = styled.div`
    visibility: ${(props:ModalStyleProps) => (props.isClick ? 'visible' : 'hidden')};
    position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
    z-index: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(6, 9, 45, 0.25);
`;

export const ProileImgModalWrapper = styled.div`
	background: ${Palette.BACKGROUND_CARD};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 1;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

export const AddImgBtn = styled.div`
	width: 250px;
	height: 235px;
	margin: 15px 0 5px 0;
	background: ${Palette.BACKGROUND_BG};
	border: 1px dashed ${Palette.PRIMARY_P10};
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;
	cursor: pointer;

	span{
		font-weight: 500;
		font-size: 12px;
		color: ${Palette.NEUTRAL_N20};
	}
`;

export const ImgCrop = styled.div`
	width: 500px;
	height: 500px;
	position: relative;
	margin: 22px 5px;
	background: ${Palette.BACKGROUND_CARD};
	border: none;
`;

export const BottomBtns = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 5px 7px 5px;

	button {
		font-weight: 700;
		font-size: 16px;
		width: 110px;
		height: 43px;
		border-radius: 8px;
	}
`;

export const CancelBtn = styled.button`
	border: 1px solid ${Palette.NEUTRAL_N20};
	color: ${Palette.NEUTRAL_N20};

`;

export const SubmitBtn = styled.button`
	background: ${Palette.PRIMARY_P10};
	color: white;
	border: none;
`;
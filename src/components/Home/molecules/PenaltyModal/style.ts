import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const PenaltyModalWrapper = styled.div`
	width: 400px;
	height: 400px;
	background: ${Palette.BACKGROUND_CARD};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 10;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

	@media (max-width: 420px) {
		width: 90%;
		border-radius: 16px;
	}
`;


export const PenaltyItems = styled.div`
	height: 280px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow-y: auto;
	margin: 15px 0 10px 0;

	::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Palette.NEUTRAL_N30};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${Palette.NEUTRAL_N50}
    }
`;


export const PenaltyModalBtn = styled.button`
	height: 50px;
	background: ${Palette.PRIMARY_P10};
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 700;
`;


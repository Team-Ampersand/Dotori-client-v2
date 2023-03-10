import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const LogoutButtonWrapper = styled.a`
	width: 200px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
	padding: 0 20px;
	gap: 20px;
	border-radius: 16px;
	cursor: pointer;
    color: ${Palette.NEUTRAL_N30};
	font-weight: 600;
	font-size: 18px;

    svg {
		width: 25px;
		height: 25px;
		stroke: ${Palette.NEUTRAL_N30};
	}

	@media (max-width: 1634px) {
		width: 65px;
        span{
            display: none;
        }
	}
		
    @media (max-width: 360px) {
		font-size: 12px;
	}
`;
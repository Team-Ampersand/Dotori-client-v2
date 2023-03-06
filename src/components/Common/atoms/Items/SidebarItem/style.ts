import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { SidebarStyleProps } from "types";

export const SidebarItemWrapper = styled.div`
	width: 200px;
	height: 52px;
	display: ${(props:SidebarStyleProps) => (props.isnotShow ? 'none' : 'flex')};
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
	padding: 0 20px;
	gap: 20px;
	border-radius: 16px;
	cursor: pointer;
	color: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `${Palette.PRIMARY_P10}` : `${Palette.NEUTRAL_N30}`)};
	background: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `${Palette.PRIMARY_P20}` : 'transparent')};
	svg {
		width: 25px;
		height: 25px;
	}

	&:hover{
		transition: all 0.3s ease-in;
		background: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `` : `${Palette.BACKGROUND_BG}`)};
	}

	@media (max-width: 1634px) {
		width: 65px;
	}
		
    @media (max-width: 420px) {
		display: ${(props:SidebarStyleProps) => (props.title === "규정위반" ? 'none' : props.title === "학생정보" ? 'none' : "flex")};
		background: transparent
	}
`;

export const MenuTitle = styled.div`
	font-size: 18px;
	font-weight: 600;

	@media (max-width: 1634px) {
		display: none;
	}
`;
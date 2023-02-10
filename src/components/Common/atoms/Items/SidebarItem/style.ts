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
	color: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `${Palette.PRIMARY_P10}` : `#BBBBCC`)};
	background: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `${Palette.PRIMARY_P20}` : 'transparent')};
	svg {
		width: 25px;
		height: 25px;
	}
`;

export const MenuTitle = styled.div`
	font-size: 18px;
	font-weight: 600;
`;
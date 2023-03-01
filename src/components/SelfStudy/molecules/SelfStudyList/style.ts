import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ListWrapper = styled.div`
	width: 200px;
	height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${Palette.BACKGROUND_CARD};
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
	border-radius: 16px;
	position: relative;
`;

export const Profile = styled.div`
	svg {
		width: 64px;
		height: 64px;
	}
`;

export const Number = styled.div`
	position: absolute;
	top: 12px;
	left: 16px;

	font-weight: 500;
	font-size: 12px;
	color: ${Palette.NEUTRAL_N20};
`;

export const StuInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin-top: 7px;
`;

export const Name = styled.span`
	font-weight: 500;
	font-size: 15px;
	color: ${Palette.NEUTRAL_N10};
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

export const StuNum = styled.span`
	font-weight: 500;
	font-size: 12px;
	color: ${Palette.NEUTRAL_N20};
`;

export const Medal = styled.div`
	position: absolute;
	right: -2px;
	bottom: -20px;

	svg {
		width: 64px;
		height: 64px;
	}
`;

export const Checkbox = styled.div`
	position: absolute;
	top: 12px;
	right: 12px;

	box-sizing: border-box;
`;

export const Box = styled.div`
	width: 24px;
	height: 24px;
	border: 1px solid ${Palette.NEUTRAL_N30};
	border-radius: 35%;
`;

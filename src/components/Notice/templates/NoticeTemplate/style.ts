import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const NoticeTemplate = styled.div`
	width: calc(100% - 240px);
	height: 100vh;
	background: ${Palette.BACKGROUND_BG};
	padding: 56px 72px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const NoticeWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

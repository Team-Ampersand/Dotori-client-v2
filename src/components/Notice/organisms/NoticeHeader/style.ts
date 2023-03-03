import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	grid-column: 1 / span 2;

	span {
		color: ${Palette.NEUTRAL_N10};
		font-size: 2em;
	}
`;

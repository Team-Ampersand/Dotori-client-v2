import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;

	span {
		font-weight: 700;
		font-size: 32px;
		color: ${Palette.NEUTRAL_N10};
	}
`;

import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const TableWrapper = styled.div`
	height: 87.5vh;
	display: flex;
	justify-content: space-between;
	margin-top: 24px;
`;

export const ListWrapper = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const ExceptionWrapper = styled.div`
	width: 80%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span {
		margin: 30px 0 10px 0;
		color: ${Palette.NEUTRAL_N10};
		font-weight: 700;
		font-size: 24px;
	}
	p {
		color: ${Palette.NEUTRAL_N20};
		font-weight: 500;
		font-size: 16px;
	}
`;

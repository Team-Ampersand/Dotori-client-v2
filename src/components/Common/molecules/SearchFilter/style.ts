import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { SearchFilterTypeProps, FilterStyleProps } from 'types';

export const FilterWrapper = styled.div`
	width: 280px;
	height: ${(props: SearchFilterTypeProps) =>
		'calc(135px + ' + props.filterType + ' * 95px)'};
	padding: 20px;
	background-color: ${Palette.BACKGROUND_CARD};
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
	border-radius: 16px;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		font-weight: 700;
		font-size: 18px;
		color: ${Palette.NEUTRAL_N10};
	}
`;

export const ResetBtn = styled.div`
	font-weight: 500;
	font-size: 14px;
	color: ${Palette.NEUTRAL_N20};
	cursor: pointer;
`;

export const SearchBox = styled.div`
	width: 100%;
	height: 50px;
	background-color: ${Palette.NEUTRAL_N50};
	border-radius: 8px;
	margin: 16px 0 40px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px;
`;

export const Search = styled.input`
	width: 80%;
	height: 90%;
	border: none;
	font-weight: 500;
	font-size: 16px;
	color: ${Palette.NEUTRAL_N10};
	background-color: ${Palette.NEUTRAL_N50};
	::placeholder {
		font-weight: 500;
		font-size: 16px;
		color: ${Palette.NEUTRAL_N30};
	}
`;

export const SearchBtn = styled.div`
	cursor: pointer;
`;

export const Select = styled.div`
	display: ${(props: FilterStyleProps) => (props.isShow ? 'flex' : 'none')};
	height: 95px;
	flex-direction: column;
	font-weight: 500;
	font-size: 14px;
	color: ${Palette.NEUTRAL_N20};
	span {
		font-weight: 600;
		font-size: 14px;
		color: ${Palette.NEUTRAL_N10};
	}
`;

export const SelectBox = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 8px;
	user-select: none;

	input {
		display: none;
		transition: all 0.1s ease-in-out;
	}
	input + label {
		min-width: 48px;
		height: 34px;
		padding: 12px;
		border: 1px solid ${Palette.NEUTRAL_N30};
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	input:checked + label {
		color: ${(props: FilterStyleProps) =>
			props.darkmode === 'light' ? '#FDFDFD' : '#CDCDD5'};
		background-color: ${Palette.PRIMARY_P10};
		border: 1px solid ${Palette.PRIMARY_P10};
	}
	input:hover + label {
		color: ${(props: FilterStyleProps) =>
			props.darkmode === 'light' ? '#FDFDFD' : '#CDCDD5'};
		background-color: ${Palette.PRIMARY_P10};
		border: 1px solid ${Palette.PRIMARY_P10};
	}
`;

export const Gender = styled.div``;

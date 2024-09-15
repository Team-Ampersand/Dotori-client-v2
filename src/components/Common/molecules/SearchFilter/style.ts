import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { FilterStyleProps } from 'types';

export const FilterWrapper = styled.form`
  min-width: 250px;
  width: 280px;
  padding: 20px;
  background-color: ${Palette.BACKGROUND_CARD};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  @media (max-width: 1200px) {
    width: 23.5vw;
  }
  @media (max-width: 950px) {
    width: 280px;
    position: fixed;
    bottom: 50dvh;
    left: 50vw;
    transform: translate(-50%, 50%);
    z-index: 11;
    ${(props: FilterStyleProps) => !props.modalState && 'display: none;'}
  }
  @media (max-width: 420px) {
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translate(0, 0);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
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
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Select = styled.div`
  display: ${(props: FilterStyleProps) => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  gap: 8px;
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
  input + label:hover {
    color: ${(props: FilterStyleProps) =>
      props.darkmode === 'light' ? '#FDFDFD' : '#CDCDD5'};
    background-color: ${Palette.PRIMARY_P10};
    border: 1px solid ${Palette.PRIMARY_P10};
  }
  @media (max-width: 420px) {
    input + label {
      width: 23%;
    }
  }
`;

export const ApplyBtn = styled.div`
  display: none;
  @media (max-width: 950px) {
    width: 100%;
    height: 45px;
    background-color: ${Palette.PRIMARY_P10};
    border-radius: 8px;
    display: ${(props: FilterStyleProps) =>
      props.modalState ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
  }
`;

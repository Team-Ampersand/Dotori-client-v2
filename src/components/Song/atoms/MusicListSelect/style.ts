import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const SelectContainer = styled.div`
  width: 80px;
  height: 24px;
`;

export const SelectBox = styled.div`
  cursor: pointer;
  font-family: SUIT;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${Palette.NEUTRAL_N20};

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 2.25rem;
  z-index: 3;
  width: 240px;
  height: 112px;
  padding: 0.5rem 0px;
  gap: 0.5rem;
  border-radius: 1rem;
  background-color: ${Palette.BACKGROUND_CARD};
  box-shadow: 0 2px 1.5rem rgba(0, 0, 0, 0.12);

  @media (max-width: 800px) {
    width: 40%;
  }
`;

export const Option = styled.div`
  width: 100%;
  height: 48px;
  padding: 0.5rem 1.25rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  color: ${Palette.NEUTRAL_N10};

  &:hover {
    background-color: ${Palette.NEUTRAL_N50};
  }
`;

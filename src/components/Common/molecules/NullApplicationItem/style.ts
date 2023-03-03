import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const NullApplicstionWrapper = styled.div`
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

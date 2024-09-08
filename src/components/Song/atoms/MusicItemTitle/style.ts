import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ResponseWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h4`
  color: ${Palette.NEUTRAL_N10};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1em;
`;

export const Info = styled.div`
  display: none;
  font-size: 1em;
  color: ${Palette.NEUTRAL_N20};

  @media (max-width: 800px) {
    display: flex;
  }
`;

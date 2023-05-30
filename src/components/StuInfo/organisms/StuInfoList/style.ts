import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 70%;
  height: 100%;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 1rem;
  padding: 1.5rem 1rem;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  height: 5%;
  margin-bottom: 1em;
  padding: 0 0.5em;

  > h3 {
    color: ${Palette.NEUTRAL_N10};
  }
  > p {
    color: ${Palette.NEUTRAL_N20};
    > span {
      color: ${Palette.PRIMARY_P10};
    }
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  overflow-y: auto;
  height: 95%;
`;

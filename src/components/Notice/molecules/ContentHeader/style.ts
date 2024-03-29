import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeftBox = styled.div`
  width: 11vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > * {
    color: ${Palette.NEUTRAL_N10};
  }
`;

export const Writer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 1.2em;
  color: ${Palette.NEUTRAL_N10};
`;

export const Title = styled.h2`
  width: 47vw;
  word-break: break-all;
`;

export const WriterDot = styled.div`
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
`;

export const HeaderRightBox = styled(HeaderLeftBox)`
  align-items: flex-end;
  gap: 1rem;
  small {
    color: ${Palette.NEUTRAL_N20};
  }
`;

export const IconBox = styled.div`
  display: flex;
  gap: 1.2rem;

  button {
    background: transparent;
    border: none;
    padding: 0;
  }
`;

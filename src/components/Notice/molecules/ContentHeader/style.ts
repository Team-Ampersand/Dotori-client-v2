import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ContentHeader = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeftBox = styled.div`
  width: 50%;
  height: 100%;
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

export const WriterDot = styled.div`
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
`;

export const HeaderRightBox = styled(HeaderLeftBox)`
  align-items: flex-end;

  small {
    color: ${Palette.NEUTRAL_N20};
  }
`;

export const IconBox = styled.div`
  display: flex;
  gap: 1.2em;
`;

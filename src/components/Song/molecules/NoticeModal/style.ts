import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 428px;
  background: ${Palette.NEUTRAL_N50};
  border-radius: 1em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  color: ${Palette.NEUTRAL_N10};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: ${Palette.NEUTRAL_N40};
  border-radius: 0.5em;
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: decimal;
  padding-left: 1.125rem;
`;

export const ContentItem = styled.li`
  line-height: 150%;
`;

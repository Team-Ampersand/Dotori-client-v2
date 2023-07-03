import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 72%;
  height: 100%;
  background: ${Palette.BACKGROUND_CARD};
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  background: ${Palette.BACKGROUND_CARD};
  opacity: 0.9;
  backdrop-filter: blur(4px);
  display: flex;
  gap: 0.5rem;
  align-items: center;

  h3 {
    color: ${Palette.NEUTRAL_N10};
  }
  p {
    color: ${Palette.NEUTRAL_N20};
    span {
      color: ${Palette.PRIMARY_P10};
    }
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 2rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ::-webkit-scrollbar {
    width: 0;
  }

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    transition: 0.2s;
    border-radius: 0.5em;
    padding: 0.5em 0.5em 0.5em 0;

    :hover {
      background: ${Palette.NEUTRAL_N50};
    }
  }
  & > a:-webkit-any-link {
    text-decoration: none;
  }
`;

export const EmptySongBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;

  h2 {
    margin-top: 0.75em;
    color: ${Palette.NEUTRAL_N10};
  }
  p {
    color: ${Palette.NEUTRAL_N20};
  }
`;

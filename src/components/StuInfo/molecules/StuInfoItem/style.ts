import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface ButtonBoxProps {
  status: boolean;
  hide: boolean;
}

export const Layer = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875em;
  color: ${Palette.NEUTRAL_N20};
  border-radius: 1em;
  padding: 0 0.5em;

  :hover {
    background: ${Palette.BACKGROUND_BG};
  }
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
  flex-basis: 10em;
`;

export const ImgBox = styled.div`
  height: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  background: ${Palette.NEUTRAL_N40};
`;

export const StuNum = styled.p`
  flex-basis: 3em;
`;

export const Gender = styled.p`
  flex-basis: 1em;
`;

export const RoleBox = styled.div`
  width: 20%;
`;

export const Role = styled.div`
  --color: ${({ color }: { color: string }) => color};
  width: max-content;
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 0.25em 0.75em 0.25em 0.5em;
  border: 1px solid var(--color);
  border-radius: 2.5em;
  color: var(--color);
  span {
    width: 0.5em;
    height: 0.5em;
    background: var(--color);
    border-radius: 0.5em;
  }
`;

export const ButtonBox = styled.div<ButtonBoxProps>`
  display: flex;
  gap: 1em;

  div {
    width: 2.25em;
    height: 2.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Palette.BACKGROUND_BG};
    border-radius: 0.5em;
    padding: 0.5em 0.25em;
    cursor: pointer;

    :nth-of-type(1) {
      visibility: ${({ hide }) => hide && 'collapse'};
      path {
        stroke: ${({ status }) => status && Palette.PRIMARY_P10};
      }
    }
  }
`;

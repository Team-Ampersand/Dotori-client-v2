import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
  flex-basis: 10em;
`;

export const ImgBox = styled.div<{ image?: string | null }>`
  height: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;

  ${(props) =>
    props.image &&
    css`
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${props.image});
    `}
`;

import styled from '@emotion/styled';
import Link from 'next/link';

export const Layer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 1em;
  width: 45%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
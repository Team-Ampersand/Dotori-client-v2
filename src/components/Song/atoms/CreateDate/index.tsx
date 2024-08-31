import styled from '@emotion/styled';
import React from 'react';
import { Palette } from 'styles/globals';

const CreateDate = ( { songDate }: { songDate: string } ) => {
  return (
    <Date>{songDate}</Date>
  );
};

export default CreateDate;

const Date = styled.p`
  color: ${Palette.NEUTRAL_N20};
  font-size: 0.875em;

  @media (max-width: 800px) {
    display: none;
  }
`;

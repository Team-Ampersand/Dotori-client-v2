import styled from '@emotion/styled';
import React from 'react';
import { Palette } from 'styles/globals';

interface SubmitProps {
  isValid: boolean;
  isSubmitting: boolean;
}

const Submit = ({ isValid, isSubmitting }: SubmitProps) => {
  return (
    <SubmitButton
      type="submit"
      isValid={isValid}
      isSubmitting={isSubmitting}
      disabled={isSubmitting}
    >
      신청하기
    </SubmitButton>
  );
};

export default Submit;

const SubmitButton = styled.button<SubmitProps>`
  flex-basis: 48px;
  line-height: 20px;
  background: ${(props) =>
    props.isValid ? Palette.PRIMARY_P10 : Palette.PRIMARY_P30};
  color: ${(props) => (props.isValid ? Palette.WHITE : Palette.NEUTRAL_N20)};
`;

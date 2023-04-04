import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  gap: 0.5em;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 1em;

  @media (max-width: 950px) {
    width: 380px;
  }

  > * {
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 0;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  color: ${Palette.NEUTRAL_N10};
  align-items: center;
  gap: 0.5em;
  font-size: 0.8em;
  margin-bottom: 1em;
`;

export const NoticeModalBtn = styled.button`
  background: ${Palette.NEUTRAL_N40};
  width: 1.8em;
  height: 1.8em;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Palette.NEUTRAL_N20};
`;

export const Input = styled.input`
  flex-basis: 52px;
  padding: 16px 12px;
  background: ${Palette.NEUTRAL_N50};
  border: 1px solid ${Palette.PRIMARY_P10};
  color: ${Palette.NEUTRAL_N10};
`;

export const Submit = styled.button`
  flex-basis: 48px;
  line-height: 20px;
  background: ${Palette.PRIMARY_P30};
  color: ${Palette.NEUTRAL_N20};
`;

export const NotForm = styled.p`
  color: ${Palette.NEUTRAL_N20};
`;

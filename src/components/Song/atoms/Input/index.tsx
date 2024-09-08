import React, { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface FormValues {
  url: string;
}

interface InputProps {
  setIsValid: (isValid: boolean) => void;
  register: UseFormRegister<FormValues>;
}

const regUrl =
  /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;

const Input = ({ setIsValid, register }: InputProps) => {
  return (
    <SongInput
      placeholder="URL을 입력해 주세요"
      type="url"
      {...register('url', {
        required: {
          value: true,
          message: '아무것도 입력하지 않았어요',
        },
        pattern: {
          value: regUrl,
          message: 'URL 형식에 맞게 입력해주세요',
        },
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          const url = e.target.value;
          const isValid = regUrl.test(url);
          setIsValid(isValid);
        },
      })}
    />
  );
};

export default Input;

const SongInput = styled.input`
  flex-basis: 52px;
  padding: 16px 12px;
  background: ${Palette.NEUTRAL_N50};
  color: ${Palette.NEUTRAL_N10};

  ::-webkit-input-placeholder {
    transition: color 0.25s;
  }

  :focus {
    border: 1px solid ${Palette.PRIMARY_P10};
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

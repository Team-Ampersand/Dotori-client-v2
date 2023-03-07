import React, { useState } from 'react';
import * as S from './Style';
import { CheckBox, CheckedBox } from 'assets/svg';
import { PenaltyCheckProps } from 'types';
import { useRecoilState } from 'recoil';
import { penaltyStudent } from 'recoilAtoms/recoilAtomContainer';

const PenaltyCheck = ({ name }: PenaltyCheckProps) => {
  const [penaltyStu, setPenaltyStu] = useRecoilState(penaltyStudent);

  const handleStuCheck = (stuName: string) => {
    if (!penaltyStu.includes(name)) {
      setPenaltyStu([...penaltyStu, stuName]);
    } else {
      setPenaltyStu(penaltyStu.filter((i) => i !== stuName));
    }
  };

  return (
    <S.Checkbox
      onClick={() => {
        handleStuCheck(name);
      }}
    >
      {penaltyStu.includes(name) ? <CheckedBox /> : <CheckBox />}
    </S.Checkbox>
  );
};

export default PenaltyCheck;

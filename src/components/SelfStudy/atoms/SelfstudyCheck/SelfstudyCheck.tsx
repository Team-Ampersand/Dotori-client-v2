import React from 'react';
import * as S from './Style';
import { CheckProps, selfstudyListProps } from 'types';
import { CheckBox, CheckedBox } from 'assets/svg';
import { selfStudyCheck } from 'api/selfStudy';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import useSWR from 'swr';

const SelfstudyCheck = ({ role, stuNum, checked }: CheckProps) => {
  const { mutate } = useSWR<selfstudyListProps[]>(
    SelfstudyController.selfStudyRank(role)
  );

  const studyChecks = async (
    role: string,
    memberId: string,
    checked: boolean
  ) => {
    await selfStudyCheck(role, memberId, checked);
    mutate();
  };

  return (
    <S.Checkbox
      onClick={() => {
        studyChecks(role, stuNum, !checked);
      }}
    >
      {checked ? <CheckedBox /> : <CheckBox />}
    </S.Checkbox>
  );
};

export default SelfstudyCheck;

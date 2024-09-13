import React from 'react';
import useSWR from 'swr';
import { CheckProps, selfstudyListProps } from 'types';
import { CheckBox, CheckedBox } from 'assets/svg';
import { selfStudyCheck } from 'api/selfStudy';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import * as S from './Style';

const SelfstudyCheck = ({ role, memberId, checked }: CheckProps) => {
  const { mutate } = useSWR<selfstudyListProps[]>(
    SelfstudyController.selfStudyRank(role),
  );

  const studyChecks = async (
    role: string,
    memberId: number | undefined,
    checked: boolean,
  ) => {
    await selfStudyCheck(role, memberId, checked).then(() => {
      mutate();
    });
  };

  return (
    <S.Checkbox
      onClick={() => {
        studyChecks(role, memberId, !checked);
      }}
    >
      {checked ? <CheckedBox /> : <CheckBox />}
    </S.Checkbox>
  );
};

export default SelfstudyCheck;

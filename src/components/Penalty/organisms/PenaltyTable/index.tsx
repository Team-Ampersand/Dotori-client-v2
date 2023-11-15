import * as S from './style';
import PenaltyList from 'components/Penalty/molecules/PenaltyList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  penaltyList,
  penaltyRecordModalState,
  penaltyStudent,
} from 'recoilAtoms/recoilAtomContainer';
import { XtextIcon } from 'assets/svg';
import { toast } from 'react-toastify';
import { getRole } from 'utils/Libs/getRole';
import { useEffect } from 'react';
import useSWR from 'swr';
import { PenaltyStuListType } from 'types';
import { penaltyController } from 'utils/Libs/requestUrls';
import ResponsiveHeader from 'components/Common/atoms/ResponsiveHeader';

const PenaltyTable = () => {
  const role = getRole();
  const [penaltyStu, setPenaltyStu] = useRecoilState(penaltyStudent);
  const setPenaltyRecordModal = useSetRecoilState(penaltyRecordModalState);
  const [penaltyOBJ, setPenaltyOBJ] = useRecoilState(penaltyList);
  const { data } = useSWR<PenaltyStuListType>(penaltyController.strRule(role));

  useEffect(() => {
    setPenaltyOBJ(data?.students);
  }, [data]);

  const handelStuCheck = (name: string) => {
    setPenaltyStu(penaltyStu.filter((i) => i.name !== name));
  };

  const ClickPenaltyBtn = () => {
    penaltyStu.length >= 1
      ? setPenaltyRecordModal(true)
      : toast.warning('학생을 선택해주세요');
  };

  return (
    <S.TableWrapper>
      <ResponsiveHeader />
      <S.ListWrapper>
        <S.ListHeader>
          <S.StudentConst>
            <span>학생</span>
            {penaltyOBJ?.length}
            <p>명</p>
          </S.StudentConst>
          <S.PenaltyBtn onClick={ClickPenaltyBtn}>규정 위반 기록</S.PenaltyBtn>
        </S.ListHeader>
        {penaltyStu.length >= 1 && (
          <S.TagWrapper>
            {penaltyStu.map((i, idx) => (
              <S.TagItem key={idx} onClick={() => handelStuCheck(i.name)}>
                {i.name}
                <XtextIcon />
              </S.TagItem>
            ))}
          </S.TagWrapper>
        )}
        <PenaltyList />
      </S.ListWrapper>
    </S.TableWrapper>
  );
};

export default PenaltyTable;

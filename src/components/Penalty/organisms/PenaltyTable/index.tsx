import * as S from './style';
import PenaltyList from 'components/Penalty/molecules/PenaltyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { useRecoilState } from 'recoil';
import { penaltyStudent } from 'recoilAtoms/recoilAtomContainer';
import { XtextIcon } from 'assets/svg';
import { useState } from 'react';
import { toast } from 'react-toastify';

const PenaltyTable = () => {
  const [penaltyStu, setPenaltyStu] = useRecoilState(penaltyStudent);
  const [penaltyRecordModal, setPenaltyRecordModal] = useState(false);

  const handelStuCheck = (stuName: string) => {
    setPenaltyStu(penaltyStu.filter((i) => i !== stuName));
  };

  const ClickPenaltyBtn = () => {
    penaltyStu.length >= 1
      ? setPenaltyRecordModal(true)
      : toast.warning('학생을 선택해주세요');
  };

  return (
    <S.TableWrapper>
      <S.ListWrapper>
        <S.ListHeader>
          <S.StudentConst>
            <span>학생</span>
            357
            <p>명</p>
          </S.StudentConst>
          <S.PenaltyBtn onClick={ClickPenaltyBtn}>규정 위반 기록</S.PenaltyBtn>
        </S.ListHeader>
        {penaltyStu.length >= 1 && (
          <S.TagWrapper>
            {penaltyStu.map((i, idx) => (
              <S.TagItem key={idx}>
                {i}
                <XtextIcon onClick={() => handelStuCheck(i)} />
              </S.TagItem>
            ))}
          </S.TagWrapper>
        )}
        <PenaltyList
          penaltyModal={penaltyRecordModal}
          setPenaltyModal={setPenaltyRecordModal}
        />
      </S.ListWrapper>
      <div>
        <SearchFilter filterType={'penalty'} />
        <S.CSVWrapper>
          <span>내보내기</span>
          <S.CSVLink>엑셀 다운로드</S.CSVLink>
        </S.CSVWrapper>
      </div>
    </S.TableWrapper>
  );
};

export default PenaltyTable;

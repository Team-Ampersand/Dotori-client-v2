import * as S from './style';
import PenaltyList from 'components/Penalty/molecules/PenaltyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  filterModal,
  penaltyList,
  penaltyRecordModalState,
  penaltyStudent,
} from 'recoilAtoms/recoilAtomContainer';
import { DownloadIcon, FilterIcon, XtextIcon } from 'assets/svg';
import { toast } from 'react-toastify';
import { selfPenaltySearch } from 'api/penalty';
import { getRole } from 'utils/Libs/getRole';
import { useEffect } from 'react';
import useSWR from 'swr';
import { PenaltyStuListType } from 'types';
import { penaltyController } from 'utils/Libs/requestUrls';

const PenaltyTable = () => {
  const role = getRole();
  const [penaltyStu, setPenaltyStu] = useRecoilState(penaltyStudent);
  const setPenaltyRecordModal = useSetRecoilState(penaltyRecordModalState);
  const setPenaltyOBJ = useSetRecoilState(penaltyList);
  const { data } = useSWR<PenaltyStuListType>(penaltyController.strRule(role));
  const setModal = useSetRecoilState(filterModal);

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

  const handelPenaltySearch = async (
    state: (string | undefined)[],
    name?: string
  ) => {
    await selfPenaltySearch(
      role,
      name,
      state[0],
      state[1]?.slice(0, 1),
      state[2]
    ).then((res) => {
      setPenaltyOBJ(res?.data.students);
    });
  };

  return (
    <S.TableWrapper>
      <S.ResponseHeader>
        규정위반
        <div>
          <S.PenaltyBtn onClick={ClickPenaltyBtn}>규정 위반 기록</S.PenaltyBtn>
          <DownloadIcon />
          <FilterIcon onClick={() => setModal(true)} />
        </div>
      </S.ResponseHeader>
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
              <S.TagItem key={idx} onClick={() => handelStuCheck(i.name)}>
                {i.name}
                <XtextIcon />
              </S.TagItem>
            ))}
          </S.TagWrapper>
        )}
        <PenaltyList />
      </S.ListWrapper>
      <div>
        <SearchFilter filterType={'penalty'} onSubmit={handelPenaltySearch} />
        <S.CSVWrapper>
          <span>내보내기</span>
          <S.CSVLink>엑셀 다운로드</S.CSVLink>
        </S.CSVWrapper>
      </div>
    </S.TableWrapper>
  );
};

export default PenaltyTable;

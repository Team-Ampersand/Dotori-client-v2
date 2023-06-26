import * as S from './style';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { getRole } from 'utils/Libs/getRole';
import { selfPenaltySearch } from 'api/penalty';
import { useSetRecoilState } from 'recoil';
import { penaltyList } from 'recoilAtoms/recoilAtomContainer';

const PenaltyForm = () => {
  const role = getRole();
  const setPenaltyOBJ = useSetRecoilState(penaltyList);

  const handelPenaltySearch = async (
    state: (string | undefined)[],
    name?: string
  ) => {
    const data = await selfPenaltySearch(
      role,
      name,
      state[0],
      state[1]?.slice(0, 1),
      state[2]
    );
    setPenaltyOBJ(data?.data.students);
  };

  return (
    <S.Wrappert>
      <SearchFilter filterType={'penalty'} onSubmit={handelPenaltySearch} />
      <S.CSVWrapper>
        <span>내보내기</span>
        <S.CSVLink>엑셀 다운로드</S.CSVLink>
      </S.CSVWrapper>
    </S.Wrappert>
  );
};

export default PenaltyForm;

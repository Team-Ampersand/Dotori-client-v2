import { RoleData } from 'assets/data/RoleData';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { useSetRecoilState } from 'recoil';
import { stuInfoParams } from 'recoilAtoms/recoilAtomContainer';
import * as S from './style';

const StuInfoForm = () => {
  const setParamData = useSetRecoilState(stuInfoParams);

  const handleSubmit = async (state: (string | undefined)[], name?: string) => {
    const stuName = name?.trim() !== '' ? name?.trim() ?? null : null;
    const gender = state[2] ?? null;
    const classNum = state[1]?.trim() ?? null;
    const grade = !!Number(state[0]) ? Number(state[0]) : null;
    const stuRole = RoleData.USERFILTER[state[3] ?? ''];
    const selfStudyCheck =
      state[4] === '자습가능'
        ? 'CAN'
        : state[4] === '자습금지'
        ? 'IMPOSSIBLE'
        : null;

    setParamData({
      name: stuName,
      gender: gender,
      classNum: classNum,
      grade: grade,
      role: stuRole,
      selfStudyStatus: selfStudyCheck,
    });
  };

  return (
    <S.Positioner>
      <SearchFilter filterType="studentdetail" onSubmit={handleSubmit} />
    </S.Positioner>
  );
};

export default StuInfoForm;

import SearchFilter from 'components/Common/molecules/SearchFilter';
import { useSetRecoilState } from 'recoil';
import { stuInfoParams } from 'recoilAtoms/recoilAtomContainer';
import { requestFilterRole } from 'utils/Libs/requestRole';
import * as S from './style';

interface ParamDataType {
  name: string | null;
  gender: string | null;
  classNum: string | null;
  grade: number | null;
  stuRole: 'ROLE_MEMBER' | 'ROLE_COUNCILLOR' | 'ROLE_DEVELOPER' | null;
  selfStudyCheck: boolean | null;
}

const StuInfoForm = () => {
  const setParamData = useSetRecoilState(stuInfoParams);

  const handleSubmit = async (state: (string | undefined)[], name?: string) => {
    const stuName = name?.trim() !== '' ? name?.trim() ?? null : null;
    const gender = state[2] ?? null;
    const classNum = state[1]?.trim() ?? null;
    const grade = !!Number(state[0]) ? Number(state[0]) : null;
    const stuRole = requestFilterRole(state[3]);
    const selfStudyCheck =
      state[4] === '자습가능' ? true : state[4] === '자습금지' ? false : null;

    setParamData({
      name: stuName,
      gender: gender,
      classNum: classNum,
      grade: grade,
      stuRole: stuRole,
      selfStudyCheck: selfStudyCheck,
    });
  };

  return (
    <S.Positioner>
      <SearchFilter filterType="studentdetail" onSubmit={handleSubmit} />
    </S.Positioner>
  );
};

export default StuInfoForm;

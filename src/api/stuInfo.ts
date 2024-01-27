import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { StuInfoController } from 'utils/Libs/requestUrls';

export const getStuInfo = async () => {
  try {
    const { data } = await apiClient.get(StuInfoController.stuInfo);
    return { data };
  } catch (e: any) {}
};

export const getSearchStuInfo = async (
  name: string | null,
  gender: string | null,
  classNum: string | null,
  grade: number | null,
  stuRole: 'ROLE_MEMBER' | 'ROLE_COUNCILLOR' | 'ROLE_DEVELOPER' | null,
  selfStudyCheck: boolean | null
) => {
  try {
    const { data } = await apiClient.get(StuInfoController.searchStuInfo, {
      params: {
        name: name,
        gender: gender,
        classNum: classNum,
        grade: grade,
        role: stuRole,
        selfStudyCheck: selfStudyCheck,
      },
    });
    return { data };
  } catch (e: any) {}
};

export const putStuInfo = async (
  memberId: number,
  memberName: string,
  stuNum: string,
  gender: 'MAN' | 'WOMAN',
  stuRole: 'ROLE_MEMBER' | 'ROLE_COUNCILLOR' | 'ROLE_DEVELOPER' | 'ROLE_ADMIN'
) => {
  try {
    await apiClient.put(StuInfoController.modifyStuInfo, {
      memberId: memberId,
      memberName: memberName,
      stuNum: stuNum,
      gender: gender,
      role: stuRole,
    });
    return toast.success('학생정보 수정이 완료되었습니다');
  } catch (e: any) {
    if (e.response.status === 404) toast.error('존재하지 않는 학생입니다');
    else toast.error('학생정보 수정을 실패하였습니다');
    return false;
  }
};

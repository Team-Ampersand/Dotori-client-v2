import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { StuInfoController } from 'utils/Libs/requestUrls';

export const getStuInfo = async (role: string) => {
  try {
    const { data } = await apiClient.get(StuInfoController.stuInfo(role));
    return { data };
  } catch (e: any) {}
};

export const getSearchStuInfo = async (
  role: string,
  name?: string,
  gender?: string,
  classNum?: string,
  grade?: number,
  stuRole?: string,
  selfStudyCheck?: boolean
) => {
  try {
    const { data } = await apiClient.get(
      StuInfoController.searchStuInfo(role),
      {
        params: {
          name: name,
          gender: gender,
          classNum: classNum,
          grade: grade,
          role: stuRole,
          selfStudyCheck: selfStudyCheck,
        },
      }
    );
    return { data };
  } catch (e: any) {}
};

export const putStuInfo = async (
  role: string,
  userId?: number,
  memberName?: string,
  stuNum?: string,
  gender?: 'MAN' | 'WOMAN',
  stuRole?: 'ROLE_MEMBER' | 'ROLE_COUNCILLOR' | 'ROLE_DEVELOPER'
) => {
  try {
    await apiClient.put(StuInfoController.modifyStuInfo(role), {
      gender: gender,
      userId: userId,
      memberName: memberName,
      stuNum: stuNum,
      role: stuRole,
    });
    toast.success('학생정보 수정이 완료되었습니다');
    return;
  } catch (e: any) {
    if (e.response.status === 404) toast.error('존재하지 않는 학생입니다');
    else toast.error('학생정보 수정을 실패하였습니다');
    return false;
  }
};

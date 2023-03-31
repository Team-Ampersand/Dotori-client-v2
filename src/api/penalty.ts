import { AxiosResponse } from 'axios';
import { PenaltyRuleItemType } from 'types';
import { apiClient } from 'utils/Libs/apiClient';
import { penaltyController } from 'utils/Libs/requestUrls';

export const getPenaltyList = async (
  role: string,
  memberName: string,
  stuNum: string
) => {
  try {
    const { data } = await apiClient.get(penaltyController.strRule(role), {
      params: { memberName: memberName, stuNum: stuNum },
    });
    return { data };
  } catch (e) {}
};

export const getPenaltyRule = async (role: string, stuNum: string) => {
  try {
    const { data }: AxiosResponse<PenaltyRuleItemType> = await apiClient.get(
      penaltyController.studentRule(role, stuNum)
    );
    return { data };
  } catch (e) {}
};

export const recordPenalty = async (
  role: string,
  stuNum: string[],
  rule: string[],
  date: string
) => {
  try {
    await apiClient.post(penaltyController.strRule(role), {
      stuNum: stuNum,
      rule: rule,
      date: date,
    });
  } catch (e) {}
};

export const deletePenatly = async (role: string, rule_id: number) => {
  try {
    await apiClient.delete(penaltyController.deletePenalty(role, rule_id));
    return true;
  } catch (e) {}
};

export const selfPenaltySearch = async (
  role: string,
  name?: string,
  grade?: string,
  classNum?: string,
  gender?: string
  // name: string | null,
  // grade: string | null,
  // classNum: string | null,
  // gender: string | null
) => {
  try {
    const { data } = await apiClient.get(penaltyController.strRule(role), {
      params: {
        name: name,
        grade: grade,
        classNum: classNum,
        gender: gender,
      },
    });
    return { data };
  } catch (e: any) {}
};

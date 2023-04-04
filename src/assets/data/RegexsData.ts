import { RegexsDataType } from 'types';

export const RegexsData: RegexsDataType = {
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
  NAME: /^[가-힣]{2,4}$/,
  STUID: /^[1-3]{1}[1-4]{1}[0-1]{1}[0-9]{1}$/,
  EMAIL: /^s[0-9]{5}$/,
};

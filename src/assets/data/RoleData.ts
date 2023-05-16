import { Palette } from 'styles/globals';
import { RoleDataType } from 'types';

export const RoleData: RoleDataType = {
  TOKEN: {
    ROLE_DEVELOPER: 'developer',
    ROLE_COUNCILLOR: 'councillor',
    ROLE_ADMIN: 'admin',
    ROLE_MEMBER: 'member',
  },
  WRITER: {
    ROLE_DEVELOPER: '도토리',
    ROLE_COUNCILLOR: '기숙사자치위원회',
    ROLE_ADMIN: '사감선생님',
    ROLE_MEMBER: '학생',
  },
  WRITERCOLOR: {
    ROLE_DEVELOPER: `${Palette.PRIMARY_P10}`,
    ROLE_COUNCILLOR: `${Palette.SUB_RED}`,
    ROLE_ADMIN: `${Palette.SUB_YELLOW}`,
    ROLE_MEMBER: Palette.NEUTRAL_N20,
  },
};

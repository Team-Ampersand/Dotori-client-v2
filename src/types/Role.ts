export interface RoleType {
  roles: (
    | 'ROLE_DEVELOPER'
    | 'ROLE_COUNCILLOR'
    | 'ROLE_ADMIN'
    | 'ROLE_MEMBER'
  )[];
  userEmail: string;
  tokenType: string;
  iat: number;
  exp: number;
}

export interface RoleDataType {
  TOKEN: TokenRoleType;
  WRITER: WriterRoleType;
  WRITERCOLOR: BaseRoleType;
  USERFILTER: { [role: string]: string };
}

export interface WriterRoleType {
  ROLE_DEVELOPER: '도토리';
  ROLE_COUNCILLOR: '기숙사자치위원회';
  ROLE_ADMIN: '사감선생님';
  ROLE_MEMBER: '학생';
}

export interface BaseRoleType {
  ROLE_DEVELOPER: string;
  ROLE_COUNCILLOR: string;
  ROLE_ADMIN: string;
  ROLE_MEMBER: string;
}

export interface TokenRoleType {
  ROLE_DEVELOPER: 'developer';
  ROLE_COUNCILLOR: 'councillor';
  ROLE_ADMIN: 'admin';
  ROLE_MEMBER: 'member';
}

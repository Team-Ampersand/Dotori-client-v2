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

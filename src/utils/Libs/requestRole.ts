import { userRole } from 'types/common/userRole';

const requestRole = (role: Omit<userRole, 'ROLE_MEMBER'>) => {
  switch (role) {
    case 'admin':
      return '사감선생님';
    case 'councillor':
      return '기숙사자치위원회';
    default:
      return null;
  }
};

export default requestRole;

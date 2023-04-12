import { userRole } from 'types/common/userRole';

const requestWriter = (role: Omit<userRole, 'member'>) => {
  switch (role) {
    case 'admin':
      return '사감선생님';
    case 'councillor':
      return '기숙사자치위원회';
    default:
      return '도토리';
  }
};

export default requestWriter;

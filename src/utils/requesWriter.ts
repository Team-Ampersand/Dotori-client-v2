export const requestWriter = (role: string) => {
  switch (role) {
    case 'ROLE_ADMIN':
      return '사감선생님';
    case 'ROLE_COUNCILLOR':
      return '기숙사자치위원회';
    default:
      return '도토리';
  }
};

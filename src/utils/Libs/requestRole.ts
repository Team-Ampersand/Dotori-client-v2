export const requestWriterRole = (role?: string) => {
  switch (role) {
    case 'admin':
      return '사감선생님';
    case 'councillor':
      return '기숙사자치위원회';
    default:
      return '도토리';
  }
};

export const requestFilterRole = (role?: string) => {
  switch (role) {
    case '학생':
      return 'ROLE_MEMBER';
    case '개발자':
      return 'ROLE_DEVELOPER';
    case '자치위원':
      return 'ROLE_COUNCILLOR';
    default:
      return null;
  }
};

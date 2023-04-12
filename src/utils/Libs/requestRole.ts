const requestRole = (role?: string) => {
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

export default requestRole;

export const MemberController = {
  signup: '/auth/signup',
  auth: '/auth',
  authChangePasswd: '/auth/password',
  emailCheck: '/email/signup',
  authcheck: '/email/verify-email',
  emailPasswordCheck: '/email/password',
  changePasswd: '/members/password',
  myProfile: '/home',
};

export const NoticeController = {
  getNotice(role: string) {
    return `/${role}/board`;
  },
  boardId(boardIdx: number) {
    return `/board/${boardIdx}`;
  },
  getNoticeDetail(role: string, boardIdx: string | string[]) {
    return `${role}/board/${boardIdx}`;
  },
};

export const SelfstudyController = {
  selfStudy(role: string) {
    return `/${role}/self-study`;
  },
  selfStudyInfo(role: string) {
    return `/${role}/self-study/info`;
  },
  modiftStudy(role: string) {
    return `/${role}/self-study/limit`;
  },
  selfStudyRank(role: string) {
    return `/${role}/self-study/rank`;
  },
  selfStudySearch(role: string) {
    return `/${role}/self-study/search`;
  },
  selfStudyCheck(role: string, memberId: number | undefined) {
    return `/${role}/self-study/check/${memberId}`;
  },
  selfStudyBan(role: string, userId: number) {
    return `/${role}/self-study/ban/${userId}`;
  },
  cancelSelfStudyBan(role: string, userId: number) {
    return `/${role}/self-study/ban/cancel/${userId}`;
  },
};

export const MassageController = {
  massage(role: string) {
    return `/${role}/massage`;
  },
  modifyMassage(role: string) {
    return `/${role}/massage/limit`;
  },
  massageRank(role: string) {
    return `/${role}/massage/rank`;
  },
};

export const penaltyController = {
  strRule(role: string) {
    return `${role}/rule`;
  },
  studentRule(role: string, stuNum: string) {
    return `${role}/rule/${stuNum}`;
  },
  deletePenalty(role: string, rule_id: number) {
    return `${role}/rule/${rule_id}`;
  },
};

export const SongController = {
  music(role: string) {
    return `${role}/music`;
  },
  deleteMusic(role: string, musicId: number) {
    return `${role}/music/${musicId}`;
  },
};

export const StuInfoController = {
  stuInfo: '/student-info',
  searchStuInfo(role: string) {
    return `${role}/student-info/search`;
  },
  modifyStuInfo(role: string) {
    return `${role}/student-info/modify`;
  },
};

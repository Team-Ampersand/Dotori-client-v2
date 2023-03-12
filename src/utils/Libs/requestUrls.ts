export const MemberController = {
	signin: '/signin',
	signup: '/signup',
	auth: '/signup/email',
	authcheck: '/signup/email/check',
	changePasswd: '/changePasswd',
}

export const TokenController = {
	reissue: '/reissue'
};

export const BoardController = {
	board: '/board',
	boardId(boardIdx:number) {return `/board/${boardIdx}`},
};

export const SelfstudyController = {
	selfStudy(role: string){return `/${role}/selfstudy`},
	cancelStudy(role: string){return `/${role}/cancel/selfstudy`},
	modifyStudy(role: string,num:number){return `/${role}/modify/selfstudy/${num}`},
};

export const MassageController = {
	massage(role: string){return `/${role}/massage`},
	cancelMassage(role: string){return `/${role}/cancel/massage`},
	modifyMassage(role: string,num:number){return `/${role}/modify/massage/${num}`},
}
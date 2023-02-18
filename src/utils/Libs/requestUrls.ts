export const MemberController = {
	signin: '/signin',
	signup: '/signup',
	auth: '/signup/email',
	authcheck: '/signup/email/check',
	changePasswd: '/changePasswd',
}

//토큰 재발급
export const TokenController = {
	reissue: '/reissue'
};

export const BoardController = {
	board: '/board',
	boardId(boardIdx:number) {return `/board/${boardIdx}`},
};
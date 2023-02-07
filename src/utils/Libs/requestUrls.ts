export const MemberController = {
	signin: () => {
		return '/signin';
	},

	signup: () => {
		return '/signup';
	},

	auth: () => {
		return '/signup/email';
	},

	authcheck: () => {
		return '/signup/email/check';
	},
}



//토큰 재발급
export const TokenController = {
	reissue: () => {
		return '/reissue';
	},
};
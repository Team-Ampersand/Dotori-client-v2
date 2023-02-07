import { GetServerSidePropsContext } from "next";
import { toast } from "react-toastify";
import { apiClient } from "../utils/Libs/apiClient";
import { MemberController, TokenController } from "../utils/Libs/requestUrls";
import { setToken } from "../utils/Libs/setToken";

export const signin = async (id: string, password: string) => {
	try {
		const { data } = await apiClient.post(MemberController.signin(), {
			email: id,
			password: password,
		});
		toast.info('로그인이 되었습니다.')		
		setToken(data.accessToken, data.refreshToken, null);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast.warning('해당 유저가 없어요');
		} else if (e.message === 'Request failed with status code 400') {
			toast.info('비밀번호가 올바르지 않아요');
		}
	}
};

export const signup = async (
	email: string,
	password: string,
	name: string,
	stuNum: number,
	gender: string
) => {
	try {
		const { data } = await apiClient.post(MemberController.signup(), {
			email,
			password,
			name,
			stuNum,
			gender
		});
		toast.info('인증되었습니다.')		
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			toast.warning('이미 가입된 유저에요');
		}
	}
};


export const auth = async (email: string) => {
	const { data } = await apiClient.post(MemberController.auth(), {
		email,
	});
	return { data };
};

export const authCheck = async (emailCode: number) => {
	try {
		const { data } = await apiClient.post(MemberController.authcheck(), {
			emailCode: emailCode,
		});
		toast.success('인증되었어요.')		
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 400') {
			toast.warning('인증 키가 달라요');
		}
	}
};


export const tokenReissue = async (
	RefreshToken: string,
	ctx:GetServerSidePropsContext|null
) => {
	let newAuthorization:string
	try{
		const {data} = await apiClient.patch(TokenController.reissue(),{},{headers: {RefreshToken}});
		newAuthorization = data.accessToken
		RefreshToken = data.refreshToken
		setToken(newAuthorization,RefreshToken,ctx)
		return {newAuthorization}
	  } catch(e:any){
		console.log(e)
	  }
}
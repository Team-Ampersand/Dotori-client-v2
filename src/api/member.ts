import { GetServerSidePropsContext } from "next";
import { toast } from "react-toastify";
import { apiClient } from "utils/Libs/apiClient";
import { MemberController } from "utils/Libs/requestUrls";
import { setToken } from "utils/Libs/setToken";

export const signin = async (id: string, password: string) => {
	try {
		const { data } = await apiClient.post(MemberController.auth, {
			email: id,
			password: password,
		});
		toast.success('로그인이 되었습니다.')		
		setToken(data.accessToken, data.refreshToken, null);
		return true
	} catch (e: any) {
		if(e.message === 'Request failed with status code 404'){
			toast.warning('해당 유저가 없어요.');
		}else if(e.message === 'Request failed with status code 400'){
			toast.warning('비밀번호가 올바르지 않아요.');
		}
		return false
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
		await apiClient.post(MemberController.signup, {
			memberName:name,
			stuNum:String(stuNum),
			password,
			email,
			gender
		});		
		toast.success("회원가입이 되었습니다")
		return true
	} catch (e: any) {		
		if(e.message === 'Request failed with status code 409'){
			toast.warning('이미 가입된 유저에요.');
		}
		return false
	}
};

export const emailCheck = async (email: string) => {
	try {
		await apiClient.post(MemberController.emailCheck, {
			email,
		});
		return  true;
	} catch (e:any) {
		if(e.message === 'Request failed with status code 409') toast.warning('이미 가입된 유저에요.');
		return  false;
	}
};

export const authCheck = async (emailCode: number) => {
	try {
		await apiClient.post(MemberController.authcheck, {
			key: String(emailCode),
		});
		toast.success('인증되었어요.');
		return true;
	} catch (e: any) {
		if(e.message === 'Request failed with status code 202'){
			toast.warning('인증번호시간이 만료됬어요.');
		}else if(e.message === 'Request failed with status code 400'){
			toast.warning('인증 키가 달라요.');
		}else if(e.message === 'Request failed with status code 404'){
			toast.warning('인증번호가 존재하지 않아요.');
		}
		return false
	}
};

export const passwordChange = async (
	currentPassword: string,
	newPassword: string,
) => {
	try {
		await apiClient.patch(MemberController.changePasswd, {
			currentPassword: currentPassword,
			newPassword: newPassword,
		});
		toast.success('비밀번호가 변경되었습니다');
		return true;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 400') {
			toast.warning('입력해주신 정보를 다시 확인해주세요');
		}
		return false;
	}
};


export const tokenReissue = async (
	RefreshToken: string,
	ctx:GetServerSidePropsContext|null
) => {
	let newAuthorization:string
	try{
		const {data} = await apiClient.patch(MemberController.auth,{},{
			headers: {
				RefreshToken : `Bearer ${RefreshToken}`
			}
		});
		newAuthorization = data.accessToken
		RefreshToken = data.refreshToken
		setToken(newAuthorization,RefreshToken,ctx)
		return {newAuthorization}
	  } catch(e:any){
		console.log(e)
	  }
}
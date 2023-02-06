import { GetServerSidePropsContext } from "next";
import { apiClient } from "../utils/Libs/apiClient";
import { TokenController } from "../utils/Libs/requestUrls";
import { setToken } from "../utils/Libs/setToken";

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
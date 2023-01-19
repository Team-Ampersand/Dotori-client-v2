import { useForm } from "react-hook-form";
import { SigninForm } from "../../../../types";
import { AuthInput } from "../../../Common"

const SignInForm = () => {
    const { register } = useForm<SigninForm>();
    return (
        <>
            <AuthInput
                register={register("email")}
                type="text"
                placeholder="아이디"
                maxLength={6}
            />
            <AuthInput
                register={register("password")}
                type="text"
                placeholder="패스워드"
                maxLength={6}
            />
            <button>로그인</button>
        </>
    )
}
export default SignInForm
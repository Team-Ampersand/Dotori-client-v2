import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DotoriLogo } from "assets/svg";
import { signin } from "api/member";
import { SigninForm } from "types";
import { isNotNull } from "utils/isNotNull";
import { AuthInput,AuthButton } from "components/Common"
import { AuthBottomWrapper, AuthFormWrapper } from "components/Common/atoms/Wrappers/AuthWrapper/style";
import * as S from "./style";

const SignInForm = () => {
    const router = useRouter();
    const [isCheck, setIsCheck] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const { register, setValue, watch, handleSubmit } = useForm<SigninForm>({
        defaultValues: {
          email: '@gsm.hs.kr',
        },
    });

    useEffect(() => {
        setIsCheck(isNotNull(watch('email')?.replace('@gsm.hs.kr', '') && watch('password')))
    },[watch().email, watch().password])

    const onInvalid:SubmitErrorHandler<SigninForm> = (data) => {
        if(watch('email') === "@gsm.hs.kr") return toast.error("gsm메일을 입력해주세요")
        else if(data.email?.message) return toast.error(data.email?.message)
        else if(data.password?.message) return toast.error(data.password.message); 
    }

    const onValid:SubmitHandler<SigninForm> = async (data) => {
        if(!data.email || !data.password) return;
        // await signin(data.email, data.password);
        router.push('/');
    }

    return (
        <AuthFormWrapper>
            <DotoriLogo/>
            <S.InputsWrapper>
                <AuthInput
                    register={register("email", {
                        onBlur(){setEmailFocus(false)},
                        required: "GSM메일을 입력해주세요.",
                        pattern: {
                            value: /^s[0-9]{5}@gsm.hs.kr$/,
                            message: "gsm메일형식에 맞게 입력해주세요",
                        },
                    })}
                    type="text"
                    placeholder="@gsm.hs.kr"
                    maxLength={16}
                    labelName="persen"
                    isFocus={emailFocus}
                    handleFocus={() => setEmailFocus(true)}
                    DeleteBtnClick={() => setValue('email', '@gsm.hs.kr')}
                    isValue={isNotNull(watch('email')?.replace('@gsm.hs.kr', ''))}
                />
                <AuthInput
                    register={register("password", {
                        onBlur(){setPasswordFocus(false)},
                        required: "비밀번호를 입력해주세요.",
                        pattern: { 
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                            message: "영문, 숫자, 특수문자포함 8~20자로 입력하세요.",
                        },
                    })}
                    type="password"
                    placeholder="비밀번호"
                    maxLength={20}
                    labelName="lock"
                    isFocus={passwordFocus}
                    handleFocus={()=> setPasswordFocus(true)}
                    DeleteBtnClick={() =>  setValue('password', undefined)}
                    isValue={isNotNull(watch('password'))}
                />
                <Link href={"/"}>비밀번호 찾기</Link>
            </S.InputsWrapper>
            <AuthBottomWrapper>
                <AuthButton text={"로그인"} isCheck={isCheck} onClick={handleSubmit(onValid, onInvalid)}/>
                <p>Doroti가 처음이라면?<Link href={"/signup"}>회원가입</Link></p>
            </AuthBottomWrapper>
            
        </AuthFormWrapper>
    )
}
export default SignInForm
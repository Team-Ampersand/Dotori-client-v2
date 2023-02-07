import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth, authCheck, signup } from "../../../../api/member";
import { SignupForm } from "../../../../types";
import { AuthButton, AuthInput } from "../../../Common";
import { AuthBottomWrapper, AuthFormWrapper } from "../../../Common/atoms/Wrappers/AuthWrapper/style";
import GenderBtn from "../../atoms/GenderBtn";
import StepHeader from "../../molecules/StepHeader";
import * as S from "./style";

const SignUpForm = () => {
    const router = useRouter();
    const [signUpStep, setSignUpStep] = useState('first');
    const [isCheck, setIsCheck] = useState(false);
    const [isAuthCheck, setIsAuthEmailCheck] = useState(false);
    const [isAuth, setIsAuth] = useState(true);

    const [nameFocus, setNameFocus] = useState(false);
    const [stuIdFocus, setStuIdFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [sertiNumFocus, setSertiNumFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passwordCheckFocus, setPasswordCheckFocus] = useState(false);

    const { register, setValue, watch, handleSubmit } = useForm<SignupForm>({
        defaultValues: {
          email: '@gsm.hs.kr',
        },
    })

    const handleCertiEmailBtnClick = async () => {
        if(!isAuthCheck) return;
        else if(!(/^s[0-9]{5}@gsm.hs.kr$/.test(watch().email || ""))) return toast.error("이메일형식이 잘못되었어요.")
        // await auth(watch().email || "");
        toast.success('인증번호가 이메일로 전송되었습니다.');
        setIsAuthEmailCheck(false);
        setIsAuth(false);
    }

    const onInvalid:SubmitErrorHandler<SignupForm> = async (state) => {
        if(state.name?.message || state.stuId?.message) return toast.error(state.name?.message || state.stuId?.message)
        else if(state.password?.message || state.passwordCheck?.message) return toast.error(state.password?.message || state.passwordCheck?.message)
    }

    const onValid:SubmitHandler<SignupForm> = async (state) => {
        if(signUpStep === 'first'){
            setSignUpStep('second');
            setIsCheck(false);
        }
        else if(signUpStep === 'second'){
            // const {data}:any =  await authCheck(state.certiNum || 0);
            // if(data) {
            //     setSignUpStep('last')
            //     setIsCheck(false)
            // }
            setValue('certiNum', undefined)
            setSignUpStep('last')
            setIsCheck(false)
        }else {
            if(state.password !== state.passwordCheck) return toast.error('비밀번호확인이 비밀번호와 맞지 않습니다.')
            // const {data}:any =  await signup(state.email||"", state.password||"", state.name||"", state.stuId||0,state.gender || "남");
            // if(data) router.push('/signin');
            router.push('signin');
        }
    }

    useEffect(() => {
        console.log(watch());
        if(signUpStep === 'first' && watch().name && watch().stuId) return setIsCheck(true);
        else if(signUpStep === 'second' && watch('email')?.replace('@gsm.hs.kr', '') && watch().certiNum && !isAuth) return setIsCheck(true);
        else if(signUpStep === 'second' && watch('email')?.replace('@gsm.hs.kr', '') && isAuth) return setIsAuthEmailCheck(true);
        else if(signUpStep === 'last' && watch().password && watch().passwordCheck) return setIsCheck(true);
        else {setIsCheck(false), setIsAuthEmailCheck(false)}
    },[watch().name, watch().stuId, watch().email, watch().certiNum, watch().password, watch().passwordCheck])

    return(
    <AuthFormWrapper>
        <StepHeader order={signUpStep} />
        {
        signUpStep === 'first' ? (
            <S.InputsWrapper>
                <p>학번</p>
                <AuthInput
                    register={register("stuId", {
                        onBlur(){setStuIdFocus(false)},
                        required: "학번을 입력해주세요.",
                        pattern: {
                            value: /^[0-9]{4}$/,
                            message: "4자리로된 학번을 입력해주세요",
                        },
                    })}
                    type="number"
                    placeholder="학번"
                    isFocus={stuIdFocus}
                    handleFocus={() => setStuIdFocus(true)}
                    DeleteBtnClick={() => setValue('stuId', undefined)}
                    isValue={watch('stuId')? true:false}
                />
                <p>이름</p>
                 <AuthInput
                    register={register("name", {
                        onBlur(){setNameFocus(false)},
                        required: "이름을 입력해주세요.",
                        pattern: {
                            value: /^[가-힣]{2,4}$/,
                            message: "이름형식에 맞게 입력해주세요",
                        },
                    })}
                    type="text"
                    placeholder="이름"
                    maxLength={4}
                    isFocus={nameFocus}
                    handleFocus={() => setNameFocus(true)}
                    DeleteBtnClick={() => setValue('name', undefined)}
                    isValue={watch('name')? true:false}
                />
                <p>성별</p>
                <S.GenderBtnsWrapper>
                    <GenderBtn gender={"남"} myGender={"남"} onClick={() => setValue("gender", "남")}/>
                    <GenderBtn gender={""} myGender={"여"} onClick={() => setValue("gender", "여")}/>
                </S.GenderBtnsWrapper>
            </S.InputsWrapper>

        ):signUpStep === 'second' ? (
            <S.InputsWrapper>
                <p>이메일</p>
                <S.EmailCertiWrapper>
                    <AuthInput
                        register={register("email", {
                            onBlur(){setEmailFocus(false)},
                            required: "이메일을 입력해주세요.",
                            pattern: {
                                value: /^s[0-9]{5}@gsm.hs.kr$/,
                                message: "이메일형식이 잘못되었어요.",
                            },
                        })}
                        type="text"
                        placeholder="@gsm.hs.kr"
                        maxLength={16}
                        isFocus={emailFocus}
                        isEmailAuth={true}
                        handleFocus={() => setEmailFocus(true)}
                        DeleteBtnClick={() => setValue('email', '@gsm.hs.kr')}
                        isValue={watch('email')?.replace('@gsm.hs.kr', '') ? true:false}
                    />
                    <AuthButton width={120} text={"인증하기"} isCheck={isAuthCheck} onClick={handleCertiEmailBtnClick}/>
                 </S.EmailCertiWrapper>
                 <p>인증번호</p>
                 <AuthInput
                    register={register("certiNum", {
                        onBlur(){setSertiNumFocus(false)},
                        required: "인증번호를 입력해주세요.",
                    })}
                    type="number"
                    placeholder="인증번호"
                    isFocus={sertiNumFocus}
                    handleFocus={() => setSertiNumFocus(true)}
                    DeleteBtnClick={() => setValue('certiNum', undefined)}
                    isValue={watch('certiNum')? true:false}
                />
            </S.InputsWrapper>

        ):(
            <S.InputsWrapper>
                <p>비밀번호</p>
                <AuthInput
                    register={register("password", {
                        onBlur(){setPasswordFocus(false)},
                        required: "비밀번호를 입력해주세요.",
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                            message: "영문, 숫자, 특수문자 포함 8~20자로 입력하세요.",
                        },
                    })}
                    type="password"
                    placeholder="영문,숫자,특수문자 포함 8~20자"
                    maxLength={20}
                    isFocus={passwordFocus}
                    handleFocus={()=> setPasswordFocus(true)}
                    DeleteBtnClick={() => setValue('password', undefined)}
                    isValue={watch('password')? true:false}
                />
                <p>비밀번호 확인</p>
                <AuthInput
                    register={register("passwordCheck", {
                        onBlur(){setPasswordCheckFocus(false)},
                        required: "비밀번호확인칸을 입력해주세요.",
                    })}
                    type="password"
                    placeholder="비밀번호확인"
                    maxLength={20}
                    isFocus={passwordCheckFocus}
                    handleFocus={()=> setPasswordCheckFocus(true)}
                    DeleteBtnClick={() => setValue('passwordCheck', undefined)}
                    isValue={watch('passwordCheck')? true:false}
                />
            </S.InputsWrapper>
        )}
        <AuthBottomWrapper>
            <AuthButton text={signUpStep === 'last' ? "회원가입":"다음"} isCheck={isCheck} onClick={handleSubmit(onValid, onInvalid)}/>
            <p>이미 회원이라면?<Link href={"/signin"}>로그인</Link></p>
        </AuthBottomWrapper>
    </AuthFormWrapper>
    );
}

export default SignUpForm;
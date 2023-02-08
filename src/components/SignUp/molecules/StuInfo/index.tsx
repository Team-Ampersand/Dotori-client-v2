import { AuthButton, AuthInput } from "components/Common";
import { AuthBottomWrapper, AuthFormWrapper } from "components/Common/atoms/Wrappers/AuthWrapper/style";
import GenderBtn from "components/SignUp/atoms/GenderBtn";
import { InputsWrapper } from "components/SignUp/atoms/Wrapper/style";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { signUpObject, signUpStep } from "recoilAtoms/recoilAtomContainer";
import { SignupForm } from "types";
import { isNotNull } from "utils/isNotNull";
import * as S from "./style";

const StuInfo = () => {    
    const { register, setValue, watch, handleSubmit} = useForm<SignupForm>()
    const [isCheck, setIsCheck] = useState(false);
    const [SignUpObject, setSignUpObject] = useRecoilState(signUpObject);
    const [, setSignUpStep] = useRecoilState(signUpStep);

    useEffect(() => {
        setIsCheck(isNotNull(watch('name') && watch('stuId')))
    },[watch(['name', 'stuId'])])

    const onInvalid:SubmitErrorHandler<SignupForm> = (state) => toast.error(state.stuId?.message || state.name?.message)

    const onValid:SubmitHandler<SignupForm> = async (state) => {
        setSignUpObject({...SignUpObject, name:state.name, stuId:state.stuId, gender:state.gender})
        setSignUpStep('second');
    }

    return (
        <>
            <InputsWrapper>
                <p>이름</p>
                 <AuthInput
                    register={register("name", {
                        required: "이름을 입력해주세요.",
                        pattern: {
                            value: /^[가-힣]{2,4}$/,
                            message: "이름형식에 맞게 입력해주세요",
                        },
                    })}
                    type="text"
                    placeholder="이름"
                    maxLength={4}
                    DeleteBtnClick={() => setValue('name', undefined)}
                    isValue={isNotNull(watch('name'))}
                />
                 <p>학번</p>
                <AuthInput
                    register={register("stuId", {
                        required: { 
                            value: true, 
                            message: "학번을 입력해주세요" 
                          },
                        pattern: {
                            value: /^[0-9]{4}$/,
                            message: "4자리로된 학번을 입력해주세요",
                        },
                    })}
                    type="number"
                    placeholder="학번"
                    DeleteBtnClick={() => setValue('stuId', undefined)}
                    isValue={isNotNull(watch('stuId'))}
                />
            <p>성별</p>
            <S.GenderBtnsWrapper>
                    <GenderBtn gender={"남"} myGender={"남"} onClick={() => setValue("gender", "남")}/>
                    <GenderBtn gender={""} myGender={"여"} onClick={() => setValue("gender", "여")}/>
                </S.GenderBtnsWrapper>
            </InputsWrapper>
            <AuthBottomWrapper>
                <AuthButton text={"다음"} isCheck={isCheck} onClick={handleSubmit(onValid, onInvalid)}/>
                <p>이미 회원이라면?<Link href={"/signin"}>로그인</Link></p>
            </AuthBottomWrapper>
        </>
    )
}

export default StuInfo
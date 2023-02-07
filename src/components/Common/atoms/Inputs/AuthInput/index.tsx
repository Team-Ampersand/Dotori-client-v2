import { LockIcon, PersonIcon, XmarkIcon } from "../../../../../../public/svg";
import { Palette } from "../../../../../styles/globals";
import { AuthInputProps } from "../../../../../types";
import * as S from "./style";

const AuthInput = ({
    register,
    type,
    placeholder,
    maxLength,
    labelName,
    isFocus,
    isValue,
    handleFocus,
    DeleteBtnClick,
    isEmailAuth,
  }: AuthInputProps) => { 
    return (
        <S.AuthInput isRabel={labelName? true:false} isEmailAuth={isEmailAuth? true:false}>
            <label>
            {
                labelName === "persen" ? <PersonIcon color={isFocus ? `${Palette.NEUTRAL_N10}` : `${Palette.NEUTRAL_N30}`}/> : 
                labelName === "lock" ? <LockIcon color={isFocus ? `${Palette.NEUTRAL_N10}` : `${Palette.NEUTRAL_N30}`}/> : ""
            }
            <input
                placeholder={placeholder}
                {...register}
                type={type}
                maxLength={maxLength}
                onFocus={handleFocus}
            />
            </label>
            {
                isValue && <XmarkIcon onClick={DeleteBtnClick}  color={`${Palette.NEUTRAL_N30}`}/>
            }
        </S.AuthInput>
    );
}

export default AuthInput
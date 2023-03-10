import { LockIcon, PersonIcon, XmarkIcon } from "assets/svg";
import { useState } from "react";
import { Palette } from "styles/globals";
import { AuthInputProps } from "types";
import { isNotNull } from "utils/isNotNull";
import * as S from "./style";

const AuthInput = ({
    register,
    type,
    placeholder,
    maxLength,
    labelName,
    isValue,
    DeleteBtnClick,
    isEmailAuth,
    onSubmit,
    readOnly,
  }: AuthInputProps) => {
    const [isFocus, setIsFocus] = useState(false);
    const iconColor = isFocus ? `${Palette.NEUTRAL_N10}` : `${Palette.NEUTRAL_N30}`;
    return (
        <S.AuthInput isRabel={isNotNull(labelName)} isEmailAuth={isNotNull(isEmailAuth)} onSubmit={onSubmit}>
            <label>
            {
                labelName === "persen" ? <PersonIcon color={iconColor}/> : 
                labelName === "lock" ? <LockIcon color={iconColor}/> : ""
            }
            <input
                readOnly={readOnly}
                placeholder={placeholder}
                {...register}
                type={type}
                maxLength={maxLength}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                autoComplete="off"
            />
            </label>
            {
                isValue && <XmarkIcon onClick={DeleteBtnClick}/>
            }
        </S.AuthInput>
    );
}

export default AuthInput
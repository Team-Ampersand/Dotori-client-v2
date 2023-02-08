import { LockIcon, PersonIcon, XmarkIcon } from "assets/svg";
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
    isFocus,
    isValue,
    handleFocus,
    DeleteBtnClick,
    isEmailAuth,
  }: AuthInputProps) => {
    const iconColor = isFocus ? `${Palette.NEUTRAL_N10}` : `${Palette.NEUTRAL_N30}`;
    return (
        <S.AuthInput isRabel={isNotNull(labelName)} isEmailAuth={isNotNull(isEmailAuth)}>
            <label>
            {
                labelName === "persen" ? <PersonIcon color={iconColor}/> : 
                labelName === "lock" ? <LockIcon color={iconColor}/> : ""
                
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
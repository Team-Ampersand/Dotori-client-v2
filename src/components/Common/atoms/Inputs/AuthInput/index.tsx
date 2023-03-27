import { EyeIcon, EyeSelectedIcon, LockIcon, PersonIcon, XmarkIcon } from "assets/svg";
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
    const [seePassword, setSeePassword] = useState(false);
    const iconColor = isFocus ? `${Palette.NEUTRAL_N10}` : `${Palette.NEUTRAL_N30}`;

    const handleEyeIconClick = () => setSeePassword(pre => !pre);

    return (
        <S.AuthInput isRabel={isNotNull(labelName)} isEmailAuth={isNotNull(isEmailAuth)} onSubmit={onSubmit}>
            <label>
            {
                labelName === "persen" ? <PersonIcon color={iconColor} className='frontIcon'/> : 
                labelName === "lock" && <LockIcon color={iconColor} className='frontIcon'/>
            }
            <input
                readOnly={readOnly}
                placeholder={placeholder}
                {...register}
                type={seePassword ? 'text' : type}
                maxLength={maxLength}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                autoComplete="off"
            />
            {
                isValue && type === 'password' && 
                (
                    seePassword ? 
                    <EyeIcon onClick={handleEyeIconClick} color={iconColor}/> : 
                    <EyeSelectedIcon onClick={handleEyeIconClick} color={iconColor}/>
                )
            }
            {
                isValue && type !== 'password' && 
                <XmarkIcon onClick={DeleteBtnClick}/>
            }
            </label>

        </S.AuthInput>
    );
}

export default AuthInput
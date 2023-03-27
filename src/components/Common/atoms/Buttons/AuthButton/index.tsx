import { Palette } from "styles/globals";
import { AuthButtonProps } from "types";
import * as S from "./style";

const AuthButton = ({
    text,
    isCheck,
    onClick,
    width,
    type,
  }: AuthButtonProps) => (
        <S.AuthButton 
            type={type}
            onClick={onClick} 
            width={width || 380}
            style={{
                background: isCheck? `${Palette.PRIMARY_P10}`:`${Palette.PRIMARY_P30}`,
            }}
        >
            {text}
        </S.AuthButton>
);

export default AuthButton
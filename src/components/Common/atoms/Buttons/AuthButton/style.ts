import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { AuthButtonStyleProps } from "types";

export const AuthButton = styled.button`
    width: ${(props:AuthButtonStyleProps) => props.width}px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Palette.PRIMARY_P30};
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border: none;

    @media (max-width: 420px) {
        width:  ${(props:AuthButtonStyleProps) => props.width === 380 ? "90vw" : "30vw"};
        margin: 0 auto;
    }
`;
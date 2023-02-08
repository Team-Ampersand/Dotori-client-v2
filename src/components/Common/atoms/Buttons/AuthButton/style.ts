import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const AuthButton = styled.div`
    width: 380px;
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
`;
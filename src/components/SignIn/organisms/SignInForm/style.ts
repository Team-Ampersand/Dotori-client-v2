import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const SignInInputsWrapper = styled.div`
    height: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    margin: 40px 0;

    a{
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: ${Palette.NEUTRAL_N20};
    }
`;

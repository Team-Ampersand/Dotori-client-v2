import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 50px;
    padding: 3px 0;
    gap: 20px;
    grid-area: 프로필;

`;

export const ProfileBox = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Palette.BACKGROUND_CARD};
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    padding: 24px;
    gap: 15px;
    border-radius: 16px;

    svg{
        cursor: pointer;
    }
`;

export const StudentInfo = styled.div`
    width: 65%;
    height: 70px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 16px;
`;

export const Name = styled.span`
    color: ${Palette.NEUTRAL_N10};
`;

export const StudId = styled.span`
    color: ${Palette.NEUTRAL_N30};
`;
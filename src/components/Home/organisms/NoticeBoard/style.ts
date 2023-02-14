import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const NoticeBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 25px 0 25px;
    grid-area: 공지사항;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;
    filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.04));

    p{
        font-weight: 700;
        font-size: 18px;
        color: ${Palette.NEUTRAL_N10};
    }
`;

export const NoticeList = styled.div`
    display: flex;
    height: 490px;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    gap: 15px;
    overflow-y: auto;
`;

export const DateLine = styled.div`
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N20};

    hr{
        border : 1px solid ${Palette.NEUTRAL_N40};
        width: 100px;
        margin: 0;
    }
`;
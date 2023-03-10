import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const NoticeBoardWrapper = styled.div`
    height: 54.5vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    grid-area: 공지사항;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;
    filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.04));

    p{
        font-weight: 700;
        font-size: 18px;
        color: ${Palette.NEUTRAL_N10};
        margin: 10px;
    }

    @media (max-width: 950px) {
        display: none;
	}
`;

export const NoticeList = styled.div`
    max-width: 370px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    overflow-y: auto;
    margin: 0 auto;
    padding-right: 10px;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Palette.NEUTRAL_N30};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${Palette.NEUTRAL_N50}
    }
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
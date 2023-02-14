import styled from "@emotion/styled";
import { Palette } from "styles/globals";


export const TimeBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
    gap: 20px;
    grid-area: 시간;
`;

export const BoardTop = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    span{
        font-weight: 700;
        font-size: 32px;
        color: ${Palette.NEUTRAL_N10};
    }
`

export const TodayDate = styled.div`
    width: 135px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N20};
    background: ${Palette.BACKGROUND_CARD};
`;

export const BoardBottom = styled.div`
    position: relative;
    height: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 70px;
    gap: 10px;
    color: white;
    font-weight: 600;
    font-size: 30px;
    background: radial-gradient(198.73% 2092.94% at 17.26% 9.06%, #5966E9 0%, #C955FF 94.62%, #F2B5B5 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    border-radius: 16px;

    p{
        padding-left: 10px;
    }
`;

export const CurrentTime = styled.p`
    width: 500px;
    font-weight: 800;
    font-size: 65px;
    letter-spacing: 5px;
`;

export const DotoriImgBox = styled.div`
    position: absolute;
    right: 37px;
    bottom: 5px;
`;
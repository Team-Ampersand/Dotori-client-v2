import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const TimeBoardWrapper = styled.div`
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 5.55vh;
    grid-area: 시간;

    @media (max-width: 950px) {
        height: 262px;
	}

    @media (max-width: 420px) {
        height: 170px;
        margin-top: 15px;
        gap: 20px;
	}

`;

export const BoardTop = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${Palette.BACKGROUND_BG};
    padding: 10px 0;

    @media (max-width: 420px) {
        position: fixed;
        top: 0;
        width: 90vw;
        z-index: 1;
	}
`;

export const BoardTopLeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    position: relative;

    span{
        font-weight: 700;
        font-size: 32px;
        color: ${Palette.NEUTRAL_N10};
    }

    @media (max-width: 420px) {
        display: none;
    }
`;

export const BoardTopRightWrapper = styled.div`
    display: none;
    gap: 15px;
    position: relative;

    .defaultProfileImg{
        cursor: pointer;
        border-radius: 100%;
    }

    @media (max-width: 950px) {
        display: flex;
	}

    @media (max-width: 420px) {
        .defaultProfileImg{
            width: 32px;
            height: 32px;
            border-radius: 100%;
        }
    }
`;

export const MobileTitle = styled.div`
    display: none;
    align-items: center;
    gap: 15px;
    
    span{
        color: ${Palette.PRIMARY_P10};
        font-weight: 900;
        font-size: 22px;
    }
    svg{
        cursor: pointer;
    }

    @media (max-width: 420px) {
        display: flex ;
    }
`;

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
    height: 27vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 4.5vw;
    gap: 10px;
    color: white;
    font-weight: 600;
    font-size: 30px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

    span{
        padding-left: 10px;
        font-weight: 600;
        font-size: 24px;
        z-index: 0;
    }

    @media (max-width: 950px) {
        height: 240px;
        padding: 0 30px;
        span{
            padding-left: 5px;
            font-size: 20px;
        }
	}
		
    @media (max-width: 420px) {
        height: 115px;
        margin-top: 50px;
        span{
            padding-left: 0px;
            font-size: 14px;
        }
	}
`;

export const ShadowImgBox = styled.div`
    position: absolute;
    right: -5.7vw;
    bottom: -6vh;
    width: 55vh;
    height: 52vh;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 1130px) {
        right: -3.7vw;
        bottom: -1vh;
        width: 45vh;
        height: 42vh;
	}
    @media (max-width: 950px) {
        display: none;
    }

`;

export const CurrentTime = styled.p`
    width: 500px;
    font-weight: 800;
    font-size: 64px;
    letter-spacing: 4.5px;
    z-index: 0;

    @media (max-width: 1130px) {
        width: 400px;
        font-size: 50px;
        letter-spacing: 4px;
	}
    @media (max-width: 650px) {
        width: 240px;
		font-size: 34px;
        letter-spacing: 2px;
	}	
    @media (max-width: 530px) {
        width: 210px;
		font-size: 24px;
        letter-spacing: 2px;
	}
`;

export const DotoriImgBox = styled.div`
    position: absolute;
    right: 1.5vw;
    bottom: 2vh;
    width: 34vh;
    height: 34vh;
    z-index: 1;

    @media (max-width: 1260px) {
        width: 28vh;
        height: 28vh;
        right: 1vw;
        bottom: 3vh;
	}

    @media (max-width: 950px) {
        width: 240px;
        height: 250px;
        right: -65px;
        top: 17px;
        img {
            clip: rect( 0, 175px, 185px, 0);
            clip-path: ellipse(180px 175px at 20% 20%);
        }
	}

		
    @media (max-width: 420px) {
        width: 127px;
        height: 137px;
        right: -22px;
        top: 10px;
        z-index: 0;
        img {
            clip: rect( 0, 105px, 105px, 0);
            clip-path: ellipse(100px 109px at 22% 21%);
        }
	}
`;
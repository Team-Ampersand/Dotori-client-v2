import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { applyStyleProps } from "types";

export const ApplyBoxWrapper = styled.div`
    width: 30vw;
    height: 25.65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 25px;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;

    @media (max-width: 950px) {
        width: 100%;
	}
    		
    @media (max-width: 420px) {
        height: 220px;
	}
`;

export const ApplyBoardHeader = styled.div`
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${Palette.NEUTRAL_N10};
    font-weight: 700;
    font-size: 18px;

    a{
        text-decoration: none;
        color: ${Palette.NEUTRAL_N20};
        font-weight: 500;
        font-size: 14px;
    }

    @media (max-width: 950px) {
        max-width: 100%;
	}
		
    @media (max-width: 420px) {
        font-size: 16px;
        span{
            display: none;
        }
	}
`;

export const ApplyCountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: ${Palette.NEUTRAL_N10};

    P{
        font-weight: 700;
        font-size: 44px;
    }
		
    @media (max-width: 420px) {
        P{
            font-size: 32px;
        }
	}

`;

export const CountLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ApplyLine = styled.div`
    border-radius: 4px;
    height: 18px;
`;

export const NotApplyLine = styled.div`
    background: ${Palette.NEUTRAL_N50};
    border-radius: 4px;
    height: 18px;
`;

export const ApplyBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    p{
        font-weight: 500;
        font-size: 11px;
        color: ${Palette.NEUTRAL_N20};
    }

    @media (max-width: 420px) {
        P{
            display: none;
        }
	}

`;

export const ApplyDesc = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ApplyBtn = styled.div`
    width: 100px;
    height: 4.2vh;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color : ${(props:applyStyleProps) => props.applyStatus === "????????????" ? `${Palette.NEUTRAL_N20}` : `white` } ;
    background: ${(props:applyStyleProps) => props.applyStatus === "????????????" ? `` : 
                props.applyStatus === "????????????" ? `${Palette.PRIMARY_P30}` : `${Palette.PRIMARY_P10}` } ;
    border: ${(props:applyStyleProps) => props.applyStatus === "????????????" ? `1px solid ${Palette.NEUTRAL_N20}` : `` } ;
    
    @media (max-width: 420px) {
        width: 100%;
        height: 43px;
	}
`;
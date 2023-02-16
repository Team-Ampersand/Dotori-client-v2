import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { applyStyleProps } from "types";

export const ApplyBoxWrapper = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 25px;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;
`;

export const ApplyBoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${Palette.NEUTRAL_N10};
    font-weight: 700;
    font-size: 16px;

    a{
        text-decoration: none;
        color: ${Palette.NEUTRAL_N20};
        font-weight: 500;
        font-size: 14px;
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

`;

export const CountLine = styled.div`
    width: 450px;
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
        font-size: 12px;
        color: ${Palette.NEUTRAL_N20};
    }
`;

export const ApplyDesc = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ApplyBtn = styled.div`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color : ${(props:applyStyleProps) => props.applyStatus === "신청취소" ? `${Palette.NEUTRAL_N20}` : `white` } ;
    background: ${(props:applyStyleProps) => props.applyStatus === "신청취소" ? `` : 
                props.applyStatus === "신청불가" ? `${Palette.PRIMARY_P30}` : `${Palette.PRIMARY_P10}` } ;
    border: ${(props:applyStyleProps) => props.applyStatus === "신청취소" ? `1px solid ${Palette.NEUTRAL_N20}` : `` } ;
    
`;
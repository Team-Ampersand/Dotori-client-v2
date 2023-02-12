import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const NoticeItemWrapper = styled.div`
    width: 396px;
    height: 95px;
    border-radius: 12px;
    background: ${Palette.NEUTRAL_N50};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 12px;
    color: ${Palette.NEUTRAL_N20};
`;

export const ItemTopWrapper = styled.div`
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Writer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N10};
`;

export const WriterDot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const ItemDescWrapper = styled.pre`
    height: 35px;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`;
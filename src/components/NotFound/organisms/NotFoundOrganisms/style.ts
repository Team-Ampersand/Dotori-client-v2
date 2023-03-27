import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const NotFoundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 30px 12vh 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const NotFoundImgWrapper = styled.div`
    position: relative;
    img{
        width: 50px;
    }
`;

export const NotFoundDecs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2{
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        color: ${Palette.NEUTRAL_N10};
    }
    h5{
        text-align: center;
        font-weight: 400;
        font-size: 14px;
        color: ${Palette.NEUTRAL_N20};
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 420px) {
        h5{
            font-size: 13px;
        }
    }
`;

export const HomeUrlBtn = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Palette.PRIMARY_P10};
    color: white;
    border: none;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    filter: drop-shadow(0px 12px 32px rgba(111, 122, 236, 0.08));
    border-radius: 8px;
`;
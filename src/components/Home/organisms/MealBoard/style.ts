import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const MealBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: 급식;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;
    padding: 20px;

    span{
        font-weight: 700;
        font-size: 18px;
        color: ${Palette.NEUTRAL_N10};
    }
`;

export const MealControlBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MealHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
`;

export const ControlDate = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button{
        width: 25px;
        height: 25px;
        background: ${Palette.NEUTRAL_N50};
        color: ${Palette.NEUTRAL_N20};
        border-radius: 11px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        border: none;
        font-size: 15px;
    }
    span{
        color:${Palette.NEUTRAL_N20};
        font-weight: 500;
        font-size: 16px;
    }
`;

export const HourMealChooseBox = styled.div`
    position: relative;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${Palette.NEUTRAL_N50};
    border-radius: 12px;

    div{
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${Palette.NEUTRAL_N30};
        font-weight: 700;
        font-size: 16px;
        border-radius: 12px;
        cursor: pointer;
    }
`;

export const SelectBtn = styled.button`
    position: absolute;
    width: 32%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 0.25s ease-in-out;

    border: none;
    color: ${Palette.NEUTRAL_N10};
    background: ${Palette.BACKGROUND_CARD};
    font-weight: 700;
    font-size: 16px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
`;

export const MealList = styled.div`
    height: 500px;
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0 30px 30px;
    background: ${Palette.NEUTRAL_N50};
    border-radius: 8px;
`;

export const Meal = styled.div`
    color: ${Palette.NEUTRAL_N10};
    font-weight: 700;
    font-size: 18px;
`;
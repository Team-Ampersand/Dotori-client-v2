import styled from "@emotion/styled";
import { Palette } from "styles/globals";


export const ModalHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${Palette.NEUTRAL_N10};
    font-weight: 700;
    font-size: 18px;
    padding: 6px 10px;

    svg{
        width: 19px;
        cursor: pointer;
    }
`;
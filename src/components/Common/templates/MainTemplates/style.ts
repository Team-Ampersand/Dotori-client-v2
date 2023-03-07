import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const MainTemplates = styled.div`
    width: 100%;
    height: 100vh;
    background: ${Palette.BACKGROUND_BG};
    display: flex;

    @media (max-width: 420px) {
        flex-direction: column-reverse;
	}
`;
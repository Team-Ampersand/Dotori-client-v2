import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const SideBarWrapper = styled.aside`
    width: 240px;
    height: 100vh;
    background: ${Palette.BACKGROUND_CARD};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    
    svg{
        width: 160px;
        height:66px;
    }
    a{
        text-decoration: none;
    }
`;

export const LogoutButtonWrapper = styled.div`
    width: 200px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
	padding: 0 20px;
	gap: 20px;
	border-radius: 16px;
	cursor: pointer;
`;

export const DototiTitle = styled.div`
    width: 146px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg{
        width: 33px;
    }
    span{
        color: ${Palette.PRIMARY_P10};
        font-weight: 900;
        font-size: 26px;
    }

`;
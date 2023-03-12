import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { SidebarStyleProps } from 'types';

export const NavigationDrawerWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
    gap: 10px;
    background: ${Palette.BACKGROUND_CARD};
    z-index: 9;
`;

export const NavigationDrawerTop = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    svg{
        width: 40px;
    }
`;

export const DototiTitle = styled.div`
    width: 175px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;

    svg{
        width: 40px;
    }
    span{
        color: ${Palette.PRIMARY_P10};
        font-weight: 900;
        font-size: 30px;
    }
`;

export const NavigationDrawerList = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

export const NavigationDrawerItem = styled.div`
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
	svg {
		width: 30px;
		height: 30px;
	}

    color: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `${Palette.PRIMARY_P10}` : `${Palette.NEUTRAL_N30}`)};
	background: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `${Palette.PRIMARY_P20}` : 'transparent')};

	&:hover{
		transition: all 0.3s ease-in;
		background: ${(props:SidebarStyleProps) => (props.isCurrentRouter ? `` : `${Palette.BACKGROUND_BG}`)};
	}
`;

export const DrawerItemTitle = styled.div`
	font-weight: 500;
    font-size: 18px;
    color: ${Palette.NEUTRAL_N30};
`;
import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const HomeTemplates = styled.div`
    width: calc(100% - 240px);
    height: 100vh;
    background: ${Palette.BACKGROUND_BG};
    display: grid;
    gap: 1.5vw;
    padding: 0 50px 50px 50px;
    grid-template-areas:
		"시간    시간    프로필"
		"시간    시간    프로필"
		"시간    시간    급식"
		"공지사항 자습신청 급식"
		"공지사항 자습신청 급식"
		"공지사항 안마의자 급식"
		"공지사항 안마의자 급식"
`;
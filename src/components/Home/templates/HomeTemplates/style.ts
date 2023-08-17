import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const HomeTemplates = styled.div`
  width: calc(100% - 240px);
  height: 100dvh;
  background: ${Palette.BACKGROUND_BG};
  display: grid;
  gap: 2.5dvh;
  padding: 0 3vw 3dvh 3vw;
  overflow-y: auto;
  overflow-x: hidden;
  grid-template-areas:
    '시간    시간    프로필'
    '시간    시간    프로필'
    '시간    시간    급식'
    '공지사항 자습신청 급식'
    '공지사항 자습신청 급식'
    '공지사항 안마의자 급식'
    '공지사항 안마의자 급식';

  @media (max-width: 1634px) {
    padding: 0 2.5vw 2.5dvh 2.5vw;
    width: 100%;
  }

  @media (max-width: 950px) {
    grid-template-areas:
      '시간'
      '시간'
      '시간'
      '자습신청'
      '자습신청'
      '안마의자'
      '안마의자'
      '급식'
      '급식';
  }
  @media (max-width: 420px) {
    padding: 0 5vw 3dvh 5vw;
    gap: 1.5dvh;
  }
`;

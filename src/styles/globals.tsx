import React from 'react';
import { Global, css } from '@emotion/react';

const lightTheme = `
  --PRIMARY_P10 : #6F7AEC;
  --PRIMARY_P20 : #EEF0FD;
  --PRIMARY_P30 : #C5CAF7;
  --NEUTRAL_N10 : #CDCDD5;
  --NEUTRAL_N20 : #656B80;
  --NEUTRAL_N30 : #BBBBCC;
  --NEUTRAL_N40 : #E2E2EE;
  --NEUTRAL_N50 : #F2F2F4;
  --BACKGROUND_BG : #F7F7F9;
  --BACKGROUND_CARD : #F7F7F9;
  --SYSTEM_ERROR : #D84D4D;
  --SYSTEM_POSITIVE : #2E8546;
  --SUB_GREEN : #9BDA93;
  --SUB_YELLOW : #EEE170;
  --SUB_RED : #F3A199;
`;

const darkTheme = `
  --PRIMARY_P10 : #5966E9;
  --PRIMARY_P20 : #141841;
  --PRIMARY_P30 : #24295D;
  --NEUTRAL_N10 : #CDCDD5;
  --NEUTRAL_N20 : #818198;
  --NEUTRAL_N30 : #626274;
  --NEUTRAL_N40 : #292930;
  --NEUTRAL_N50 : #1E1E26;
  --BACKGROUND_BG : #1F1E2B;
  --BACKGROUND_CARD : #17161F;
  --SYSTEM_ERROR : #626274
  --SYSTEM_POSITIVE : #5EFF8B
  --SUB_GREEN : #79CE6F
  --SUB_YELLOW : #E9D844
  --SUB_RED : #EE786D
`;

const cssVar = (name: string) => `var(--${name})`;

export const Palette = {
  PRIMARY_P10: cssVar('PRIMARY_P10'),
  PRIMARY_P20: cssVar('PRIMARY_P20'),
  PRIMARY_P30: cssVar('PRIMARY_P30'),
  NEUTRAL_N10: cssVar('NEUTRAL_N10'),
  NEUTRAL_N20: cssVar('NEUTRAL_N20'),
  NEUTRAL_N30: cssVar('NEUTRAL_N30'),
  NEUTRAL_N40: cssVar('NEUTRAL_N40'),
  NEUTRAL_N50: cssVar('NEUTRAL_N50'),
  SYSTEM_ERROR: cssVar('SYSTEM_ERROR'),
  SYSTEM_POSITIVE: cssVar('SYSTEM_POSITIVE'),
  SUB_GREEN: cssVar('SUB_GREEN'),
  SUB_YELLOW: cssVar('SUB_YELLOW'),
  SUB_RED: cssVar('SUB_RED'),
  BLACK: '#000000',
  WHITE: '#ffffff'
};

const style = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
input:focus::-webkit-input-placeholder{
  color:transparent;
}
button {
    cursor: pointer;
    outline: none;
}

body {
    ${lightTheme};
}
  
@media (prefers-color-scheme: dark) {
  body {
    ${darkTheme}
  }
}
body[data-theme='light'] {
  ${lightTheme};
}
body[data-theme='dark'] {
  ${darkTheme};
}
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
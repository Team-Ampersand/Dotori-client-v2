import { Palette } from 'styles/globals';
import { darkMode } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';

const CupIcon = () => {
  const [darkModeState] = useRecoilState(darkMode);

  return (
    <svg
      width="88"
      height="150"
      viewBox="0 0 88 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.0008 97.125C84.0008 115.484 64.3602 127.125 50.0008 127.125C35.6414 127.125 36.0008 121.484 36.0008 107.125C36.0008 92.7656 47.6414 81.125 62.0008 81.125C76.3602 81.125 84.0008 86.7656 84.0008 97.125Z"
        stroke={darkModeState === 'light' ? '#656B80' : '#CDCDD5'}
        strokeWidth="8"
      />
      <path
        d="M4 85.125C4 78.4976 9.37258 73.125 16 73.125H52C58.6274 73.125 64 78.4976 64 85.125V133.125C64 139.752 58.6274 145.125 52 145.125H16C9.37258 145.125 4 139.752 4 133.125V85.125Z"
        fill={Palette.BACKGROUND_BG}
        stroke={darkModeState === 'light' ? '#656B80' : '#CDCDD5'}
        strokeWidth="8"
      />
      <path
        d="M37.1288 4.875C32 6 7.34203 13.2312 53.0421 24.5046C76.9162 30.394 -17 31.5 19.2605 40.2083C27.3967 42.1623 58.5 46.5 37.1287 57.875"
        stroke={Palette.NEUTRAL_N30}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CupIcon;

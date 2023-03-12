import { Palette } from 'styles/globals';

const TrashCan = () => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 18.4998V7.49976H15V18.4998C15 19.6043 14.1046 20.4998 13 20.4998H5C3.89543 20.4998 3 19.6043 3 18.4998Z"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M7 10.9998V16.9998"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 10.9998V16.9998"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4.5H7M17 4.5H11M7 4.5V3.5C7 2.39543 7.89543 1.5 9 1.5V1.5C10.1046 1.5 11 2.39543 11 3.5V4.5M7 4.5H11"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashCan;

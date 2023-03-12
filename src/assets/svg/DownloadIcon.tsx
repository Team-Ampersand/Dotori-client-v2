import { Palette } from 'styles/globals';

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 12.5V16.5C1 17.0523 1.44772 17.5 2 17.5H16C16.5523 17.5 17 17.0523 17 16.5V12.5"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10.3581L9 13.5M9 13.5L12 10.5M9 13.5L9.09677 1.5"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;

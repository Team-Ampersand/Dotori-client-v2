import { Palette } from 'styles/globals';

const TrashcanIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 19.5V8.5H18V19.5C18 20.6046 17.1046 21.5 16 21.5H8C6.89543 21.5 6 20.6046 6 19.5Z"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 12V18"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12V18"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 5.5H10M20 5.5H14M10 5.5V4.5C10 3.39543 10.8954 2.5 12 2.5V2.5C13.1046 2.5 14 3.39543 14 4.5V5.5M10 5.5H14"
        stroke={Palette.SYSTEM_ERROR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashcanIcon;

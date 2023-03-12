import { Palette } from 'styles/globals';

const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 5.5L15 5.5"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 5.5H19"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="17"
        cy="5.5"
        r="2"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
      />
      <path
        d="M3 19.5L15 19.5"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 19.5H19"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="17"
        cy="19.5"
        r="2"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
      />
      <path
        d="M21 12.5L9 12.5"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12.5H5"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(-1 0 0 1 9 10.5)"
        stroke={Palette.NEUTRAL_N20}
        strokeWidth="1.5"
      />
    </svg>
  );
};
export default FilterIcon;

import { Palette } from 'styles/globals';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="9"
        cy="9"
        r="8"
        stroke={Palette.NEUTRAL_N30}
        strokeWidth="2"
      />
      <path
        d="M18.2426 18.2426L15 15"
        stroke={Palette.NEUTRAL_N30}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;

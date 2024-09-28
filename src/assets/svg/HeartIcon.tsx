import { Palette } from 'styles/globals';

interface HeartIconProps {
  heartState: boolean;
}

const HeartIcon = ({ heartState }: HeartIconProps) => {
  const fillColor = heartState ? `${Palette.PRIMARY_P10}` : 'none';
  const strokeColor = heartState ? `${Palette.PRIMARY_P10}` : '#656B80';

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.667 8.25C21.667 5.765 19.568 3.75 16.979 3.75C15.044 3.75 13.382 4.876 12.667 6.483C11.952 4.876 10.29 3.75 8.35399 3.75C5.76699 3.75 3.66699 5.765 3.66699 8.25C3.66699 15.47 12.667 20.25 12.667 20.25C12.667 20.25 21.667 15.47 21.667 8.25Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
    </svg>
  );
};

export default HeartIcon;

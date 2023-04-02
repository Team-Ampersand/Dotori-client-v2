import { Palette } from 'styles/globals';

const EditPencilIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0607 4.36602L13.8891 1.5376L17.4246 5.07313L14.5962 7.90156M11.0607 4.36602L4.69671 10.73L4.34316 14.6191L8.23224 14.2655L14.5962 7.90156M11.0607 4.36602L14.5962 7.90156"
        stroke={Palette.NEUTRAL_N10}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 18.4621L1.5 18.3867"
        stroke={Palette.NEUTRAL_N10}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditPencilIcon;

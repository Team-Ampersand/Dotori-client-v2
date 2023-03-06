const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M2.75 7.5C2.75 5.70508 4.20508 4.25 6 4.25H18C19.7949 4.25 21.25 5.70508 21.25 7.5V18C21.25 19.7949 19.7949 21.25 18 21.25H6C4.20507 21.25 2.75 19.7949 2.75 18V7.5Z"
        stroke="#656B80"
        strokeWidth="1.5"
      />
      <rect x="15" y="15" width="3" height="3" rx="1" fill="#656B80" />
      <path d="M3 9H21" stroke="#656B80" strokeWidth="1.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2C7.55228 2 8 2.36937 8 2.825V4.29167H6V2.825C6 2.36937 6.44772 2 7 2Z"
        fill="#656B80"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2C17.5523 2 18 2.36937 18 2.825V4.29167H16V2.825C16 2.36937 16.4477 2 17 2Z"
        fill="#656B80"
      />
    </svg>
  );
};

export default CalendarIcon;

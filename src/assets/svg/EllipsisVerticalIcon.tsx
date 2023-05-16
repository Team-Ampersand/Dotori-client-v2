const EllipsisVerticalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="5" r="2" fill="#BBBBCC" />
      <circle cx="12" cy="12" r="2" fill="#BBBBCC" />
      <circle cx="12" cy="19" r="2" fill="#BBBBCC" />
    </svg>
  );
};

export default EllipsisVerticalIcon;

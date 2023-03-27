import { Palette } from 'styles/globals';

const FemaleIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="8"
		height="12"
		viewBox="0 0 8 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7.25 4.5C7.25 6.29493 5.79493 7.75 4 7.75C2.20507 7.75 0.75 6.29493 0.75 4.5C0.75 2.70508 2.20507 1.25 4 1.25C5.79493 1.25 7.25 2.70508 7.25 4.5Z"
			stroke={Palette.NEUTRAL_N10}
			strokeWidth="1.5"
		/>
		<path
			d="M4 11V8M3 9.8H5"
			stroke={Palette.NEUTRAL_N10}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default FemaleIcon;

import { Palette } from 'styles/globals';

const CapIcon = () => {
	return (
		<svg
			width="128"
			height="103"
			viewBox="0 0 128 103"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M122.496 31.6118V63.6118"
				stroke={Palette.NEUTRAL_N30}
				strokeWidth="8"
				strokeLinecap="round"
			/>
			<path
				d="M24.0002 42.2926C24.0002 38.2327 28.0008 35.3825 31.838 36.7086C52.6749 43.9094 75.3256 43.9094 96.1625 36.7086C99.9997 35.3825 104 38.2327 104 42.2926V75.7487C104 83.1867 99.2839 89.8066 92.2538 92.2361C73.9492 98.5618 54.0513 98.5618 35.7467 92.2361C28.7166 89.8066 24.0002 83.1867 24.0002 75.7487V42.2926Z"
				fill={Palette.BACKGROUND_BG}
				stroke={Palette.NEUTRAL_N20}
				strokeWidth="8"
			/>
			<path
				d="M9.07819 36.3117C4.94601 34.64 4.94601 28.7896 9.07819 27.118L58.6043 7.08264C62.1827 5.63504 66.1836 5.63503 69.762 7.08263L119.288 27.118C123.42 28.7896 123.42 34.64 119.288 36.3117L69.762 56.347C66.1836 57.7946 62.1827 57.7946 58.6043 56.347L9.07819 36.3117Z"
				fill={Palette.BACKGROUND_BG}
				stroke={Palette.NEUTRAL_N20}
				strokeWidth="8"
			/>
		</svg>
	);
};

export default CapIcon;

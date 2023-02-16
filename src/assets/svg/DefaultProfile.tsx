import { Palette } from "styles/globals"

const DefaultProfile = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1141_7266)">
    <rect width="82" height="82" rx="8" fill={Palette.NEUTRAL_N40}/>
    <ellipse cx="41" cy="71" rx="29" ry="17" fill={Palette.BACKGROUND_CARD}/>
    <circle cx="41" cy="36" r="14" fill={Palette.BACKGROUND_CARD}/>
    </g>
    <rect x="2" y="2" width="78" height="78" rx="6" stroke={Palette.NEUTRAL_N40} strokeWidth="4"/>
    <defs>
    <clipPath id="clip0_1141_7266">
    <rect width="82" height="82" rx="8" fill="white"/>
    </clipPath>
    </defs>
    </svg>
)

export default DefaultProfile
import { Palette } from "styles/globals"

const HanbergerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 5H14" stroke={Palette.NEUTRAL_N20} strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 12H20" stroke={Palette.NEUTRAL_N20} strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 19H17" stroke={Palette.NEUTRAL_N20} strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

export default HanbergerIcon
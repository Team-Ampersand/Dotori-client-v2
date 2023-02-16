import { Palette } from "styles/globals"

const MenubarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2" fill={Palette.NEUTRAL_N20}/>
    <circle cx="12" cy="12" r="2" fill={Palette.NEUTRAL_N20}/>
    <circle cx="12" cy="19" r="2" fill={Palette.NEUTRAL_N20}/>
    </svg>
)

export default MenubarIcon
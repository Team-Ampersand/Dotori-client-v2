import { Palette } from "styles/globals"

const Squares2x2BlueIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5.46411" y="5.46426" width="8.5" height="8.5" rx="1.85714" fill={Palette.PRIMARY_P10} stroke={Palette.PRIMARY_P10} strokeWidth="2"/>
    <rect x="5.46436" y="18.0358" width="8.5" height="8.5" rx="1.85714" fill={Palette.PRIMARY_P10} stroke={Palette.PRIMARY_P10} strokeWidth="2"/>
    <rect x="18.0356" y="5.46432" width="8.5" height="8.5" rx="1.85714" fill={Palette.PRIMARY_P10} stroke={Palette.PRIMARY_P10} strokeWidth="2"/>
    <path d="M19.8928 18.0358H22.2856H24.6785C25.7042 18.0358 26.5356 18.8672 26.5356 19.8929V24.6786C26.5356 25.7043 25.7042 26.5358 24.6785 26.5358H22.2856H19.8928C18.8671 26.5358 18.0356 25.7043 18.0356 24.6786V22.2858V19.8929C18.0356 18.8672 18.8671 18.0358 19.8928 18.0358Z" fill={Palette.PRIMARY_P10} stroke={Palette.PRIMARY_P10} strokeWidth="2"/>
    </svg>
)

export default Squares2x2BlueIcon
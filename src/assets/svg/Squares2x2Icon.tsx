import { Palette } from "styles/globals"

const Squares2x2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5.46423" y="5.46436" width="8.5" height="8.5" rx="1.85714" stroke={Palette.NEUTRAL_N30} strokeWidth="2"/>
    <rect x="5.46436" y="18.0359" width="8.5" height="8.5" rx="1.85714" stroke={Palette.NEUTRAL_N30} strokeWidth="2"/>
    <rect x="18.0358" y="5.46436" width="8.5" height="8.5" rx="1.85714" stroke={Palette.NEUTRAL_N30} strokeWidth="2"/>
    <path d="M18.0358 19.893C18.0358 18.8674 18.8672 18.0359 19.8929 18.0359H22.2858H24.6786C25.7043 18.0359 26.5358 18.8674 26.5358 19.893V24.6787C26.5358 25.7044 25.7043 26.5359 24.6786 26.5359H22.2858H19.8929C18.8672 26.5359 18.0358 25.7044 18.0358 24.6787V22.2859V19.893Z" stroke={Palette.NEUTRAL_N30} strokeWidth="2"/>
    </svg>
)

export default Squares2x2Icon
import { Palette } from "styles/globals"

const PenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13.0607 6.36612L15.8891 3.53769L19.4246 7.07322L16.5962 9.90165M13.0607 6.36612L6.69671 12.7301L6.34316 16.6192L10.2322 16.2656L16.5962 9.90165M13.0607 6.36612L16.5962 9.90165" stroke={Palette.NEUTRAL_N20} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20.5 20.4623L3.5 20.3869" stroke={Palette.NEUTRAL_N20} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>    
)

export default PenIcon
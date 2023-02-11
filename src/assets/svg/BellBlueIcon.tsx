import { Palette } from "styles/globals"

const BellBlueIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.11869 16.8705C8.5838 16.3513 8.875 15.6649 8.875 14.9286V12.5084C8.875 8.74701 12.0341 5.64285 16 5.64285C19.9659 5.64285 23.125 8.74701 23.125 12.5084V14.9286C23.125 15.6649 23.4162 16.3513 23.8813 16.8705C24.5818 17.6525 25 18.6646 25 19.7689C25 22.0414 23.0623 23.6429 20.3056 23.6429H11.5556C10.196 23.6429 9.04749 23.2345 8.2569 22.5688C7.48206 21.9163 7 20.9778 7 19.7689C7 18.6646 7.41819 17.6525 8.11869 16.8705Z" fill={Palette.PRIMARY_P10} stroke={Palette.PRIMARY_P10} strokeWidth="2"/>
    <path d="M14 26.3571C14.5 27.7087 17.5 27.6721 18 26.3571" stroke={Palette.PRIMARY_P10} strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

export default BellBlueIcon
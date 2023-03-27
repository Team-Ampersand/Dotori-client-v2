import { Palette } from "styles/globals"

const EyeSelectedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.25 12C20.25 14.1853 19.163 15.7165 17.5831 16.7333C15.9765 17.7673 13.8758 18.25 12 18.25C10.1242 18.25 8.02351 17.7673 6.41694 16.7333C4.83704 15.7165 3.75 14.1853 3.75 12C3.75 9.81467 4.83704 8.28354 6.41694 7.26671C8.02351 6.23271 10.1242 5.75 12 5.75C13.8758 5.75 15.9765 6.23271 17.5831 7.26671C19.163 8.28354 20.25 9.81467 20.25 12Z" stroke={props.color} strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3.25" stroke={props.color} strokeWidth="1.5"/>
    </svg>
)

export default EyeSelectedIcon
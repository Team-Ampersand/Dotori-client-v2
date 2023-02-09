
const PersonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="7.25" r="4" stroke={props.color} strokeWidth="1.5"/>
    <path d="M19 17.6389C19 19.7867 15.866 20.75 12 20.75C8.13401 20.75 5 19.7867 5 17.6389C5 15.4911 8.13401 13.75 12 13.75C15.866 13.75 19 15.4911 19 17.6389Z" stroke={props.color} strokeWidth="1.5"/>
    </svg>
)

export default PersonIcon

const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8 12H7.25V12.75H8V12ZM16 12V12.75H16.75V12H16ZM8.75 8C8.75 6.20507 10.2051 4.75 12 4.75V3.25C9.37665 3.25 7.25 5.37664 7.25 8H8.75ZM8.75 12V8H7.25V12H8.75ZM8 12.75H16V11.25H8V12.75ZM15.25 8V12H16.75V8H15.25ZM12 4.75C13.7949 4.75 15.25 6.20507 15.25 8H16.75C16.75 5.37665 14.6234 3.25 12 3.25V4.75Z" fill={props.color}/>
        <rect x="5" y="12" width="14" height="8" rx="1.71429" stroke={props.color} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  
)

export default LockIcon;
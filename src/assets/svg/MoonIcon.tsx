import React from "react";

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="31.989898999629304" height="32" viewBox="0 0 32 32" fill="none" {...props}><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none" className="selected"/>
    <defs>
    <filter id="filter0_d_1038_3456" x="0.75" y="0.5" width="77.5" height="77.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="7.75"/>
    <feGaussianBlur stdDeviation="11.625"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.04 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1038_3456"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1038_3456" result="shape"/>
    </filter>
    <filter id="filter1_d_1038_3456" x="0.75" y="0.5" width="77.5" height="77.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="7.75"/>
    <feGaussianBlur stdDeviation="11.625"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1038_3456"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1038_3456" result="shape"/>
    </filter>
    </defs>
    <g className="currentLayer"><title>Layer 1</title><g filter="url(#filter0_d_1038_3456)" id="svg_1" className="">
    <g filter="url(#filter1_d_1038_3456)" id="svg_2">
    <circle cx="16.267677128314972" cy="15.843435049057007" r="15.5" fill="#818198" id="svg_3"/>
    <path d="M24.986477128314974,10.030935049057007 C23.242677128314973,10.030935049057007 22.080177128314972,11.193435049057008 22.080177128314972,12.937235049057008 C22.080177128314972,11.193435049057008 20.91767712831497,10.030935049057007 19.17387712831497,10.030935049057007 C20.91767712831497,10.030935049057007 22.080177128314972,8.868435049057005 22.080177128314972,7.124635049057005 C22.080177128314972,8.868435049057005 23.242677128314973,10.030935049057007 24.986477128314974,10.030935049057007 z" fill="#292930" stroke="#292930" strokeWidth="0.96875" strokeLinejoin="round" id="svg_4"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M25.922477128314974,19.482035049057004 C26.066577128314975,19.15133504905701 25.70747712831497,18.839535049057005 25.37147712831497,18.974135049057004 C24.301577128314975,19.402635049057004 23.13297712831497,19.63843504905701 21.90907712831497,19.63843504905701 C16.78497712831497,19.63843504905701 12.63107712831497,15.504635049057008 12.63107712831497,10.405335049057008 C12.63107712831497,9.105135049057008 12.901077128314974,7.867835049057007 13.388377128314971,6.745735049057007 C13.532077128314974,6.414835049057007 13.227877128314972,6.049835049057005 12.89197712831497,6.184735049057007 C9.191477128314972,7.6713350490570065 6.580177128314972,11.279635049057006 6.580177128314972,15.494835049057006 C6.580177128314972,21.03763504905701 11.095277128314969,25.530935049057007 16.664977128314973,25.530935049057007 C20.810977128314974,25.530935049057007 24.372577128314973,23.041135049057004 25.922477128314974,19.482035049057004 z" fill="#292930" stroke="#292930" strokeWidth="1.45312" id="svg_5"/>
    </g>
    </g></g></svg>
)

const MemoMoonIcon = React.memo(MoonIcon);
export default MemoMoonIcon;
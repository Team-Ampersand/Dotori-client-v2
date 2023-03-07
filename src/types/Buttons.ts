export interface AuthButtonProps {
    text: string,
    isCheck: boolean,
    width?: number,
    type: "button" | "submit",
    onClick: () => void
}

export interface AuthButtonStyleProps {
	width: number
};

export interface GenderBtnProps {
    gender: string,
    myGender: "남"|"여", 
    onClick: () => void
}

export interface DarkModeBtnStyleProps {
	isDarkTheme: boolean
};
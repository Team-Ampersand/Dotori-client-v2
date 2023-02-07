export interface AuthButtonProps {
    text: string,
    isCheck: boolean,
    width?: number
    onClick: () => void
}

export interface GenderBtnProps {
    gender: string,
    myGender: "남"|"여", 
    onClick: () => void
}
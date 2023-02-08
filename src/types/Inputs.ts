import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface AuthInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    register: UseFormRegisterReturn;
    labelName?:string;
    isValue:boolean;
    isEmailAuth?:boolean;
    DeleteBtnClick: ()=> void;
}
export interface AuthInputStyleProps {
	isRabel: boolean;
    isEmailAuth: boolean
};
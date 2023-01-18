import { UseFormRegisterReturn } from "react-hook-form";

export interface AuthInputProps {
    register: UseFormRegisterReturn;
    type: string;
    placeholder:string;
    maxLength?:number;
}
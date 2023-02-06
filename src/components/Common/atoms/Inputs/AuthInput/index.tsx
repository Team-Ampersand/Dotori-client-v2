import { AuthInputProps } from "../../../../../types";

const AuthInput = ({
    register,
    type,
    placeholder,
    maxLength,
  }: AuthInputProps) => {
    return (
        <input
            placeholder={placeholder}
            {...register}
            type={type}
            maxLength={maxLength}
        />
    );
}

export default AuthInput
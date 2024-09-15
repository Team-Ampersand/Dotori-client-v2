import { UseFormRegisterReturn } from 'react-hook-form';
import { AuthInput } from 'components/Common';
import * as S from './style';

interface Props {
  name: string;
  register: UseFormRegisterReturn;
  watch: string;
  reset: () => void;
}

const EditInput = ({ name, register, watch, reset }: Props) => {
  return (
    <S.Layer>
      <span>{name}</span>
      <AuthInput
        register={register}
        isValue={watch !== ''}
        DeleteBtnClick={() => reset()}
      />
    </S.Layer>
  );
};

export default EditInput;

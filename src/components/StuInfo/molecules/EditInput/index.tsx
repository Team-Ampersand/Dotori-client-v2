import { AuthInput } from 'components/Common';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

const EditInput = ({
  name,
  register,
  watch,
  reset,
}: {
  name: string;
  register: UseFormRegisterReturn;
  watch: string;
  reset: () => void;
}) => {
  return (
    <S.Layer>
      <h3>{name}</h3>
      <AuthInput
        register={register}
        isValue={watch !== ''}
        DeleteBtnClick={() => reset()}
      />
    </S.Layer>
  );
};

export default EditInput;

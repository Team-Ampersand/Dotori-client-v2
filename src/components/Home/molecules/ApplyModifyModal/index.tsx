import { AuthInput } from 'components/Common';
import ModalHeader from 'components/Common/atoms/ModalHeader';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';

import { useForm } from 'react-hook-form';
import { ApplyModifyModalProps } from 'types';
import { isNotNull } from 'utils/isNotNull';
import * as S from './style';

const ApplyModifyModal = ({
  modalState,
  setModalState,
  name,
  onClick,
  maxCount,
}: ApplyModifyModalProps) => {
  const { register, watch, resetField } = useForm<{ num: number }>({
    defaultValues: {
      num: maxCount,
    },
  });

  return (
    <ModalOverayWrapper
      isClick={modalState}
      onClick={() => setModalState(false)}
    >
      <S.ApplyModifyModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalHeader name={`${name} 인원 수정`} setState={setModalState} />
        <div>
          <p>{`${name} 인원`}</p>
          <AuthInput
            register={register('num')}
            type="number"
            placeholder={`${maxCount}`}
            DeleteBtnClick={() => resetField('num')}
            isValue={isNotNull(
              watch('num').toString().replace(`${maxCount}`, '')
            )}
          />
        </div>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setModalState(false)}>취소</S.CancelBtn>
          <S.CheckBtn onClick={() => onClick(watch('num'))}>저장</S.CheckBtn>
        </S.BtnWrapper>
      </S.ApplyModifyModalWrapper>
    </ModalOverayWrapper>
  );
};

export default ApplyModifyModal;

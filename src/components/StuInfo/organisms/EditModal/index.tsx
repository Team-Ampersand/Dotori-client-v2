import { XtextIcon } from 'assets/svg';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import EditInput from 'components/StuInfo/molecules/EditInput';
import EditRadioBtn from 'components/StuInfo/molecules/EditRadioBtn';
import { useForm } from 'react-hook-form';
import { StuInfoType } from 'types/components/StuInfoPage';
import * as S from './style';
import { useEffect } from 'react';
import { putStuInfo } from 'api/stuInfo';
import { getRole } from 'utils/Libs/getRole';
import { mutate } from 'swr';
import { StuInfoController } from 'utils/Libs/requestUrls';

const EditModal = ({
  isClick,
  onClick,
  data,
}: {
  isClick: boolean;
  onClick: () => void;
  data: StuInfoType;
}) => {
  const role = getRole();
  const { register, watch, setValue, reset } = useForm({
    defaultValues: {
      name: data.memberName,
      stuNum: data.stuNum,
      gender: data.gender,
      role: data.role,
    },
  });

  const onClose = () => {
    reset();
    onClick();
  };

  const handleSubmit = async () => {
    const isFailure = await putStuInfo(
      role,
      data.id,
      data.memberName,
      data.stuNum,
      data.gender,
      data.role
    );
    if (!isFailure) return;
    mutate(StuInfoController.stuInfo);
  };

  return (
    <ModalOverayWrapper isClick={isClick} onClick={onClose}>
      <S.Layer onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <S.ModalHeader>
          <h3>학생 정보 수정</h3>
          <XtextIcon onClick={onClick} />
        </S.ModalHeader>
        <EditInput
          name="이름"
          register={register('name')}
          watch={watch('name')}
          reset={() => {
            setValue('name', '');
          }}
        />
        <EditInput
          name="학번"
          register={register('stuNum')}
          watch={watch('stuNum')}
          reset={() => {
            setValue('stuNum', '');
          }}
        />
        <EditRadioBtn
          name="성별"
          watch={watch('gender')}
          label={['남', '여']}
          data={['MAN', 'WOMAN']}
          onClick={(value) => {
            if (value === 'MAN' || value === 'WOMAN') setValue('gender', value);
          }}
        />
        <EditRadioBtn
          name="직책"
          watch={watch('role')}
          label={['학생', '개발자', '자치위원']}
          data={['ROLE_MEMBER', 'ROLE_COUNCILLOR', 'ROLE_ADMIN']}
          onClick={(value) => {
            if (
              value === 'ROLE_MEMBER' ||
              value === 'ROLE_COUNCILLOR' ||
              value === 'ROLE_ADMIN'
            )
              setValue('role', value);
          }}
        />
        <S.SubmitBtn type="submit">저장</S.SubmitBtn>
      </S.Layer>
    </ModalOverayWrapper>
  );
};

export default EditModal;

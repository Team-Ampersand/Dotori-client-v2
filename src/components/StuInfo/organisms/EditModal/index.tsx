import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { putStuInfo } from 'api/stuInfo';
import { XtextIcon } from 'assets/svg';
import { StuInfoController } from 'utils/Libs/requestUrls';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import EditInput from 'components/StuInfo/molecules/EditInput';
import EditRadioBtn from 'components/StuInfo/molecules/EditRadioBtn';
import { StuInfoType } from 'types/components/StuInfoPage';
import * as S from './style';

interface Props {
  isClick: boolean;
  onClick: () => void;
  data: StuInfoType;
}

const EditModal = ({ isClick, onClick, data }: Props) => {
  const { register, watch, setValue, reset, handleSubmit } = useForm<
    Omit<StuInfoType, 'id' | 'selfStudyStatus'>
  >({
    defaultValues: {
      memberName: data.memberName,
      stuNum: data.stuNum,
      gender: data.gender,
      role: data.role,
    },
  });

  const onClose = () => {
    reset({
      memberName: data.memberName,
      stuNum: data.stuNum,
      gender: data.gender,
      role: data.role,
    });
    onClick();
  };

  const onSubmit = async () => {
    const isFailure = await putStuInfo(
      data.id,
      watch('memberName'),
      watch('stuNum'),
      watch('gender'),
      watch('role'),
    );
    if (!isFailure) return;

    onClick();
    mutate(StuInfoController.stuInfo);
  };

  return (
    <ModalOverayWrapper isClick={isClick} onClick={onClose}>
      <S.Layer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <h3>학생 정보 수정</h3>
          <XtextIcon onClick={onClick} />
        </S.ModalHeader>
        <EditInput
          name="이름"
          register={register('memberName')}
          watch={watch('memberName')}
          reset={() => {
            setValue('memberName', '');
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
          data={['ROLE_MEMBER', 'ROLE_DEVELOPER', 'ROLE_COUNCILLOR']}
          onClick={(value) => {
            if (
              value === 'ROLE_MEMBER' ||
              value === 'ROLE_DEVELOPER' ||
              value === 'ROLE_COUNCILLOR'
            )
              setValue('role', value);
          }}
        />
        <S.SubmitBtn onClick={handleSubmit(onSubmit)}>저장</S.SubmitBtn>
      </S.Layer>
    </ModalOverayWrapper>
  );
};

export default EditModal;

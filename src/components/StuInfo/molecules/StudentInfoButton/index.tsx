import { BookBenIcon, BookIcon, EditPencilIcon } from 'assets/svg';
import { Palette } from 'styles/globals';
import { StuInfoType } from 'types/components/StuInfoPage';
import * as S from './style';

interface Props {
  isAbleSelfStudy: boolean;
  role: Pick<StuInfoType, 'role'>['role'];
  onSelfStudyModal: (selfStudyStatus: boolean) => void;
  setEditModal: (state: boolean) => void;
}

const StudentInfoButtons = ({
  isAbleSelfStudy,
  role,
  onSelfStudyModal,
  setEditModal,
}: Props) => {
  return (
    <S.ButtonBox>
      <S.Button
        status={isAbleSelfStudy}
        hide={role === 'ROLE_ADMIN'}
        onClick={() => onSelfStudyModal(isAbleSelfStudy)}
      >
        {isAbleSelfStudy ? <BookIcon /> : <BookBenIcon />}
      </S.Button>
      <S.Button
        hide={role === 'ROLE_ADMIN'}
        onClick={() => {
          setEditModal(true);
        }}
      >
        <EditPencilIcon side={17} color={Palette.NEUTRAL_N20} />
      </S.Button>
    </S.ButtonBox>
  );
};

export default StudentInfoButtons;

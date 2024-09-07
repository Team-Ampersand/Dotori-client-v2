import * as S from './style';

interface FormHeaderProps {
  handleSetModal: (value: boolean) => void;
}

const FormHeader: React.FC<FormHeaderProps> = ({ handleSetModal }) => {
  return (
    <S.FormHeader>
      <h2>음악 신청</h2>
      <S.NoticeModalBtn type="button" onClick={() => handleSetModal(true)}>
        !
      </S.NoticeModalBtn>
    </S.FormHeader>
  );
};

export default FormHeader;

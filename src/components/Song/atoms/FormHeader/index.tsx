import * as S from './style';

interface FormHeaderProps {
  setModal: (value: boolean) => void;
}

const FormHeader: React.FC<FormHeaderProps> = ({ setModal }) => {
  return (
    <S.FormHeader>
      <h2>음악 신청</h2>
      <S.NoticeModalBtn type="button" onClick={() => setModal(true)}>
        !
      </S.NoticeModalBtn>
    </S.FormHeader>
  );
};

export default FormHeader;

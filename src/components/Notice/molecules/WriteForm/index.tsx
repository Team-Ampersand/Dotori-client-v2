import WriteContent from '../WriteContent';
import WriteHeader from '../WriteHeader';
import * as S from './style';

const WriteForm = () => {
  return (
    <S.Layer>
      <WriteHeader />
      <WriteContent />
    </S.Layer>
  );
};

export default WriteForm;

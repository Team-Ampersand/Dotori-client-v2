import * as S from './style';

const WriteContent = () => {
  return (
    <S.Layer>
      <input placeholder="제목(1~45자)" />
      <textarea placeholder="내용(1~5000자)" />
    </S.Layer>
  );
};

export default WriteContent;

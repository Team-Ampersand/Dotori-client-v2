import BottomBtnBox from 'components/Notice/molecules/BottomBtnBox';
import ImgForm from 'components/Notice/molecules/ImgForm';
import WriteForm from 'components/Notice/molecules/WriteForm';
import * as S from './style';

const NoticeWrite = () => {
  return (
    <S.Layer>
      <WriteForm />
      <ImgForm />
      <BottomBtnBox />
    </S.Layer>
  );
};

export default NoticeWrite;

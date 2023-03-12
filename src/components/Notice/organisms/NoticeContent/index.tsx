import ContentHeader from 'components/Notice/molecules/ContentHeader';
import * as S from './style';

const NoticeContent = () => {
  return (
    <S.Layer>
      <ContentHeader />
      <S.ContentWrapper>
        <div>
          기숙사 자습실 관련하여 공지드립니다.
          <br /> [ 기숙사 자습실 관련 공지 ]<br />
          <br /> 현재 기숙사에서 화요일까지 정보처리산업기사시험으로인해 금일
          자습실 운영에 제한이 생겨 자습인원을 신청한 순서대로 40번째까지만
          자습실을 이용하실수있는점 양해바랍니다. <br />
          궁금한 점 있으시면 이시완#7244으로 문의주시기바랍니다.
        </div>
      </S.ContentWrapper>
    </S.Layer>
  );
};

export default NoticeContent;

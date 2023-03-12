import { EditPencilIcon, TrashCan } from 'assets/svg';
import { writerColor } from 'utils/writerColor';
import * as S from './style';

const ContentHeader = () => {
  return (
    <S.ContentHeader>
      <S.HeaderLeftBox>
        <S.Writer>
          <S.WriterDot style={{ background: writerColor['도토리'] }} />
          <span>{'도토리'}</span>
        </S.Writer>
        <h2>[기숙사 자습실 관련 공지]</h2>
      </S.HeaderLeftBox>
      <S.HeaderRightBox>
        <small>2022년 7월 6일 오후 3시 36분</small>
        <S.IconBox>
          <EditPencilIcon />
          <TrashCan />
        </S.IconBox>
      </S.HeaderRightBox>
    </S.ContentHeader>
  );
};

export default ContentHeader;

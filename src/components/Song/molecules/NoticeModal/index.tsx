import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import * as S from './style';

interface NoticeModalProps {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeModal: React.FC<NoticeModalProps> = ({ isModal, setModal }) => {
  return (
    <ModalOverayWrapper isClick={isModal} onClick={() => setModal(false)}>
      <S.Layer onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <h3>※ 음악 신청 시 공지사항</h3>
        </S.Header>
        <S.ContentBox>
          <S.ContentList>
            <S.ContentItem>
              기상 음악 순서는 신청 순서와는 별개로 사감선생님께서 정하십니다.
            </S.ContentItem>
            <S.ContentItem>
              영어, 한국어, 일본어 이외의 언어가 포함되거나 과도한 욕설이 담긴
              음악은 삭제될 수 있습니다.
            </S.ContentItem>
            <S.ContentItem>
              기상 음악과 관련 없는 영상을 올렸을 시 삭제될 수 있습니다.
            </S.ContentItem>
            <S.ContentItem>노래 신청은 1일 1곡만 가능합니다.</S.ContentItem>
            <S.ContentItem>
              노래 신청은 취소 후 재신청이 가능합니다.
            </S.ContentItem>
          </S.ContentList>
        </S.ContentBox>
      </S.Layer>
    </ModalOverayWrapper>
  );
};

export default NoticeModal;

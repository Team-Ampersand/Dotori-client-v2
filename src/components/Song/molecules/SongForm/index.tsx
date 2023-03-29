import { useSetRecoilState } from 'recoil';
import { songNoticeModal } from 'recoilAtoms/recoilAtomContainer';
import * as S from './style';

const SongForm = () => {
  const setModal = useSetRecoilState(songNoticeModal);
  return (
    <S.Layer>
      <S.FormHeader>
        <h2>음악 신청</h2>
        <S.NoticeModalBtn onClick={() => setModal(true)}>!</S.NoticeModalBtn>
      </S.FormHeader>
      <S.Input placeholder="URL을 입력해 주세요" />
      <S.Submit>신청하기</S.Submit>
    </S.Layer>
  );
};

export default SongForm;

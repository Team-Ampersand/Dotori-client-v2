import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { HeartIcon, TrashcanIcon } from 'assets/svg';
import { SongResponsiveModalProps } from 'types';
import { preventEvent } from 'utils/Libs/preventEvent';
import { getRole } from 'utils/Libs/getRole';
import * as S from './style';

const ResponsiveModal = ({
  modalState,
  setModalState,
  setDelModalState,
  songData,
  userData,
  heartState,
  setHeartState,
}: SongResponsiveModalProps) => {
  const role = getRole();

  const handleHeart = (e: React.MouseEvent<HTMLDivElement>) => {
    preventEvent(e);
    setHeartState(!heartState);
    setModalState(false);
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    preventEvent(e);
    setDelModalState(true);
    setModalState(false);
  };

  return (
    <>
      <S.ModalWrapper modalState={modalState}>
        <S.BtnWrapper>
          <div onClick={handleHeart}>
            <HeartIcon heartState={heartState} />
            좋아요
          </div>
          {(role !== 'member' ||
            String(songData.stuNum) === userData.stuNum) && (
            <div onClick={handleDelete}>
              <TrashcanIcon />
              기상음악 삭제
            </div>
          )}
        </S.BtnWrapper>
      </S.ModalWrapper>
      <ResponseOverayWrapper
        isClick={modalState}
        onClick={(e) => {
          preventEvent(e);
          setModalState(false);
        }}
      />
    </>
  );
};

export default ResponsiveModal;

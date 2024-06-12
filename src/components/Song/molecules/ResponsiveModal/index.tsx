import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import * as S from './style';
import { NewPageIcon, TrashcanIcon } from 'assets/svg';
import { SongResponsiveModalProps } from 'types';
import { preventEvent } from 'utils/Libs/preventEvent';
import { getRole } from 'utils/Libs/getRole';

const ResponsiveModal = ({
  modalState,
  setModalState,
  setDelModalState,
  songData,
  userData,
}: SongResponsiveModalProps) => {
  const role = getRole();
  return (
    <>
      <S.ModalWrapper modalState={modalState}>
        <S.BtnWrapper>
          <div>
            <NewPageIcon />
            바로가기
          </div>
          {(role !== 'member' ||
            String(songData.stuNum) === userData.stuNum) && (
            <div
              onClick={(e) => {
                preventEvent(e);
                setDelModalState(true);
                setModalState(false);
              }}
            >
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

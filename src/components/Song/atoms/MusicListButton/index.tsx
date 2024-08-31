import { NewPageIcon, TrashcanIcon } from 'assets/svg';
import { preventEvent } from 'utils/Libs/preventEvent';
import * as S from './style';

interface MusicListButtonProps {
  role: string;
  songStuNum: number;
  userStuNum?: string;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MusicListButton = ({
  role,
  songStuNum,
  userStuNum,
  setDeleteModal,
}: MusicListButtonProps) => {
  return (
    <S.ButtonContainer>
      {(role !== 'member' || String(songStuNum) === userStuNum) && (
        <button
          onClick={(e) => {
            preventEvent(e);
            setDeleteModal(true);
          }}
        >
          <TrashcanIcon />
        </button>
      )}
      <div>
        <NewPageIcon />
      </div>
    </S.ButtonContainer>
  );
};

export default MusicListButton;

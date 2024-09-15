import { SongType } from './components/SongPage';
import { myProfileType } from './Home';
export interface MenuOptionStyleProps {
  name: '프로필 수정' | '규정위반 내역' | '비밀번호 변경' | '로그아웃';
}

export interface MenuOptionProps extends MenuOptionStyleProps {
  onClick: () => void;
  theme: 'dark' | 'light';
}

export interface ModalStyleProps {
  isClick: boolean;
}

export interface MenuModal extends ModalStyleProps {
  setIsClick: (isClick: boolean) => void;
  setPenaltyModal: (penaltyModal: boolean) => void;
  setProfileImgModal: (profileImgModa: boolean) => void;
}

export interface ModalProps {
  modalState: boolean;
  setModalState: (state: boolean) => void;
}

export interface PenaltyItemType {
  id?: number;
  rule: string;
  createdDate: string;
}

export interface PenaltyListType {
  rules: PenaltyItemType[];
}

export interface ModalHeaderProps {
  name: string;
  setState: (state: boolean) => void;
}

export interface CommonCheckModalProps extends ModalProps {
  title: string;
  content: string;
  onClick: () => void;
}

export interface ApplyModifyModalProps extends ModalProps {
  name: string;
  maxCount: number;
  onClick: (n: number) => void;
}

export interface PromotionStyleProps {
  isShow: boolean;
}

export interface PenaltyRecordModalProps {
  modalState: boolean;
  setModalState: (state: boolean) => void;
  handleDelete: (
    state: string[],
    setState: (state: string[]) => void,
    select: string,
  ) => void;
}

export interface SongResponsiveModalProps extends ModalProps {
  setDelModalState: (state: boolean) => void;
  songData: SongType;
  userData: myProfileType;
  heartState: boolean;
  setHeartState: React.Dispatch<React.SetStateAction<boolean>>;
}

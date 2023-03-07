export interface MenuOptionStyleProps {
  name: '프로필수정' | '규정위반 내역' | '비밀번호 변경' | '로그아웃';
}

export interface MenuOptionProps extends MenuOptionStyleProps {
  onClick: () => void;
}

export interface ModalStyleProps {
  isClick: boolean;
}

export interface MenuModal extends ModalStyleProps {
  setIsClick: (isClick: boolean) => void;
  setPenaltyModal: (penaltyModal: boolean) => void;
  setProfileImgModal: (profileImgModa: boolean) => void;
}

export interface PenaltyModalProps {
  penaltyModal: boolean;
  setPenaltyModal: (profileImgModa: boolean) => void;
}

export interface PenaltyItemType {
  name: string;
  date: string;
}

export interface ProfileImgModalProps {
  profileImgModal: boolean;
  setProfileImgModal: (profileImgModal: boolean) => void;
}

export interface ModalHeaderProps {
  name: string;
  setState: (state: boolean) => void;
}

export interface PenaltyModalState {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export interface PenaltyDelModalProps extends PenaltyModalState {
  penaltyName: string;
}

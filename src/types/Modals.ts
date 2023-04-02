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
    select: string
  ) => void;
}

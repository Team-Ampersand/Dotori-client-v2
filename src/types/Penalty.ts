export interface PenaltyItemProps {
  setPenaltyListModal: (penaltyListModal: boolean) => void;
  setPenaltyRecordModal: (penaltyRecordModal: boolean) => void;
  name: string;
  gender: string;
  number: string;
  ruleBigViolationList: string[];
}

export interface PenaltyItemsStyleProps {
  itemCnt: number;
}

export interface PenaltyMenuProps {
  penaltyTitle: string;
  menuList: string[];
}

export interface PenaltyMenuItemProps {
  title: string;
  currentMenu: string;
  setCurrentMenu: (title: string) => void;
}

export interface PenaltyMenuItemStyleProps {
  isClick: boolean;
}

export interface PenaltyCheckProps {
  name: string;
}

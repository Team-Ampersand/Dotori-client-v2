export interface PenaltyItemProps {
  name: string;
  gender: string;
  number: string;
  ruleList: string[];
}

export interface PenaltyItemsStyleProps {
  itemCnt: number | undefined;
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

export interface PenaltyListProps {
  id: number;
  memberName: string;
  stuNum: string;
  rule: string[];
  gender: string;
}

export interface PenaltyStuListType {
  students: PenaltyListProps[];
}

export interface PenaltyStuType {
  name: string;
  stuNum: string;
}

export interface PenaltyRuleItemProps {
  id: number;
  rule: string;
  createdDate: string;
}

export interface PenaltyRuleItemType {
  rules: PenaltyRuleItemProps[];
}

export interface ReturnPenaltyName {
  [key: string]: string;
}

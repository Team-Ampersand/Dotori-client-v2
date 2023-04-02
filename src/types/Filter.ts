import { ModalProps } from './Modals';

export interface filterListProps {
  filterTitle: string;
  filterList:
    | [string, string]
    | [string, string, string]
    | [string, string, string, string];
  show: string[];
}

export interface SearchFilterProps {
  index: number;
  name: string;
  item: string;
  value: string | undefined;
  onClick: React.MouseEventHandler;
}

export interface SearchFilterTypeProps {
  filterType: string;
  onSubmit: (state: (string | undefined)[], name: string) => void;
}

export interface FilterStyleProps {
  isShow?: boolean;
  darkmode?: string;
  modalState?: boolean;
}

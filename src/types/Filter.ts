export interface filterListProps {
  filterTitle: string;
  filterList:
    | [string, string]
    | [string, string, string]
    | [string, string, string, string];
  show: string[];
}

export interface SearchFilterProps {
  name: string;
  item: string;
  value: string | undefined;
  onClick: any;
}

export interface SearchFilterTypeProps {
  filterType: string;
  onSubmit: (state: (string | undefined)[], name?: string) => void;
}

export interface FilterStyleProps {
  isShow?: boolean;
  darkmode?: string;
  modalState?: boolean;
}

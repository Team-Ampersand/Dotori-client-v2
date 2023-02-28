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
	value: string;
	setValue: (ind: number, value: string) => void;
}

export interface SearchFilterTypeProps {
	filterType: string;
}

export interface FilterStyleProps {
	isShow?: boolean;
	darkmode?: string;
}

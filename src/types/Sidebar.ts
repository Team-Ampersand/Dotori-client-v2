export interface menuListProps {
    routerName: string,
    menuTitle: string,
    show: string[],
}

export interface SidebarListProps {
	menuDataList: menuListProps[];
	currentRouter: string;
	setCurrentRouter: (currentRouter: string) => void;
}

export interface SignbarItemProps extends menuListProps {
	currentRouter: string;
	setCurrentRouter: (currentRouter: string) => void;
}

export interface SidebarStyleProps {
	isCurrentRouter: boolean;
	isnotShow?: boolean;
}
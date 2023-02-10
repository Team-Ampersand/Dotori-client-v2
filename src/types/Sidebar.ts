export interface menuListProps {
    routerName: string,
    menuTitle: '홈'|'공지사항'|'자습신청'|'안마의자 신청'|'기상음악 신청'|'학생정보'|'규정위반',
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
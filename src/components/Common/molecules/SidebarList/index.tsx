import * as S from "./style";
import {SidebarListProps} from "types"
import SidebarItem from "components/Common/atoms/Items/SidebarItem";
import React, { useEffect } from "react";

const SidebarList = ({
    menuDataList,
	currentRouter,
	setCurrentRouter,
}:SidebarListProps) => {
    useEffect(() => {
		window.onpopstate = () => setCurrentRouter(window.location.pathname);
	}, [currentRouter, setCurrentRouter]);
    
    return (
        <S.SideBarListWrapper>
            {
                menuDataList.map((i, idx) => (
                    <SidebarItem
                        currentRouter={currentRouter}
                        setCurrentRouter={setCurrentRouter}
                        routerName={i.routerName}
                        menuTitle={i.menuTitle}
                        show={i.show}
                        key={idx}
                    />
                ))
            }
        </S.SideBarListWrapper>
    );
}

export default SidebarList;
import { DotoriLogo } from "assets/svg";
import LogoutButton from "components/Common/atoms/Buttons/LogoutButton";
import SideBarList from "components/Common/molecules/SidebarList";
import { useRouter } from "next/router";
import SideBarMenuData from "assets/data/SidebarMenuData.json"
import { useMemo, useState } from "react";
import * as S from "./style";
import Link from "next/link";

const SideBar = () => {
    const { pathname } = useRouter();
    const [currentRouter, setCurrentRouter] = useState(pathname);

    const mappingSidebarMenu = useMemo(() => (
        <SideBarList
            menuDataList={SideBarMenuData.menuList}
            currentRouter={currentRouter}
            setCurrentRouter={setCurrentRouter}
        />
	), [currentRouter]);

    return (
        <S.SideBarWrapper>
            <Link href='/'>
                <a>
                    <DotoriLogo />
                </a>
            </Link>
            {mappingSidebarMenu}
            <LogoutButton />
        </S.SideBarWrapper>
    );
}

export default SideBar;
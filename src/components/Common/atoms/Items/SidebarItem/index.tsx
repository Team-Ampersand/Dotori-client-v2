import { useRole } from 'hooks/useRole';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SignbarItemProps } from 'types';
import { ChangeMenuIcon } from 'utils/ChangeMenuIcon';
import * as S from './style';

const SidebarItem = ({
	routerName,
    menuTitle,
    show,
	currentRouter,
	setCurrentRouter,
}:SignbarItemProps) => {
	const isCurrentRouter = `/${currentRouter.split('/')[1]}` === routerName;
	// const role = useRole();
	
	return (
		<Link href={routerName} passHref>
			<S.SidebarItemWrapper
				title={menuTitle}
				onClick={() => {setCurrentRouter(routerName)}}
				isCurrentRouter={isCurrentRouter}
				// isnotShow={!show.includes(role)}
			>
				{ChangeMenuIcon(menuTitle, isCurrentRouter)}
				<S.MenuTitle>{menuTitle}</S.MenuTitle>
			</S.SidebarItemWrapper>
		</Link>
	);
};

export default SidebarItem;
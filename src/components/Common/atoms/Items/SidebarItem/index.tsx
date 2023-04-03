import Link from 'next/link';
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
  role,
}: SignbarItemProps) => {
  const isCurrentRouter = `/${currentRouter.split('/')[1]}` === routerName;

  return (
    <Link href={routerName} passHref>
      <S.SidebarItemWrapper
        title={menuTitle}
        onClick={() => {
          setCurrentRouter(routerName);
        }}
        isCurrentRouter={isCurrentRouter}
        isShow={show.includes(role)}
      >
        <>{ChangeMenuIcon(isCurrentRouter)[menuTitle]()}</>
        <S.MenuTitle>{menuTitle}</S.MenuTitle>
      </S.SidebarItemWrapper>
    </Link>
  );
};

export default SidebarItem;

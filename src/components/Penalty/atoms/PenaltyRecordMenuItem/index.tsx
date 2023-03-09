import * as S from './style';
import { PenaltyMenuItemProps } from 'types';

const PenaltyRecordMenuItem = ({
  title,
  currentMenu,
  setCurrentMenu,
}: PenaltyMenuItemProps) => {
  return (
    <S.MenuItemWrapper
      onClick={() => setCurrentMenu(title)}
      isClick={currentMenu === title}
    >
      {title}
    </S.MenuItemWrapper>
  );
};

export default PenaltyRecordMenuItem;

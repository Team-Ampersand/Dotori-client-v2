import { MenuOptionProps } from 'types';
import { ChangeProfileModalcon } from 'utils/ChangeProfileModalcon';
import * as S from './style';

const MenuOption = ({ name, onClick, theme }: MenuOptionProps) => (
  <S.MenuOptionWrapper onClick={onClick} name={name} theme={theme}>
    <>{ChangeProfileModalcon()[name]()}</>
    {name}
  </S.MenuOptionWrapper>
);

export default MenuOption;

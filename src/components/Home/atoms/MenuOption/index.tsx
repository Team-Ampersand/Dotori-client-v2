import { MenuOptionProps } from "types";
import * as S from "./style";

const MenuOption = ({name, onClick}:MenuOptionProps) => (
    <S.MenuOptionWrapper onClick={onClick} name={name}>
        {name}
    </S.MenuOptionWrapper>
)

export default MenuOption;
import { MenuOptionProps } from "types";
import { ChangeProfileModalcon } from "utils/ChangeProfileModalcon";
import * as S from "./style";

const MenuOption = ({name, onClick}:MenuOptionProps) => (
    <S.MenuOptionWrapper onClick={onClick} name={name}>
        <>
            {ChangeProfileModalcon()[name]()}
        </>
        {name}
    </S.MenuOptionWrapper>
)

export default MenuOption;
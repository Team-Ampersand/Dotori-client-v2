import { Palette } from "styles/globals";
import * as S from "./style";

const Dot = ({order,dotNum}:{order:string, dotNum:string}) => (
    <S.Dot style={{background: order === dotNum ? `${Palette.PRIMARY_P10}` : `${Palette.NEUTRAL_N40}` }}/>
)

export default Dot;
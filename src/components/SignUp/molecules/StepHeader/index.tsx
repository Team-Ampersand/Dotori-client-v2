import { DotoriLogo } from "../../../../../public/svg";
import Dot from "../../atoms/Dot";
import * as S from "./style";

const StepBar = ({order}:{order:string}) => (
    <S.StepHeaderWrapper>
        <DotoriLogo />
        <S.DotsWrapper> 
        {
            ['first', 'second', 'last'].map((i,idx) => <Dot order={order} dotNum={i} key={idx}/>)
        }
        </S.DotsWrapper>   
    </S.StepHeaderWrapper>
);

export default StepBar;
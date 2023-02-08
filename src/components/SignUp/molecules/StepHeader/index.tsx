import { DotoriLogo } from "assets/svg";
import Dot from "components/SignUp/atoms/Dot";
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
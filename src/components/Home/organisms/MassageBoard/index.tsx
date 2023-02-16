import ApplyBox from "components/Home/molecules/ApplyBox";
import { applyBoardState } from "types";
import { useState } from "react";

const MassageBoard = () => {
    const [info, setInfo] = useState<applyBoardState>({ count: 4, applyStatus: '신청불가' });

    const handleApplyBtnClick = () => {
        
    }
    
    return (
        <ApplyBox 
            name={"안마의자"} 
            url={"/massage"} 
            count={info.count} 
            maxCount={5} 
            applyStatus={info.applyStatus} 
            onClick={handleApplyBtnClick}
        />
    )
}

export default MassageBoard;
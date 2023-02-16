import ApplyBox from "components/Home/molecules/ApplyBox";
import { useEffect, useState } from "react";
import { applyBoardState } from "types";

const SelfStudyBoard = () => {
    const [info, setInfo] = useState<applyBoardState>({ count: 25, applyStatus: '신청취소' });

    const handleApplyBtnClick = () => {
        
    }

    return (
       <ApplyBox 
            name={"자습신청"} 
            url={"/selfstudy"} 
            count={info.count} 
            maxCount={50} 
            applyStatus={info.applyStatus} 
            onClick={handleApplyBtnClick}
        />
    )
}

export default SelfStudyBoard;
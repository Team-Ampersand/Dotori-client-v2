import { applyCancelStudy, applyModifyStudy, applySelfStudy } from "api/selfStudy";
import CommonCheckModal from "components/Common/molecules/CommonCheckModal";
import ApplyBox from "components/Home/molecules/ApplyBox";
import ApplyModifyModal from "components/Home/molecules/ApplyModifyModal";
import { useRole } from "hooks/useRole";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { applyBoardState } from "types";

const SelfStudyBoard = () => {
    const [info, setInfo] = useState<applyBoardState>({ count: 25, applyStatus: '신청취소' });
    const [checkModal, setCheckModal] = useState(false);
    const [applyModifyModal, setApplyModifyModal] = useState(false);
    // const role = useRole()
    const role:string = 'member'; // 예시

    useEffect(() => {
        if(role === 'admin'){
            setInfo({...info, applyStatus: '인원수정'});
        }
    },[])

    const handleApplyBtnClick = () => {
        switch(info.applyStatus) {
            case '자습신청'||'신청불가' :
                return  StudyControll();
            case '신청취소' : 
                return setCheckModal(true);
            case '인원수정' :
                return setApplyModifyModal(true);
        }
    }

    const StudyControll = async (n?:number) => {
        switch(info.applyStatus) {
            case '자습신청' : {
                // const {data}:any = await applySelfStudy(role);  
                // if(data){}
                setInfo({ count: info.count+1, applyStatus : '신청취소' });
            }
            return;
            case '신청취소' : {
                // await applyCancelStudy(role);
                setInfo({ count: info.count-1, applyStatus : '신청불가' });
            }
            return;
            case '인원수정' : {
                // return await applyModifyStudy(role, n||50);
            }
        }
    };

    const handleModalClick = (setState:Dispatch<SetStateAction<boolean>>,n?:number) => {
        setState(false);
        StudyControll(n);
    };

    return (
        <>
            <ApplyBox 
                name={"자습신청"} 
                url={"/selfstudy"} 
                count={info.count} 
                maxCount={50} 
                applyStatus={info.applyStatus}
                onClick={handleApplyBtnClick}
            />
            {
                checkModal && 
                <CommonCheckModal 
                    title={"신청취소"}
                    content={"오늘 하루동안 다시 신청이 불가능 해요"} 
                    onClick={() => handleModalClick(setCheckModal)} 
                    modalState={checkModal} 
                    setModalState={setCheckModal}
                />
            }
            {
                applyModifyModal && 
                <ApplyModifyModal 
                    name={"자습"} 
                    onClick={(n) => handleModalClick(setApplyModifyModal,n)}
                    modalState={applyModifyModal} 
                    setModalState={setApplyModifyModal}
                    maxCount={50}
                />
            }
        </>
    )
}

export default SelfStudyBoard;
import ApplyBox from "components/Home/molecules/ApplyBox";
import { applyBoardState } from "types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CommonCheckModal from "components/Common/molecules/CommonCheckModal";
import ApplyModifyModal from "components/Home/molecules/ApplyModifyModal";
import { applyCancelMassage, applyMassage, applyModifyMassage } from "api/massage";

const MassageBoard = () => {
    const [info, setInfo] = useState<applyBoardState>({ count: 4, applyStatus: '안마의자' });
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
            case '안마의자'||'신청불가' :
                return  StudyControll();
            case '신청취소' : 
                return setCheckModal(true);
            case '인원수정' :
                return setApplyModifyModal(true);
        }
    }

    const StudyControll = async (n?:number) => {
        switch(info.applyStatus) {
            case '안마의자' : {
                // const {data}:any = await applyMassage(role);  
                // if(data){}
                setInfo({ count: info.count+1, applyStatus : '신청취소' });
            }
            return;
            case '신청취소' : {
                // await applyCancelMassage(role);
                setInfo({ count: info.count-1, applyStatus : '신청불가' });
            }
            return;
            case '인원수정' : {
                // return await applyModifyMassage(role, n||50);
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
                name={"안마의자"} 
                url={"/massage"} 
                count={info.count} 
                maxCount={5} 
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

export default MassageBoard;
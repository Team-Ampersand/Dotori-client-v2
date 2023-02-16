import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import DarkModeButton from "components/Common/atoms/Buttons/DarkModeBtn";
import { DefaultProfile, MenubarIcon } from "assets/svg";
import MenuModal from "components/Home/molecules/MenuModal";
import PenaltyModal from "components/Home/molecules/PenaltyModal";
import ProileImgModal from "components/Home/molecules/ProfileImgModal";

const Profile = () => {
    const [menuModal, setMenuModal] = useState(false);
    const [penaltyModal, setPenaltyModal] = useState(false);
    const [profileImgModal, setProfileImgModal] = useState(false);
      
    return (
        <S.ProfileWrapper>
            <DarkModeButton />
            <S.ProfileBox>
                
                <DefaultProfile />

                <S.StudentInfo>
                    <S.Name>{`반가워요, 이름님`}</S.Name>
                    <S.StudId>{`2105`}</S.StudId>
                </S.StudentInfo>
                <div>
                    <div onClick={() => setMenuModal(pre => !pre)}>
                        <MenubarIcon />
                    </div>
                    <MenuModal 
                        isClick={menuModal} 
                        setIsClick={setMenuModal} 
                        setPenaltyModal={setPenaltyModal} 
                        setProfileImgModal={setProfileImgModal}
                    />
                </div>
            </S.ProfileBox>
            {
                penaltyModal && <PenaltyModal penaltyModal={penaltyModal} setPenaltyModal={setPenaltyModal}/>
            }
            {
                profileImgModal && <ProileImgModal profileImgModal={profileImgModal} setProfileImgModal={setProfileImgModal}/>
            }
        </S.ProfileWrapper>
    )
}

export default Profile
import * as S from "./style";
import DarkModeButton from "components/Common/atoms/Buttons/DarkModeBtn";
import { DefaultProfile, MenubarIcon } from "assets/svg";
import MenuModal from "components/Home/molecules/MenuModal";
import PenaltyModal from "components/Home/molecules/PenaltyModal";
import ProileImgModal from "components/Home/molecules/ProfileImgModal";
import { myProfileType } from "types";
import useSWR from 'swr';
import { MemberController } from "utils/Libs/requestUrls";
import { useRecoilState } from "recoil";
import { menuModalState, penaltyModalState, profileModalState } from "recoilAtoms/recoilAtomContainer";

const Profile = () => {
    const [menuModal, setMenuModal] = useRecoilState(menuModalState);
    const [penaltyModal, setPenaltyModal] = useRecoilState(penaltyModalState);
    const [profileImgModal, setProfileImgModal] = useRecoilState(profileModalState);
    const { data } = useSWR<myProfileType>(MemberController.myProfile);    
    
    return (
        <S.ProfileWrapper>
            <DarkModeButton />
            <S.ProfileBox>
                <DefaultProfile />
                <S.StudentInfo>
                    <S.Name>{`반가워요, ${data?.name}님`}</S.Name>
                    <S.StudId>{data?.stuNum}</S.StudId>
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
                penaltyModal && <PenaltyModal/>
            }
            {
                profileImgModal && <ProileImgModal/>
            }
        </S.ProfileWrapper>
    )
}

export default Profile
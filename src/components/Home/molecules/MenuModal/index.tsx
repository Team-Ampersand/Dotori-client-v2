import MenuOption from "components/Home/atoms/MenuOption";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { MenuModal, myProfileType, PenaltyItemType } from "types";
import { removeToken } from "utils/Libs/removeToken";
import { MemberController, penaltyController } from "utils/Libs/requestUrls";
import * as S from "./style";
import useSWR from 'swr';

const MenuModal = ({isClick, setIsClick, setPenaltyModal, setProfileImgModal}:MenuModal) => {
    const router = useRouter();
    const { data:ProfileData } = useSWR<myProfileType>(MemberController.myProfile);
    const { data } = useSWR<PenaltyItemType[]>(penaltyController.strRule(ProfileData?.stuNum || ""));
    const  menuArr: ('프로필수정'|'규정위반 내역'|'비밀번호 변경'|'로그아웃')[] = ['프로필수정', '규정위반 내역', '비밀번호 변경', '로그아웃'];
    
    const handleClick = (name:'프로필수정'|'규정위반 내역'|'비밀번호 변경'|'로그아웃') => {
        setIsClick(!isClick);
        switch(name) {
            case '프로필수정' : 
                return setProfileImgModal(true);
            case '규정위반 내역' :
                return handlePenltyModalClick();
            case '비밀번호 변경' :
                return router.push('/changePasswd');
            case '로그아웃' :
                return logout();
        }
    }

    const handlePenltyModalClick = () => {
        if(data) return setPenaltyModal(true)
        else return toast.info('규정 위반 내역이 없습니다.!')
    }

    const logout = () => {
        removeToken();
        router.push('/');
        toast.info('로그아웃되었습니다.');
    }

    return (
        <>
            <S.MenuOverlay isClick={isClick} onClick={() => setIsClick(false)}/>
            <S.MenuModal>
            {
                isClick && menuArr.map((i) => <MenuOption key={i} name={i} onClick={() => handleClick(i)}/>) 
            }
            </S.MenuModal>
        </>
    )
}

export default MenuModal;
import { LogoutIcon } from 'assets/svg';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { removeToken } from 'utils/Libs/removeToken';
import * as S from './style';

const LogoutButton = () => {
    const router = useRouter();
    const handleClick = async ()  => {
        removeToken();
        router.push('/');
        toast.info('로그아웃되었습니다.');
    }

    return (
        <S.LogoutButtonWrapper onClick={handleClick}>
            <LogoutIcon />
            <span>로그아웃</span>
        </S.LogoutButtonWrapper>
    )   
}

export default LogoutButton
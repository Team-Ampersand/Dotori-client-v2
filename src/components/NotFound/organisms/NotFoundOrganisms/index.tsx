import Image from "next/image";
import * as S from "./style";
import NotFoundImg from 'assets/png/404.png';
import Link from "next/link";
import { useRouter } from "next/router";

const NotFoundOrganism = () => {
    const router = useRouter();
    return (
        <S.NotFoundWrapper>
            <Image src={NotFoundImg} alt="404이미지" width={500} height={290}/>
            <S.NotFoundDecs>
                <h2>요청하신 페이지를 찾을수 없습니다.</h2>
                <h5>입력한 주소가 맞는지 다시 한번 확인해 주시기를 바랍니다.</h5>
                <S.HomeUrlBtn onClick={() => router.back()}>이전화면</S.HomeUrlBtn>
            </S.NotFoundDecs>
        </S.NotFoundWrapper>
    )
}

export default NotFoundOrganism
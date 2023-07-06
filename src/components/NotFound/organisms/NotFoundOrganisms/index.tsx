import Image from 'next/image';
import * as S from './style';
import NotFoundImg from 'assets/png/404.png';
import Custom500Img from 'assets/png/500.png';
import { useRouter } from 'next/router';

const NotFoundOrganism = ({ statusCode }: { statusCode: number }) => {
  const router = useRouter();
  return (
    <S.NotFoundWrapper>
      {statusCode === 500 ? (
        <Image src={NotFoundImg} alt="404이미지" width={500} height={290} />
      ) : (
        <Image src={Custom500Img} alt="500이미지" width={500} height={250} />
      )}
      <S.NotFoundDecs>
        {statusCode === 500 ? (
          <>
            <h2>요청하신 페이지를 찾을수 없습니다.</h2>
            <h5>입력한 주소가 맞는지 다시 한번 확인해 주시기를 바랍니다.</h5>
          </>
        ) : (
          <>
            <h2>죄송합니다. 문제가 발생했습니다.</h2>
            <h5>문제를 해결하고 있습니다. 잠시 후에 다시 시도해 주세요.</h5>
          </>
        )}
        {statusCode === 500 && (
          <S.HomeUrlBtn onClick={() => router.back()}>이전화면</S.HomeUrlBtn>
        )}
      </S.NotFoundDecs>
    </S.NotFoundWrapper>
  );
};

export default NotFoundOrganism;

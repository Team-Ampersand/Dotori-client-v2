import Image from 'next/image';
import * as S from './style';
import NotFoundImg from 'assets/png/404.png';
import { useRouter } from 'next/router';
import Custom500Text from 'components/Common/atoms/Items/Custom500Text/Custom500Text';

const NotFoundOrganism = ({ statusCode }: { statusCode: number }) => {
  const router = useRouter();
  return (
    <S.NotFoundWrapper>
      {statusCode === 404 ? (
        <Image src={NotFoundImg} alt="404이미지" width={500} height={290} />
      ) : (
        <Custom500Text />
      )}
      <S.NotFoundDecs>
        {statusCode === 404 ? (
          <>
            <h2>요청하신 페이지를 찾을수 없습니다.</h2>
            <h5>입력한 주소가 맞는지 다시 한번 확인해 주시기를 바랍니다.</h5>
          </>
        ) : (
          <>
            <h2>지금 이 서비스와 연결할 수 없습니다.</h2>
            <h5>
              문제를 해결하기 위해 열심히 노력하고 있습니다 잠시 후 다시
              확인해주세요.
            </h5>
          </>
        )}
        {statusCode === 404 && (
          <S.HomeUrlBtn onClick={() => router.back()}>이전화면</S.HomeUrlBtn>
        )}
      </S.NotFoundDecs>
    </S.NotFoundWrapper>
  );
};

export default NotFoundOrganism;

import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import ListHeader from 'components/Notice/molecules/ListHeader';
import Link from 'next/link';
import useSWR from 'swr';
import { noticePageProps } from 'types';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import * as S from './style';

const NoticeList = () => {
  const role = getRole();
  const { data } = useSWR<noticePageProps[]>(NoticeController.getNotice(role));

  const requestWriter = (role: string) => {
    switch (role) {
      case '사감선생님':
        return '사감선생님';
      case '기숙사자치위원회':
        return '기숙사자치위원회';
      default:
        return '도토리';
    }
  };

  return (
    <S.Layer>
      <ListHeader />
      <S.NoticeContainer>
        {data &&
          Array.from(data).map((item, key) => (
            <Link href={`/notice/${item.id}`} key={item.id}>
              <NoticeItem
                writer={requestWriter(item.roles)}
                date={item.createdTime}
                title={item.title}
                desc={item.content}
                isCurrenPage={false}
                id={item.id}
              />
            </Link>
          ))}
      </S.NoticeContainer>
    </S.Layer>
  );
};

export default NoticeList;

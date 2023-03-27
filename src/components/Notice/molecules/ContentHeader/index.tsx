import { deleteNotice } from 'api/notice';
import { EditPencilIcon, TrashCan } from 'assets/svg';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import {
  isNoticeFetch,
  isNoticeModify,
  isNoticeWrite,
} from 'recoilAtoms/recoilAtomContainer';
import { noticeDetailType } from 'types/components/NoticePage';
import { dateRegex } from 'utils/dateRegex';
import { writerColor } from 'utils/writerColor';
import * as S from './style';

interface props {
  data?: noticeDetailType;
}

const ContentHeader = ({ data }: props) => {
  const router = useRouter();
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeFetch = useSetRecoilState(isNoticeFetch);
  const setNoticeModify = useSetRecoilState(isNoticeModify);

  const koreanRole = () => {
    if (data?.roles === 'ROLE_ADMIN') return '사감선생님';
    else if (data?.roles === 'ROLE_COUNCILLOR') return '기숙사자치위원회';
    else return '도토리';
  };

  const englishRole = () => {
    if (data?.roles === 'ROLE_ADMIN') return 'admin';
    else if (data?.roles === 'ROLE_COUNCILLOR') return 'councillor';
    else return 'developer';
  };

  return (
    <S.ContentHeader>
      <S.HeaderLeftBox>
        <S.Writer>
          <S.WriterDot style={{ background: writerColor[koreanRole()] }} />
          <span>{koreanRole()}</span>
        </S.Writer>
        <h2>{data?.title}</h2>
      </S.HeaderLeftBox>
      <S.HeaderRightBox>
        <small>{dateRegex(data?.createdDate ?? '')}</small>
        <S.IconBox>
          <button
            onClick={() => {
              setNoticeWrite(true);
              setNoticeModify(true);
              router.push(`/notice/${router.query.boardId}`);
            }}
          >
            <EditPencilIcon />
          </button>
          <button
            onClick={async () => {
              setNoticeWrite(false);
              data && (await deleteNotice(englishRole(), data.id));
              setNoticeFetch(true);
              router.push('/notice');
            }}
          >
            <TrashCan />
          </button>
        </S.IconBox>
      </S.HeaderRightBox>
    </S.ContentHeader>
  );
};

export default ContentHeader;

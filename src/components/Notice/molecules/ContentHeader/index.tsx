import { deleteNotice } from 'api/notice';
import { RoleData } from 'assets/data/RoleData';
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
import * as S from './style';
import { mutate } from 'swr';
import { NoticeController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import { getDate } from 'utils/getDate';

interface props {
  data: noticeDetailType;
  boardId: string;
}

const ContentHeader = ({ data, boardId }: props) => {
  const role = getRole();
  const router = useRouter();
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeModify = useSetRecoilState(isNoticeModify);
  const writeDate = `${getDate()[0]}년 ${getDate()[1]}월 ${getDate()[2]}일 ${
    getDate()[3]
  }시 ${getDate()[4]}분`;

  const koreanRole = () => {
    if (data.role === 'ROLE_ADMIN') return '사감선생님';
    else if (data.role === 'ROLE_COUNCILLOR') return '기숙사자치위원회';
    else return '도토리';
  };

  const englishRole = () => {
    if (data.role === 'ROLE_ADMIN') return 'admin';
    else if (data.role === 'ROLE_COUNCILLOR') return 'councillor';
    else return 'developer';
  };

  return (
    <S.ContentHeader>
      <S.HeaderLeftBox>
        <S.Writer>
          <S.WriterDot
            style={{ background: RoleData.WRITERCOLOR[data.role] }}
          />
          <span>{koreanRole()}</span>
        </S.Writer>
        <h2>{data.title}</h2>
      </S.HeaderLeftBox>
      <S.HeaderRightBox>
        <small>{writeDate}</small>
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
              mutate(NoticeController.getNotice(role));
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

import { deleteNotice } from 'api/notice';
import { RoleData } from 'assets/data/RoleData';
import { EditPencilIcon, TrashCan } from 'assets/svg';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { isNoticeModify, isNoticeWrite } from 'recoilAtoms/recoilAtomContainer';
import { mutate } from 'swr';
import { noticeDetailType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import * as S from './style';

interface props {
  data: noticeDetailType;
}

const ContentHeader = ({ data }: props) => {
  const role = getRole();
  const router = useRouter();
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeModify = useSetRecoilState(isNoticeModify);
  const writeDate = `${getDate()[0]}년 ${getDate()[1]}월 ${getDate()[2]}일 ${
    getDate()[3]
  }시 ${getDate()[4]}분`;

  return (
    <S.ContentHeader>
      <S.HeaderLeftBox>
        <S.Writer>
          <S.WriterDot
            style={{ background: RoleData.WRITERCOLOR[data.role] }}
          />
          <span>{RoleData.WRITER[data.role]}</span>
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
            }}
          >
            <EditPencilIcon />
          </button>
          <button
            onClick={async () => {
              setNoticeWrite(false);
              data && (await deleteNotice(role, data.id));
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

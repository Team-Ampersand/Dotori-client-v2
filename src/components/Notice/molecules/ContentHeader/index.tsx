import { deleteNotice } from 'api/notice';
import { RoleData } from 'assets/data/RoleData';
import { EditPencilIcon, TrashCan } from 'assets/svg';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
  const [modal, setModal] = useState(false);
  const createdDate = new Date(data.createdDate);
  const writeDate = `${getDate(createdDate)[0]}년 ${
    getDate(createdDate)[1]
  }월 ${getDate(createdDate)[2]}일 ${getDate(createdDate)[3]}시 ${
    getDate(createdDate)[4]
  }분`;

  const onDelete = async () => {
    setNoticeWrite(false);
    setModal(false);
    data && (await deleteNotice(role, data.id));
    mutate(NoticeController.getNotice(role));
    router.push('/notice');
  };

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
          <button onClick={() => setModal(true)}>
            <TrashCan />
          </button>
        </S.IconBox>
      </S.HeaderRightBox>
      <CommonCheckModal
        title="공지사항 삭제"
        content="정말로 해당 공지사항을 삭제하겠습니까?"
        modalState={modal}
        setModalState={setModal}
        onClick={onDelete}
      />
    </S.ContentHeader>
  );
};

export default ContentHeader;

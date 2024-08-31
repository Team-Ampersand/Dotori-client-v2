import { deleteMusic, getMusic } from 'api/music';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import Link from 'next/link';
import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { myProfileType } from 'types';
import { SongType } from 'types/components/SongPage';
import { getRole } from 'utils/Libs/getRole';
import { MemberController, SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import * as S from './style';
import ResponsiveModal from '../ResponsiveModal';
import Thumbnail from 'components/Song/atoms/Thumbnail';
import MusicTitle from 'components/Song/atoms/MusicTitle';
import StuInfo from 'components/Song/atoms/StuInfo';
import CreateDate from 'components/Song/atoms/CreateDate';
import MusicListButton from 'components/Song/atoms/MusicListButton';
import ResponsiveBtn from 'components/Song/atoms/ResponsiveBtn';

type SongItemProps = {
  data: SongType;
  selectedDate: Date;
};

const SongItem: React.FC<SongItemProps> = ({ data: songData, selectedDate }) => {
  const role = getRole();
  const { data: userData } = useSWR<myProfileType>(MemberController.myProfile);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);

  const createdDate = new Date(songData.createdTime);
  const songDate = `${getDate(createdDate)[3]}시 ${getDate(createdDate)[4]}분`;
  const postDate = `${getDate(selectedDate)[0]}-${getDate(selectedDate)[1]}-${
    getDate(selectedDate)[2]
  }`;

  const onDelete = async (id: number) => {
    const isSuccess = await deleteMusic(role, id);
    if (isSuccess)
      mutate(SongController.music(role), () => getMusic(role, postDate));
  };

  return (
    <Link href={songData.url}>
      <a target="_blank">
        <S.LeftWrapper>
          <Thumbnail thumbnail={songData.thumbnail}/>
          <MusicTitle title={songData.title} stuNum={songData.stuNum} username={songData.username} songDate={songDate} />
        </S.LeftWrapper>
        <StuInfo stuNum={songData.stuNum} username={songData.username} />
        <CreateDate songDate={songDate}/>
        <MusicListButton role={role} songStuNum={songData.stuNum} userStuNum={userData?.stuNum} setDeleteModal={setDeleteModal} />
        <ResponsiveBtn setModalState={setModalState} />
        <CommonCheckModal
          title="신청 음악 삭제"
          content="신청 음악을 정말 삭제하시겠습니까?"
          modalState={deleteModal}
          setModalState={setDeleteModal}
          onClick={() => onDelete(songData.id)}
        />
        {userData && (
          <ResponsiveModal
            modalState={modalState}
            setModalState={setModalState}
            setDelModalState={setDeleteModal}
            songData={songData}
            userData={userData}
          />
        )}
      </a>
    </Link>
  );
};

export default SongItem;

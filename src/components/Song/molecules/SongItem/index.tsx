import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import Link from 'next/link';
import { deleteMusic, getMusic } from 'api/music';
import { getRole } from 'utils/Libs/getRole';
import { MemberController, SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import MusicItemThumbnail from 'components/Song/atoms/MusicItemThumbnail';
import MusicItemTitle from 'components/Song/atoms/MusicItemTitle';
import StuInfo from 'components/Song/atoms/StuInfo';
import CreateDate from 'components/Song/atoms/CreateDate';
import MusicListButton from 'components/Song/atoms/MusicListButton';
import ResponsiveBtn from 'components/Song/atoms/ResponsiveBtn';
import { myProfileType } from 'types';
import { SongType } from 'types/components/SongPage';
import ResponsiveModal from '../ResponsiveModal';
import * as S from './style';

interface SongItemProps {
  data: SongType;
  selectedDate: Date;
}

const SongItem = ({ data: songData, selectedDate }: SongItemProps) => {
  const role = getRole();
  const { data: userData } = useSWR<myProfileType>(MemberController.myProfile);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [heartState, setHeartState] = useState<boolean>(false);

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
          <MusicItemThumbnail
            heartState={heartState}
            setHeartState={setHeartState}
            thumbnail={songData.thumbnail}
          />
          <MusicItemTitle
            title={songData.title}
            stuNum={songData.stuNum}
            username={songData.username}
            songDate={songDate}
          />
        </S.LeftWrapper>
        <StuInfo stuNum={songData.stuNum} username={songData.username} />
        <CreateDate songDate={songDate} />
        <MusicListButton
          role={role}
          songStuNum={songData.stuNum}
          userStuNum={userData?.stuNum}
          setDeleteModal={setDeleteModal}
          heartState={heartState}
          setHeartState={setHeartState}
        />
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
            heartState={heartState}
            setHeartState={setHeartState}
          />
        )}
      </a>
    </Link>
  );
};

export default SongItem;

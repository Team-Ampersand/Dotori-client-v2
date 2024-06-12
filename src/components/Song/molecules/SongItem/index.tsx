import { deleteMusic, getMusic } from 'api/music';
import { EllipsisVerticalIcon, NewPageIcon, TrashcanIcon } from 'assets/svg';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import useSWR, { mutate } from 'swr';
import { myProfileType } from 'types';
import { SongType } from 'types/components/SongPage';
import { getRole } from 'utils/Libs/getRole';
import { preventEvent } from 'utils/Libs/preventEvent';
import { MemberController, SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import * as S from './style';
import ResponsiveModal from '../ResponsiveModal';

const SongItem = ({ data: songData }: { data: SongType }) => {
  const role = getRole();
  const { data: userData } = useSWR<myProfileType>(MemberController.myProfile);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);

  const createdDate = new Date(songData.createdTime);
  const songDate = `${getDate(createdDate)[3]}시 ${getDate(createdDate)[4]}분`;
  const date = useRecoilValue(selectedDate);
  const postDate = `${getDate(date)[0]}-${getDate(date)[1]}-${
    getDate(date)[2]
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
          <S.ImgBox>
            <Image
              src={songData.thumbnail}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
            />
          </S.ImgBox>
          <S.ResponseWrapper>
            <S.Title>{songData.title}</S.Title>
            <S.Info>
              {songData.stuNum + ' ' + songData.username + '•' + songDate}
            </S.Info>
          </S.ResponseWrapper>
        </S.LeftWrapper>
        <S.StuInfo>
          <p>{songData.stuNum}</p>
          <p>{songData.username}</p>
        </S.StuInfo>
        <S.CreateDate>{songDate}</S.CreateDate>
        <S.ButtonContainer>
          {(role !== 'member' ||
            String(songData.stuNum) === userData?.stuNum) && (
            <button
              onClick={(e) => {
                preventEvent(e);
                setDeleteModal(true);
              }}
            >
              <TrashcanIcon />
            </button>
          )}
          <div>
            <NewPageIcon />
          </div>
        </S.ButtonContainer>

        <S.ResponsiveBtn>
          <EllipsisVerticalIcon
            onClick={(e) => {
              preventEvent(e);
              setModalState(true);
            }}
          />
        </S.ResponsiveBtn>
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

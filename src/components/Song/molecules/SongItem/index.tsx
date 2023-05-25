import { deleteMusic, getMusic } from 'api/music';
import NewPageIcon from 'assets/svg/NewPageIcon';
import TrashcanIcon from 'assets/svg/TrashcanIcon';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import useSWR, { mutate } from 'swr';
import { myProfileType } from 'types';
import { SongType } from 'types/components/SongPage';
import { getRole } from 'utils/Libs/getRole';
import { MemberController, SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import * as S from './style';

const songTitle = async (url: string) => {
  const api_key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  return axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${url}&key=${api_key}`
  );
};

const youtube_parser = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[7].length === 11) return match[7];
  return '';
};

const SongItem = ({ data: songData }: { data: SongType }) => {
  const role = getRole();
  const youtubeId = youtube_parser(songData.url);
  const [title, setTitle] = useState('');
  const { data: userData } = useSWR<myProfileType>(MemberController.myProfile);

  const createdDate = new Date(songData.createdTime);
  const songDate = `${getDate(createdDate)[3]}시 ${getDate(createdDate)[4]}분`;
  const date = useRecoilValue(selectedDate);
  const postDate = `${getDate(date)[0]}-${getDate(date)[1]}-${
    getDate(date)[2]
  }`;

  useEffect(() => {
    songTitle(youtubeId).then((res) => {
      setTitle(res?.data.items[0].snippet.title);
    });
  }, [youtubeId]);

  const onDelete = async (id: number) => {
    const isSuccess = await deleteMusic(role, id);
    if (isSuccess)
      mutate(SongController.music(role), () => getMusic(role, postDate));
  };

  return (
    <Link
      href={songData.url}
      onClick={(e: MouseEvent) => {
        e.preventDefault();
      }}
    >
      <a target="_blank">
        <S.LeftWrapper>
          <S.ImgBox>
            <Image
              src={`https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`}
              alt={'image'}
              layout="fill"
              objectFit="cover"
            />
          </S.ImgBox>
          <S.Title>{title}</S.Title>
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
              onClick={(e: MouseEvent) => {
                e.preventDefault();
                onDelete(songData.id);
              }}
            >
              <TrashcanIcon />
            </button>
          )}
          <div>
            <NewPageIcon />
          </div>
        </S.ButtonContainer>
      </a>
    </Link>
  );
};

export default SongItem;

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SongType } from 'types/components/SongPage';
import * as S from './style';
import { dateRegex } from 'utils/dateRegex';
import TrashcanIcon from 'assets/svg/TrashcanIcon';
import NewPageIcon from 'assets/svg/NewPageIcon';
import { getRole } from 'utils/Libs/getRole';
import { deleteMusic, getMusic } from 'api/music';
import { mutate } from 'swr';
import { SongController } from 'utils/Libs/requestUrls';
import { useRecoilValue } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import { getDate } from 'utils/getDate';

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

const SongItem = ({ data }: { data: SongType }) => {
  const role = getRole();
  const youtubeId = youtube_parser(data.url);
  const [title, setTitle] = useState('');
  const createdDate = new Date(data.createdTime);
  const songDate = `${getDate(createdDate)[1]}월 ${getDate(createdDate)[2]}일`;
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
    <S.Layer>
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
        <p>{data.stuNum}</p>
        <p>{data.username}</p>
      </S.StuInfo>
      <S.CreateDate>{songDate}</S.CreateDate>
      <S.ButtonContainer>
        {role !== 'member' && (
          <button
            onClick={() => {
              onDelete(data.id);
            }}
          >
            <TrashcanIcon />
          </button>
        )}
        <Link href={data.url}>
          <a>
            <NewPageIcon />
          </a>
        </Link>
      </S.ButtonContainer>
    </S.Layer>
  );
};

export default SongItem;

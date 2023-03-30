import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SongType } from 'types/components/SongPage';
import * as S from './style';
import { dateRegex } from 'utils/dateRegex';
import TrashcanIcon from 'assets/svg/TrashcanIcon';
import NewPageIcon from 'assets/svg/NewPageIcon';

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
  const youtubeId = youtube_parser(data.url);
  const [title, setTitle] = useState('');
  const createDate = `${dateRegex(String(data.createdTime)).slice(
    6,
    7
  )}월 ${dateRegex(String(data.createdTime)).slice(9, 11)}일`;

  useEffect(() => {
    songTitle(youtubeId).then((res) => {
      setTitle(res?.data.items[0].snippet.title);
    });
  }, [youtubeId]);

  const onDelete = () => {
    return;
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
      <S.CreateDate>{createDate}</S.CreateDate>
      <S.ButtonContainer>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          <TrashcanIcon />
        </button>
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

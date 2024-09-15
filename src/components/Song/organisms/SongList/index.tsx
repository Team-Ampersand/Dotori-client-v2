import { useEffect } from 'react';
import useSWR from 'swr';
import { getMusic } from 'api/music';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import EmptySongBox from 'components/Song/atoms/EmptySongBox';
import SongItem from 'components/Song/molecules/SongItem';
import MusicListSelect from 'components/Song/atoms/MusicListSelect';
import { SongListType } from 'types/components/SongPage';
import * as S from './style';

interface SongListProps {
  selectedDate: Date;
}

const SongList = ({ selectedDate }: SongListProps) => {
  const role = getRole();
  const postDate = `${getDate(selectedDate)[0]}-${getDate(selectedDate)[1]}-${getDate(selectedDate)[2]}`;
  const { data, mutate } = useSWR<SongListType>(
    SongController.music(role),
    () => getMusic(role, postDate),
  );

  useEffect(() => {
    mutate();
  }, [selectedDate]);

  const options = [
    { value: '좋아요순', label: '좋아요순' },
    { value: '신청순', label: '신청순' },
  ];

  return (
    <S.Layer>
      <S.ListHeader>
        <S.MusicDataHeader>
          <h3>신청음악</h3>
          <p>
            <span>{data?.content?.length ?? 0}</span> 개
          </p>
        </S.MusicDataHeader>
        <MusicListSelect options={options} />
      </S.ListHeader>
      <S.ListContainer>
        {data && data.content?.length > 0 ? (
          data.content?.map((item) => (
            <SongItem selectedDate={selectedDate} key={item.id} data={item} />
          ))
        ) : (
          <EmptySongBox />
        )}
      </S.ListContainer>
    </S.Layer>
  );
};

export default SongList;

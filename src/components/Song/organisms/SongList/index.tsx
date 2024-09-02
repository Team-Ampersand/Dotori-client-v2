import { useEffect } from 'react';
import useSWR from 'swr';
import { getMusic } from 'api/music';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import EmptySongBox from 'components/Song/atoms/EmptySongBox';
import SongItem from 'components/Song/molecules/SongItem';
import { SongListType } from 'types/components/SongPage';
import * as S from './style';

type SongListProps = {
  selectedDate: Date;
};

const SongList: React.FC<SongListProps> = ({ selectedDate }) => {
  const role = getRole();
  const postDate = `${getDate(selectedDate)[0]}-${getDate(selectedDate)[1]}-${getDate(selectedDate)[2]}`;
  const { data, mutate } = useSWR<SongListType>(
    SongController.music(role),
    () => getMusic(role, postDate),
  );

  useEffect(() => {
    mutate();
  }, [selectedDate]);

  return (
    <S.Layer>
      <S.ListHeader>
        <h3>신청음악</h3>
        <p>
          <span>{data?.content?.length ?? 0}</span> 개
        </p>
      </S.ListHeader>
      <S.ListContainer>
        {data && data.content?.length > 0 ? (
          data.content?.map((i) => (
            <SongItem selectedDate={selectedDate} key={i.id} data={i} />
          ))
        ) : (
          <EmptySongBox />
        )}
      </S.ListContainer>
    </S.Layer>
  );
};

export default SongList;

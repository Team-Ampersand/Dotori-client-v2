import { getMusic } from 'api/music';
import SongItem from 'components/Song/molecules/SongItem';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import useSWR from 'swr';
import { SongListType } from 'types/components/SongPage';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import * as S from './style';
import { getDate } from 'utils/getDate';

const SongList = () => {
  const role = getRole();
  const date = useRecoilValue(selectedDate);
  const postDate = `${getDate(date)[0]}-${getDate(date)[1]}-${
    getDate(date)[2]
  }`;
  const { data, mutate } = useSWR<SongListType>(
    SongController.music(role),
    () => getMusic(role, postDate)
  );

  useEffect(() => {
    mutate();
  }, [date]);

  return (
    <S.Layer>
      <S.ListHeader>
        <h3>신청음악</h3>
        <p>
          <span>{data?.content?.length ?? 0}</span> 개
        </p>
      </S.ListHeader>
      <S.ListContainer>
        {data && data.content?.map((i) => <SongItem key={i.id} data={i} />)}
      </S.ListContainer>
    </S.Layer>
  );
};

export default SongList;
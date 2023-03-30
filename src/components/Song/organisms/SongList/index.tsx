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

const SongList = () => {
  const role = getRole();
  const date = useRecoilValue(selectedDate);
  const { data, mutate } = useSWR<SongListType>(
    SongController.music(role),
    () => getMusic(role, '2023-03-30')
  );

  useEffect(() => {
    console.log(data?.content);
  }, []);
  return (
    <S.Layer>
      <S.ListHeader>
        <h3>신청음악</h3>
        <p>
          <span>{data?.content.length}</span> 개
        </p>
      </S.ListHeader>
      <S.ListContainer>
        {data && data.content.map((i) => <SongItem key={i.id} data={i} />)}
      </S.ListContainer>
    </S.Layer>
  );
};

export default SongList;

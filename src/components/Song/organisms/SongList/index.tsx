import { getMusic } from 'api/music';
import { MusicalNoteIcon } from 'assets/svg';
import SongItem from 'components/Song/molecules/SongItem';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import useSWR from 'swr';
import { SongListType } from 'types/components/SongPage';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import * as S from './style';

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
        {data && data.content?.length > 0 ? (
          data.content?.map((i) => <SongItem key={i.id} data={i} />)
        ) : (
          <S.EmptySongBox>
            <MusicalNoteIcon />
            <h2>아직 신청한 음악이 없습니다..</h2>
            <p>오른쪽 위에서 음악 신청을 해보세요!</p>
          </S.EmptySongBox>
        )}
      </S.ListContainer>
    </S.Layer>
  );
};

export default SongList;

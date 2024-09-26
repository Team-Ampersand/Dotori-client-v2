import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { getDate } from 'utils/getDate';
import EmptySongBox from 'components/Song/atoms/EmptySongBox';
import SongItem from 'components/Song/molecules/SongItem';
import MusicListSelect from 'components/Song/atoms/MusicListSelect';
import { OptionType, SongListType } from 'types/components/SongPage';
import { fetchMusic } from 'utils/fetchMusic';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';
import * as S from './style';

interface SongListProps {
  selectedDate: Date;
}

const SongList = ({ selectedDate }: SongListProps) => {
  const role = getRole();
  const postDate = `${getDate(selectedDate)[0]}-${getDate(selectedDate)[1]}-${getDate(selectedDate)[2]}`;

  const options = useMemo(
    () => [
      { value: '좋아요순', label: '좋아요순' },
      { value: '신청순', label: '신청순' },
    ],
    [],
  );

  const defaultOption = useMemo(
    () => options.find((option) => option.value === '좋아요순') || options[0],
    [options],
  );

  const [selectedOption, setSelectedOption] =
    useState<OptionType>(defaultOption);

  const swrKey = SongController.music(role);

  const { data, mutate } = useSWR<SongListType>(swrKey, () =>
    fetchMusic(role, postDate, selectedOption.value),
  );

  useEffect(() => {
    mutate();
  }, [selectedDate, selectedOption, mutate]);

  return (
    <S.Layer>
      <S.ListHeader>
        <S.MusicDataHeader>
          <h3>신청음악</h3>
          <p>
            <span>{data?.content?.length ?? 0}</span> 개
          </p>
        </S.MusicDataHeader>
        <MusicListSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
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

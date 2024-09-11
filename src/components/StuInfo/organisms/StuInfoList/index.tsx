import useSWR from 'swr';
import StuInfoItem from 'components/StuInfo/organisms/StuInfoItem';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { stuInfoParams } from 'recoilAtoms/recoilAtomContainer';
import { StuInfoType } from 'types/components/StuInfoPage';
import { apiClient } from 'utils/Libs/apiClient';
import { StuInfoController } from 'utils/Libs/requestUrls';
import * as S from './style';

const StuInfoList = () => {
  const params = useRecoilValue(stuInfoParams);

  const fetcher = async (url: string) => {
    const { data } = await apiClient.get(url, {
      params,
    });

    return { data };
  };

  const { data: searchStuInfoList, mutate } = useSWR(
    StuInfoController.searchStuInfo,
    fetcher
  );
  const { data: stuInfoList } = useSWR(StuInfoController.stuInfo);

  const infoList = stuInfoList?.filter((i: any) => {
    return searchStuInfoList?.data.find((item: any) => {
      return i.id === item.id;
    });
  });

  useEffect(() => {
    mutate();
  }, [params, mutate]);

  return (
    <S.Layer>
      <S.ListHeader>
        <h3>학생</h3>
        <p>
          <span>{infoList?.length}</span> 명
        </p>
      </S.ListHeader>
      {!!infoList &&
        infoList?.map((item: StuInfoType) => (
          <StuInfoItem key={item.id} data={item} />
        ))}
    </S.Layer>
  );
};

export default StuInfoList;

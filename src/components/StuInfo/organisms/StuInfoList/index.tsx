import StuInfoItem from 'components/StuInfo/molecules/StuInfoItem';
import useSWR from 'swr';
import { StuInfoType } from 'types/components/StuInfoPage';
import { StuInfoController } from 'utils/Libs/requestUrls';
import * as S from './style';

const StuInfoList = () => {
  const { data } = useSWR<StuInfoType[]>(StuInfoController.stuInfo);
  return (
    <S.Layer>
      <S.ListHeader>
        <h3>학생</h3>
        <p>
          <span>{data?.length}</span> 명
        </p>
      </S.ListHeader>
      {data && data.map((item) => <StuInfoItem key={item.id} data={item} />)}
    </S.Layer>
  );
};

export default StuInfoList;

import * as S from './style';
import MassageList from 'components/Massage/molecules/MassageList';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { massageRankProps } from 'types';
import { MassageController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';

const MassageTable = () => {
  const role = getRole();
  const { data } = useSWR<massageRankProps[]>(
    MassageController.massageRank(role)
  );

  return (
    <S.TableWrapper>
      <S.ResponseHeader>안마의자</S.ResponseHeader>
      {data && data.length > 0 ? (
        <S.ListWrapper>
          <MassageList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem type={'massage'} />
      )}
    </S.TableWrapper>
  );
};

export default MassageTable;

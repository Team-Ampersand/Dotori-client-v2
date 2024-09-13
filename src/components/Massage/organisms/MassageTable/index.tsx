import MassageList from 'components/Massage/molecules/MassageList';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { massageListType } from 'types';
import { MassageController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import ResponsiveHeader from 'components/Common/atoms/ResponsiveHeader';
import { CupIcon } from 'assets/svg';
import * as S from './style';

const MassageTable = () => {
  const role = getRole();
  const { data } = useSWR<massageListType>(MassageController.massageRank(role));

  return (
    <S.TableWrapper>
      <ResponsiveHeader />
      {data?.list && data.list.length > 0 ? (
        <S.ListWrapper>
          <MassageList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem Icon={CupIcon} message="" subMessage="" />
      )}
    </S.TableWrapper>
  );
};

export default MassageTable;

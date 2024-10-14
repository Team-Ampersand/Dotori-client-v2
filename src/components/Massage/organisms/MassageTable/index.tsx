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
        <NullApplicstionItem 
          Icon={CupIcon} 
          message="안마의자를 신청한 인원이 없습니다.." 
          subMessage="홈에서 안마의자 신청을 해보세요!" 
        />
      )}
    </S.TableWrapper>
  );
};

export default MassageTable;

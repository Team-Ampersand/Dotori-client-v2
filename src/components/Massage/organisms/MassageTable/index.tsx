import * as S from './style';
import MassageList from 'components/Massage/molecules/MassageList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { CupIcon } from 'assets/svg';

const MassageTable = () => {
  return (
    <S.TableWrapper>
      {true ? (
        <S.ListWrapper>
          <MassageList />
        </S.ListWrapper>
      ) : (
        <S.ExceptionWrapper>
          <CupIcon />
          <span>안마의자를 신청한 인원이 없습니다..</span>
          <p>홈에서 안마의자 신청을 해보세요!</p>
        </S.ExceptionWrapper>
      )}
      <SearchFilter filterType={'massage'} />
    </S.TableWrapper>
  );
};

export default MassageTable;

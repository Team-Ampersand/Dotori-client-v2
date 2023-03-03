import * as S from './style';
import MassageList from 'components/Massage/molecules/MassageList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';

const MassageTable = () => {
  return (
    <S.TableWrapper>
      {false ? (
        <S.ListWrapper>
          <MassageList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem type={'massage'} />
      )}
      <SearchFilter filterType={'massage'} />
    </S.TableWrapper>
  );
};

export default MassageTable;

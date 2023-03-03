import * as S from './style';
import SelfStudyList from 'components/SelfStudy/molecules/SelfStudyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { CapIcon } from 'assets/svg';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';

const SelfStudyTable = () => {
  return (
    <S.TableWrapper>
      {false ? (
        <S.ListWrapper>
          <SelfStudyList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem type={'selfstudy'} />
      )}
      <SearchFilter filterType={'selfstudy'} />
    </S.TableWrapper>
  );
};

export default SelfStudyTable;

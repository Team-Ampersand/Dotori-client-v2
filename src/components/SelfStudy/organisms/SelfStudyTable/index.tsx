import * as S from './style';
import SelfStudyList from 'components/SelfStudy/molecules/SelfStudyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { FilterIcon } from 'assets/svg';
import { filterModal } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';

const SelfStudyTable = () => {
  const [modal, setModal] = useRecoilState(filterModal);
  return (
    <S.TableWrapper>
      <S.ResponseHeader>
        자습신청
        <FilterIcon onClick={() => setModal(true)} />
      </S.ResponseHeader>
      {true ? (
        <S.ListWrapper>
          <SelfStudyList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem type={'selfstudy'} />
      )}
      <div>
        <SearchFilter filterType={'selfstudy'} />
      </div>
    </S.TableWrapper>
  );
};

export default SelfStudyTable;

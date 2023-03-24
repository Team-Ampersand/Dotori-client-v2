import * as S from './style';
import SelfStudyList from 'components/SelfStudy/molecules/SelfStudyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { FilterIcon } from 'assets/svg';
import { filterModal, selfStudyList } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';
import { selfstudyListProps } from 'types';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { useEffect } from 'react';

const SelfStudyTable = () => {
  const [userList, setUserList] = useRecoilState(selfStudyList);
  const role = getRole();
  const { data } = useSWR<selfstudyListProps[]>(
    SelfstudyController.selfStudyRank(role)
  );
  const [modal, setModal] = useRecoilState(filterModal);
  useEffect(() => {
    return setUserList(data);
  }, []);

  return (
    <S.TableWrapper>
      <S.ResponseHeader>
        자습신청
        <FilterIcon onClick={() => setModal(true)} />
      </S.ResponseHeader>
      {
        // userlist &&
        // data?.length === 0
        true ? (
          <S.ListWrapper>
            <SelfStudyList />
          </S.ListWrapper>
        ) : (
          <NullApplicstionItem type={'selfstudy'} />
        )
      }
      <div>
        <SearchFilter filterType={'selfstudy'} />
      </div>
    </S.TableWrapper>
  );
};

export default SelfStudyTable;

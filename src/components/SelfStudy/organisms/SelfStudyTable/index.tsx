import * as S from './style';
import SelfStudyList from 'components/SelfStudy/molecules/SelfStudyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { FilterIcon } from 'assets/svg';
import { filterModal, selfStudyList } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';
import { selfstudyRankProps } from 'types';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { useEffect } from 'react';

const SelfStudyTable = () => {
  const [userlist, setUserList] = useRecoilState(selfStudyList);
  const role = getRole();
  const data = useSWR<selfstudyRankProps[]>(
    SelfstudyController.selfStudyRank(role)
  );
  const [modal, setModal] = useRecoilState(filterModal);

  // useEffect(() => {
  //   setUserList(data);
  // });

  return (
    <S.TableWrapper>
      <S.ResponseHeader>
        자습신청
        <FilterIcon onClick={() => setModal(true)} />
      </S.ResponseHeader>
      {
        // data.isValidating
        // userlist?.length === 0
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

import * as S from './style';
import SelfStudyList from 'components/SelfStudy/molecules/SelfStudyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { selfStudyList } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';
import { selfstudyListType } from 'types';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { useEffect } from 'react';
import { selfStudySearch } from 'api/selfStudy';
import ResponsiveHeader from 'components/Common/atoms/ResponsiveHeader';

const SelfStudyTable = () => {
  const [userList, setUserList] = useRecoilState(selfStudyList);
  const role = getRole();
  const { data } = useSWR<selfstudyListType>(
    SelfstudyController.selfStudyRank(role)
  );

  const handelSelfstudySearch = async (
    state: (string | undefined)[],
    name?: string
  ) => {
    await selfStudySearch(
      role,
      name ? name : null,
      state[0] ? state[0] : null,
      state[1] ? state[1].slice(0, 1) : null,
      state[2] ? state[2] : null
    ).then((res) => {
      setUserList(res?.data.list);
    });
  };

  useEffect(() => {
    setUserList(data?.list);
  }, [data]);

  return (
    <S.TableWrapper>
      <ResponsiveHeader />
      {userList && userList.length > 0 ? (
        <S.ListWrapper>
          <SelfStudyList />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem type={'selfstudy'} />
      )}
      <div>
        <SearchFilter
          filterType={'selfstudy'}
          onSubmit={handelSelfstudySearch}
        />
      </div>
    </S.TableWrapper>
  );
};

export default SelfStudyTable;

import SelfStudyList from 'components/SelfStudy/molecules/SelfStudyList';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import NullApplicstionItem from 'components/Common/molecules/NullApplicationItem';
import { selfstudyListProps, selfstudyListType } from 'types';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { selfStudySearch } from 'api/selfStudy';
import ResponsiveHeader from 'components/Common/atoms/ResponsiveHeader';
import { CapIcon } from 'assets/svg';
import * as S from './style';

const SelfStudyTable = () => {
  const role = getRole();
  const [userList, setUserList] = useState<selfstudyListProps[] | undefined>(
    [],
  );

  const { data } = useSWR<selfstudyListType>(
    SelfstudyController.selfStudyRank(role),
  );

  const handleSelfstudySearch = async (
    state: (string | undefined)[],
    name?: string,
  ) => {
    await selfStudySearch(
      role,
      name ? name : null,
      state[0] ?? null,
      state[1]?.slice(0, 1) ?? null,
      state[2] ?? null,
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
          <SelfStudyList userList={userList} />
        </S.ListWrapper>
      ) : (
        <NullApplicstionItem
          Icon={CapIcon}
          message="자습 신청한 인원이 없습니다.."
          subMessage="홈에서 자습 신청을 해보세요!"
        />
      )}
      <div>
        <SearchFilter
          filterType={'selfstudy'}
          onSubmit={handleSelfstudySearch}
        />
      </div>
    </S.TableWrapper>
  );
};

export default SelfStudyTable;

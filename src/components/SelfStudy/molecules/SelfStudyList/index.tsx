import ApplicationItem from 'components/Common/molecules/ApplicationItem';
import { selfstudyListProps } from 'types';

interface Props {
  userList: selfstudyListProps[] | undefined;
}

const SelfStudyList = ({ userList }: Props) => {
  return (
    <>
      {userList &&
        userList.map((item, idx) => (
          <ApplicationItem
            key={idx}
            id={item.id}
            rank={item.rank}
            selfStudyCheck={item.selfStudyCheck}
            memberName={item.memberName}
            gender={item.gender}
            stuNum={item.stuNum}
            lastRank={userList.length > 3 ? userList.length : 0}
            listType="selfstudy"
            profileImage={item.profileImage}
          />
        ))}
    </>
  );
};

export default SelfStudyList;

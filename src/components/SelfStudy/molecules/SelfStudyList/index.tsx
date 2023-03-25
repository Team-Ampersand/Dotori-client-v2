import ApplicationItem from 'components/Common/molecules/ApplicationItem';
import { useRecoilState } from 'recoil';
import { selfStudyList } from 'recoilAtoms/recoilAtomContainer';

const SelfStudyList = () => {
  const [userList] = useRecoilState(selfStudyList);

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
            listType="selfstudy"
          />
        ))}
    </>
  );
};

export default SelfStudyList;

import ApplicationItem from 'components/Common/molecules/ApplicationItem';
import { useRecoilState } from 'recoil';
import {
  selfStudyList,
  selfStudyLookup,
} from 'recoilAtoms/recoilAtomContainer';

const SelfStudyList = () => {
  const [userList] = useRecoilState(selfStudyList);
  const [lookUp] = useRecoilState(selfStudyLookup);

  return (
    <>
      {userList &&
        userList.map((item, idx) => (
          <ApplicationItem
            key={idx}
            index={idx}
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

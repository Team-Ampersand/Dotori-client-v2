import ApplicationItem from 'components/Common/molecules/ApplicationItem';
import { useRecoilState } from 'recoil';
import {
  selfStudyList,
  selfStudyLookup,
} from 'recoilAtoms/recoilAtomContainer';

const SelfStudyList = () => {
  const userOBJ = [
    {
      id: '1',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
      selfStudyCheck: false,
    },
    {
      id: '2',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
      selfStudyCheck: true,
    },
    {
      id: '3',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
      selfStudyCheck: false,
    },
    {
      id: '4',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
      selfStudyCheck: false,
    },
    {
      id: '5',
      gender: 'WOMAN',
      stuNum: '2215',
      memberName: '이름',
      selfStudyCheck: false,
    },
  ];

  const [userlist, setUserList] = useRecoilState(selfStudyList);
  const [lookUp] = useRecoilState(selfStudyLookup);

  return (
    <>
      {!lookUp
        ? userOBJ.map((item, idx) => (
            <ApplicationItem
              key={idx}
              index={idx}
              selfStudyCheck={item.selfStudyCheck}
              memberName={item.memberName}
              gender={item.gender}
              stuNum={item.stuNum}
              listType="selfstudy"
            />
          ))
        : userlist?.map((item, idx) => (
            <ApplicationItem
              key={idx}
              index={idx}
              selfStudyCheck={item.selfStudyCheck}
              memberName={item.memberName}
              gender={item.gender}
              stuNum={item.stuNum}
              listType="selfstudy"
            ></ApplicationItem>
          ))}
    </>
  );
};

export default SelfStudyList;

import ApplicationItem from 'components/Common/molecules/ApplicationItem';

const MassageList = () => {
  const userOBJ = [
    {
      id: '1',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
    },
    {
      id: '2',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
    },
    {
      id: '3',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
    },
    {
      id: '4',
      gender: 'MAN',
      stuNum: '2215',
      memberName: '이름',
    },
    {
      id: '5',
      gender: 'WOMAN',
      stuNum: '2215',
      memberName: '이름',
    },
  ];

  return (
    <>
      {userOBJ &&
        userOBJ.map((item, idx) => (
          <ApplicationItem
            key={idx}
            index={idx}
            selfStudyCheck={null}
            memberName={item.memberName}
            gender={item.gender}
            stuNum={item.stuNum}
            listType="massage"
          />
        ))}
    </>
  );
};

export default MassageList;

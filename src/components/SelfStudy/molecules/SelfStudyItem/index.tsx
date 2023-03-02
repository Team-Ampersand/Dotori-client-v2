import List from 'components/Common/molecules/List';

const SelfStudyItem = () => {
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

	return (
		<>
			{userOBJ &&
				userOBJ.map((item, idx) => (
					<List
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

export default SelfStudyItem;

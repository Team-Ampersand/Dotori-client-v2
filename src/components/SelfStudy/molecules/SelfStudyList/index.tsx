import * as S from './style';
import {
	DefaultProfile,
	GoldMedalIcon,
	SilverMedalIcon,
	BronzeMedalIcon,
	StampIcon,
	MaleIcon,
	FemaleIcon,
} from 'assets/svg';
import SelfstudyCheck from 'components/SelfStudy/atoms/SelfstudyCheck/SelfstudyCheck';

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
					<S.ListWrapper key={idx}>
						<S.Number>{idx + 1}</S.Number>
						<S.Medal>
							{idx === 0 && <GoldMedalIcon />}
							{idx === 1 && <SilverMedalIcon />}
							{idx === 2 && <BronzeMedalIcon />}
							{idx === 49 && <StampIcon />}
						</S.Medal>
						<S.Checkbox>
							<SelfstudyCheck
								// role={role}
								checked={item.selfStudyCheck}
							/>
						</S.Checkbox>
						<S.Profile>
							<DefaultProfile />
						</S.Profile>
						<S.StuInfo>
							<S.Name>
								{item.memberName}
								{item.gender === 'MAN' ? <MaleIcon /> : <FemaleIcon />}
							</S.Name>
							<S.StuNum>{item.stuNum}</S.StuNum>
						</S.StuInfo>
					</S.ListWrapper>
				))}
		</>
	);
};

export default SelfStudyList;

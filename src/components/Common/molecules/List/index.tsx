import * as S from './style';
import {
	BronzeMedalIcon,
	DefaultProfile,
	FemaleIcon,
	GoldMedalIcon,
	MaleIcon,
	SilverMedalIcon,
	StampIcon,
} from 'assets/svg';
import SelfstudyCheck from 'components/SelfStudy/atoms/SelfstudyCheck/SelfstudyCheck';
import { SelfStudyListProps } from 'types';

const List = ({
	index,
	selfStudyCheck,
	memberName,
	gender,
	stuNum,
	listType,
}: SelfStudyListProps) => {
	return (
		<S.ListWrapper>
			<S.Number>{index + 1}</S.Number>
			{listType === 'selfstudy' && (
				<>
					<S.Medal>
						{index === 0 && <GoldMedalIcon />}
						{index === 1 && <SilverMedalIcon />}
						{index === 2 && <BronzeMedalIcon />}
						{index === 49 && <StampIcon />}
					</S.Medal>
					<S.Checkbox>
						<SelfstudyCheck
							// role={role}
							checked={selfStudyCheck}
						/>
					</S.Checkbox>
				</>
			)}
			<S.Profile>
				<DefaultProfile />
			</S.Profile>
			<S.StuInfo>
				<S.Name>
					{memberName}
					{gender === 'MAN' ? <MaleIcon /> : <FemaleIcon />}
				</S.Name>
				<S.StuNum>{stuNum}</S.StuNum>
			</S.StuInfo>
		</S.ListWrapper>
	);
};

export default List;

import * as S from './style';
import SelfStudyItem from 'components/SelfStudy/molecules/SelfStudyItem';
import SearchFilter from 'components/Common/molecules/SearchFilter';
import { CapIcon } from 'assets/svg';

const SelfStudyTable = () => {
	return (
		<S.TableWrapper>
			{true ? (
				<S.ListWrapper>
					<SelfStudyItem />
				</S.ListWrapper>
			) : (
				<S.ExceptionWrapper>
					<CapIcon />
					<span>자습을 신청한 인원이 없습니다..</span>
					<p>홈에서 자습 신청을 해보세요!</p>
				</S.ExceptionWrapper>
			)}
			<SearchFilter filterType={'selfstudy'} />
		</S.TableWrapper>
	);
};

export default SelfStudyTable;

import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import ListHeader from 'components/Notice/molecules/ListHeader';
import * as S from './style';

const NoticeList = () => {
	return (
		<S.Layer>
			<ListHeader />
			<S.NoticeContainer>
				<NoticeItem
					writer={'도토리'}
					date={'2022-07-06'}
					title={'[기숙사 자습실 관련 공지]'}
					desc={
						'많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식'
					}
					isCurrenPage={false}
					id={1}
				/>
				<NoticeItem
					writer={'기숙사자치위원회'}
					date={'2022-07-06'}
					title={'[기숙사 자습실 관련 공지]'}
					desc={
						'많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식'
					}
					isCurrenPage={false}
					id={2}
				/>
				<NoticeItem
					writer={'사감선생님'}
					date={'2022-07-06'}
					title={'[기숙사 자습실 관련 공지]'}
					desc={
						'많은 분들이 급식의 화살표를 눌렀을때 날짜만 변경되는 점이 불편하다고 하여 이제는 급식'
					}
					isCurrenPage={false}
					id={3}
				/>
			</S.NoticeContainer>
		</S.Layer>
	);
};

export default NoticeList;

import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';
import * as S from './style';

const NoticeHeader = () => {
	return (
		<S.Layer>
			<span>공지사항</span>
			<DarkModeButton />
		</S.Layer>
	);
};

export default NoticeHeader;

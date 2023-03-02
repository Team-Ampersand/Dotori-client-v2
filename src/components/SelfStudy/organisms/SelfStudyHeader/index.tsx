import * as S from './style';
import DarkModeButton from 'components/Common/atoms/Buttons/DarkModeBtn';

const SelfStudyHeader = () => {
	return (
		<S.HeaderWrapper>
			<span>자습신청</span>
			<DarkModeButton />
		</S.HeaderWrapper>
	);
};

export default SelfStudyHeader;

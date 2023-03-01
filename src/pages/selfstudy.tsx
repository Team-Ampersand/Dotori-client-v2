import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import {
	SelfStudyHeader,
	SelfStudyTable,
} from 'components/SelfStudy/organisms';
import { SelfstudyTemplates } from 'components/SelfStudy/templates/SelfstudyTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';

const SelfStudyPage = () => {
	UseThemeEffect();
	return (
		<MainTemplates>
			<SideBar />
			<SelfstudyTemplates>
				<SelfStudyHeader />
				<SelfStudyTable />
			</SelfstudyTemplates>
		</MainTemplates>
	);
};

export default SelfStudyPage;

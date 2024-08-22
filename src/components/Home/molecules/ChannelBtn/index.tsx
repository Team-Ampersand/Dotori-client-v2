import ChannelIOScript from "components/Home/atoms/Script/SomeScript"
import UseToggleTheme from "hooks/useToggleTheme";
import { myProfileType } from "types";
import { MemberController } from "utils/Libs/requestUrls";
import useSWR from 'swr';

const ChannelBtn = () => {
    const [theme,] = UseToggleTheme();
    const { data } = useSWR<myProfileType>(MemberController.myProfile);
    return (
        <ChannelIOScript stunumName={`${data?.stuNum}${data?.name}`} theme={theme} />
    )
}

export default ChannelBtn;
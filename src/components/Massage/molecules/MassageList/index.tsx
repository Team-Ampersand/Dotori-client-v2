import ApplicationItem from 'components/Common/molecules/ApplicationItem';
import useSWR from 'swr';
import { massageRankProps } from 'types';
import { getRole } from 'utils/Libs/getRole';
import { MassageController } from 'utils/Libs/requestUrls';

const MassageList = () => {
  const role = getRole();
  const { data } = useSWR<massageRankProps[]>(
    MassageController.massageRank(role)
  );

  return (
    <>
      {data &&
        data.map((item, idx) => (
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

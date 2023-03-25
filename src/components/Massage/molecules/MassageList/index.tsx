import ApplicationItem from 'components/Common/molecules/ApplicationItem';
import useSWR from 'swr';
import { massageListType } from 'types';
import { getRole } from 'utils/Libs/getRole';
import { MassageController } from 'utils/Libs/requestUrls';

const MassageList = () => {
  const role = getRole();
  const { data } = useSWR<massageListType>(MassageController.massageRank(role));

  return (
    <>
      {data?.list &&
        data.list.map((item, idx) => (
          <ApplicationItem
            key={idx}
            id={undefined}
            rank={undefined}
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

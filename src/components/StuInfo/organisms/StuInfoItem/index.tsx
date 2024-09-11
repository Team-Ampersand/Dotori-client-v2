import { cancelSelfStudyBan, selfStudyBan } from 'api/selfStudy'
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import EditModal from 'components/StuInfo/organisms/EditModal';
import { useState } from 'react';
import { mutate } from 'swr';
import { StuInfoType } from 'types/components/StuInfoPage';
import { getRole } from 'utils/Libs/getRole';
import { StuInfoController } from 'utils/Libs/requestUrls';
import StudentInfoButtons from 'components/StuInfo/molecules/StudentInfoButton';
import Role from 'components/StuInfo/atoms/Role';
import ProfileImageBox from 'components/StuInfo/molecules/ProfileImageBox';
import Gender from 'components/StuInfo/atoms/Gender';
import * as S from './style';

interface Props {
  data: StuInfoType;
}

const StuInfoItem = ({ data: stuInfoData }: Props) => {
  const role = getRole();
  const [checkModal, setCheckModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isAbleSelfStudy = stuInfoData.selfStudyStatus === 'CAN';

  const onSelfStudyModal = async (selfStudyStatus: boolean) => {
    const isClear = selfStudyStatus ? '' : ' 해제';

    setTitle(`자습 금지${isClear}`);
    setContent(
      `${stuInfoData.memberName} 학생을 자습 금지${isClear}하겠습니까?`,
    );
    setCheckModal(true);
  };

  const onSubmit = async (selfStudyStatus: boolean) => {
    setCheckModal(false);

    const failed = selfStudyStatus
      ? await selfStudyBan(role, stuInfoData.id)
      : await cancelSelfStudyBan(role, stuInfoData.id);
    if (!failed) return;

    mutate(StuInfoController.stuInfo);
  };

  return (
    <>
      <S.Layer>
        <ProfileImageBox
          memberName={stuInfoData.memberName}
          profileImage={stuInfoData.profileImage}
        />
        <S.StuNum>{stuInfoData.stuNum}</S.StuNum>
        <Gender gender={stuInfoData.gender} />
        <Role role={stuInfoData.role} />
        <StudentInfoButtons
          isAbleSelfStudy={isAbleSelfStudy}
          role={stuInfoData.role}
          onSelfStudyModal={onSelfStudyModal}
          setEditModal={setEditModal}
        />
      </S.Layer>

      <CommonCheckModal
        title={title}
        content={content}
        modalState={checkModal}
        setModalState={setCheckModal}
        onClick={() => onSubmit(isAbleSelfStudy)}
      />

      <EditModal
        isClick={editModal}
        onClick={() => setEditModal(false)}
        data={stuInfoData}
      />
    </>
  );
};

export default StuInfoItem;

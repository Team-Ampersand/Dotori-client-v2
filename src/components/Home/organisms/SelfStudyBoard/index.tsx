import {
  applyCancelStudy,
  applyModifyStudy,
  applySelfStudy,
} from 'api/selfStudy';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import ApplyBox from 'components/Home/molecules/ApplyBox';
import ApplyModifyModal from 'components/Home/molecules/ApplyModifyModal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { applyBoardState, applyPageProps, applyStyleProps } from 'types';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { SelfstudyController } from 'utils/Libs/requestUrls';

const SelfStudyBoard = () => {
  const [info, setInfo] = useState<applyStyleProps>({
    applyStatus: '자습신청',
  });
  const [checkModal, setCheckModal] = useState(false);
  const [applyModifyModal, setApplyModifyModal] = useState(false);
  const role = getRole();
  const { data, mutate } = useSWR<applyPageProps>(
    SelfstudyController.selfStudyInfo(role)
  );

  useEffect(() => {
    if (role === 'admin') return setInfo({ applyStatus: '인원수정' });
    switch (data?.selfStudyStatus) {
      case 'CAN':
        return setInfo({ applyStatus: '자습신청' });
      case 'APPLIED':
        return setInfo({ applyStatus: '신청취소' });
      case 'CANT':
      case 'IMPOSSIBLE':
        return setInfo({ applyStatus: '신청불가' });
    }
  }, [data]);

  const handleApplyBtnClick = () => {
    switch (info.applyStatus) {
      case '자습신청':
      case '신청불가':
        return StudyControll();
      case '신청취소':
        return setCheckModal(true);
      case '인원수정':
        return setApplyModifyModal(true);
    }
  };

  const StudyControll = async (n?: number) => {
    switch (info.applyStatus) {
      case '자습신청':
      case '신청불가':
        {
          const notError = await applySelfStudy(role);
          if (notError) mutate();
        }
        return;
      case '신청취소':
        {
          const notError = await applyCancelStudy(role);
          if (notError) mutate();
        }
        return;
      case '인원수정': {
        const notError = await applyModifyStudy(role, n || 50);
        if (notError) mutate();
      }
    }
  };

  const handleModalClick = (
    setState: Dispatch<SetStateAction<boolean>>,
    n?: number
  ) => {
    setState(false);
    StudyControll(n);
  };

  return (
    <>
      <ApplyBox
        name={'자습신청'}
        url={'/selfstudy'}
        count={data?.count || 0}
        maxCount={data?.limit || 0}
        applyStatus={info.applyStatus}
        onClick={handleApplyBtnClick}
      />
      {checkModal && (
        <CommonCheckModal
          title={'신청취소'}
          content={'오늘 하루동안 다시 신청이 불가능 해요'}
          onClick={() => handleModalClick(setCheckModal)}
          modalState={checkModal}
          setModalState={setCheckModal}
        />
      )}
      {applyModifyModal && (
        <ApplyModifyModal
          name={'자습'}
          onClick={(n) => handleModalClick(setApplyModifyModal, n)}
          modalState={applyModifyModal}
          setModalState={setApplyModifyModal}
          maxCount={data?.limit || 0}
        />
      )}
    </>
  );
};

export default SelfStudyBoard;

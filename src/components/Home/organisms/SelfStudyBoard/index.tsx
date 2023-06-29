import {
  applyCancelStudy,
  applyModifyStudy,
  applySelfStudy,
} from 'api/selfStudy';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import ApplyBox from 'components/Home/molecules/ApplyBox';
import ApplyModifyModal from 'components/Home/molecules/ApplyModifyModal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { applyPageProps, applyStyleProps } from 'types';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import UseToggleTheme from 'hooks/useToggleTheme';
import { toast } from 'react-toastify';

const SelfStudyBoard = () => {
  const [info, setInfo] = useState<applyStyleProps>({
    applyStatus: '자습신청',
  });
  const [checkModal, setCheckModal] = useState(false);
  const [applyModifyModal, setApplyModifyModal] = useState(false);
  const role = getRole();
  const [theme] = UseToggleTheme();
  const { data, mutate } = useSWR<applyPageProps>(
    SelfstudyController.selfStudyInfo(role)
  );

  useEffect(() => {
    if (role === ('admin' || 'councillor'))
      return setInfo({ applyStatus: '인원수정' });
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
        return StudyControll();
      case '신청취소':
        return setCheckModal(true);
      case '인원수정':
        return setApplyModifyModal(true);
      case '신청불가':
        return toast.error('자습신청을 할 수 없는 상태에요');
    }
  };

  const StudyControll = async (n?: number) => {
    switch (info.applyStatus) {
      case '자습신청':
        return (await applySelfStudy(role)) && mutate();
      case '신청취소':
        return (await applyCancelStudy(role)) && mutate();
      case '인원수정':
        return (await applyModifyStudy(role, n || 50)) && mutate();
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
        theme={theme}
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

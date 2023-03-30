import ApplyBox from 'components/Home/molecules/ApplyBox';
import { applyPageProps, applyStyleProps } from 'types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import ApplyModifyModal from 'components/Home/molecules/ApplyModifyModal';
import {
  applyCancelMassage,
  applyMassage,
  applyModifyMassage,
} from 'api/massage';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { MassageController } from 'utils/Libs/requestUrls';

const MassageBoard = () => {
  const [info, setInfo] = useState<applyStyleProps>({
    applyStatus: '안마의자',
  });
  const [checkModal, setCheckModal] = useState(false);
  const [applyModifyModal, setApplyModifyModal] = useState(false);
  const role = getRole();
  const { data, mutate } = useSWR<applyPageProps>(
    MassageController.massage(role)
  );

  useEffect(() => {
    if (role === ('admin' || 'councillor'))
      return setInfo({ applyStatus: '인원수정' });
    switch (data?.massageStatus) {
      case 'CAN':
        return setInfo({ applyStatus: '안마의자' });
      case 'APPLIED':
        return setInfo({ applyStatus: '신청취소' });
      case 'CANT':
      case 'IMPOSSIBLE':
        return setInfo({ applyStatus: '신청불가' });
    }
  }, [data]);

  const handleApplyBtnClick = () => {
    switch (info.applyStatus) {
      case '안마의자':
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
      case '안마의자':
      case '신청불가':
        return (await applyMassage(role)) && mutate();
      case '신청취소':
        return (await applyCancelMassage(role)) && mutate();
      case '인원수정':
        return (await applyModifyMassage(role, n || 50)) && mutate();
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
        name={'안마의자'}
        url={'/massage'}
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
          name={'안마의자'}
          onClick={(n) => handleModalClick(setApplyModifyModal, n)}
          modalState={applyModifyModal}
          setModalState={setApplyModifyModal}
          maxCount={data?.limit || 0}
        />
      )}
    </>
  );
};

export default MassageBoard;

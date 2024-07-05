import {
  applyCancelMassage,
  applyMassage,
  applyModifyMassage,
} from 'api/massage';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import ApplyBox from 'components/Home/molecules/ApplyBox';
import ApplyModifyModal from 'components/Home/molecules/ApplyModifyModal';
import UseToggleTheme from 'hooks/useToggleTheme';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { applyPageProps, applyStyleProps, myProfileType } from 'types';
import { getRole } from 'utils/Libs/getRole';
import { MassageController, MemberController } from 'utils/Libs/requestUrls';

const MassageBoard = () => {
  const [info, setInfo] = useState<applyStyleProps>({
    applyStatus: '안마의자',
  });
  const [checkModal, setCheckModal] = useState(false);
  const [applyModifyModal, setApplyModifyModal] = useState(false);
  const role = getRole();
  const [theme] = UseToggleTheme();
  const { data, mutate } = useSWR<applyPageProps>(
    MassageController.massage(role)
    );
  const { data: myProfile } = useSWR<myProfileType>(MemberController.myProfile);

  useEffect(() => {
    if (role === 'admin') return setInfo({ applyStatus: '인원수정' });
    else if (myProfile?.gender === 'WOMAN') return setInfo({ applyStatus: '신청불가' })
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
        return StudyControll();
      case '신청취소':
        return setCheckModal(true);
      case '인원수정':
        return setApplyModifyModal(true);
      case '신청불가':
        return toast.error('안마의자 신청을 할 수 없는 상태에요');
    }
  };

  const StudyControll = async () => {
    switch (info.applyStatus) {
      case '안마의자':
        return (await applyMassage(role)) && mutate();
      case '신청취소':
        return (await applyCancelMassage(role)) && mutate();
    }
  };

  const clickApplyModify = async (n?: number) => {
    return (await applyModifyMassage(role, n || 50)) && mutate();
  };

  const handleModalClick = (
    setState: Dispatch<SetStateAction<boolean>>,
    n?: number
  ) => {
    setState(false);
    n ? clickApplyModify(n) : StudyControll();
  };

  return (
    <>
      <ApplyBox
        name={'안마의자'}
        url={'/massage'}
        theme={theme}
        count={data?.count || 0}
        maxCount={data?.limit || 0}
        applyStatus={info.applyStatus}
        onClick={handleApplyBtnClick}
        setApplyModifyModal={setApplyModifyModal}
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

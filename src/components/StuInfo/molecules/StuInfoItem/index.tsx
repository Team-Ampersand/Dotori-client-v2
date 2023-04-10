import { cancelSelfStudyBan, selfStudyBan } from 'api/selfStudy';
import { RoleData } from 'assets/data/RoleData';
import { BookIcon, EditPencilIcon } from 'assets/svg';
import BookBenIcon from 'assets/svg/BookBenIcon';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import { useState } from 'react';
import { Palette } from 'styles/globals';
import { mutate } from 'swr';
import { StuInfoType } from 'types/components/StuInfoPage';
import { getRole } from 'utils/Libs/getRole';
import { StuInfoController } from 'utils/Libs/requestUrls';
import * as S from './style';

interface Props {
  data: StuInfoType;
}

const StuInfoItem = ({ data: stuInfoData }: Props) => {
  const role = getRole();
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isAbleSelfStudy = stuInfoData.selfStudyStatus === 'CAN';

  const requestGender = (gender: string) => {
    switch (gender) {
      case 'MAN':
        return '남';
      case 'WOMAN':
        return '여';
      default:
        return '성';
    }
  };

  const onModal = async (selfStudyStatus: boolean) => {
    const isClear = selfStudyStatus ? '' : ' 해제';

    setTitle(`자습 금지${isClear}`);
    setContent(
      `${stuInfoData.memberName} 학생을 자습 금지${isClear}하겠습니까?`
    );
    setModal(true);
  };

  const onSubmit = async (selfStudyStatus: boolean) => {
    setModal(false);

    const failed = selfStudyStatus
      ? await selfStudyBan(role, stuInfoData.id)
      : await cancelSelfStudyBan(role, stuInfoData.id);
    if (!failed) return;

    mutate(StuInfoController.stuInfo);
  };

  return (
    <>
      <S.Layer>
        <S.LeftBox>
          <S.ImgBox></S.ImgBox>
          <p>{stuInfoData.memberName}</p>
        </S.LeftBox>
        <S.StuNum>{stuInfoData.stuNum}</S.StuNum>
        <S.Gender>{requestGender(stuInfoData.gender)}</S.Gender>
        <S.RoleBox>
          <S.Role color={RoleData.WRITERCOLOR[stuInfoData.role]}>
            <S.ColorDot />
            {RoleData.WRITER[stuInfoData.role]}
          </S.Role>
        </S.RoleBox>
        <S.ButtonBox>
          <S.Button
            status={isAbleSelfStudy}
            hide={stuInfoData.role === 'ROLE_ADMIN'}
            onClick={() => onModal(isAbleSelfStudy)}
          >
            {isAbleSelfStudy ? <BookIcon /> : <BookBenIcon />}
          </S.Button>
          <S.Button onClick={() => {}}>
            <EditPencilIcon side={17} color={Palette.NEUTRAL_N20} />
          </S.Button>
        </S.ButtonBox>
      </S.Layer>

      <CommonCheckModal
        title={title}
        content={content}
        modalState={modal}
        setModalState={setModal}
        onClick={() => onSubmit(isAbleSelfStudy)}
      />
    </>
  );
};

export default StuInfoItem;

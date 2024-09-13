import { StuInfoType } from 'types/components/StuInfoPage';
import * as S from './style';

interface Props {
  gender: Pick<StuInfoType, 'gender'>['gender'];
}

const Gender = ({ gender }: Props) => {
  const requestGender = (gender: string) => {
    const genderObject: { [key: string]: string } = {
      MAN: '남',
      WOMAN: '여',
    };
    return genderObject[gender] || '성';
  };
  return <S.Gender>{requestGender(gender)}</S.Gender>;
};

export default Gender;

import { RoleData } from 'assets/data/RoleData';
import { StuInfoType } from 'types/components/StuInfoPage';
import * as S from './style';

interface Props {
  role: Pick<StuInfoType, 'role'>['role'];
}

const Role = ({ role }: Props) => {
  return (
    <S.RoleBox>
      <S.Role color={RoleData.WRITERCOLOR[role]}>
        <S.ColorDot />
        {RoleData.WRITER[role]}
      </S.Role>
    </S.RoleBox>
  );
};

export default Role;

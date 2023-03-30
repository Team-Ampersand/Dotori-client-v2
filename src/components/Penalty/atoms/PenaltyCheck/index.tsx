import * as S from './Style';
import { CheckBox, CheckedBox } from 'assets/svg';
import { useRecoilState } from 'recoil';
import { penaltyStudent } from 'recoilAtoms/recoilAtomContainer';

const PenaltyCheck = ({ name, stuNum }: { name: string; stuNum: string }) => {
  const [penaltyStu, setPenaltyStu] = useRecoilState(penaltyStudent);

  const handleStuCheck = () => {
    if (!penaltyStu.some((i) => i.name === name)) {
      setPenaltyStu((penaltyStu) => [
        ...penaltyStu,
        {
          name: name,
          stuNum: stuNum,
        },
      ]);
    } else {
      setPenaltyStu(penaltyStu.filter((i) => i.name !== name));
    }
  };

  return (
    <S.Checkbox
      onClick={() => {
        handleStuCheck();
      }}
    >
      {penaltyStu.some((i) => i.name === name) ? <CheckedBox /> : <CheckBox />}
    </S.Checkbox>
  );
};

export default PenaltyCheck;

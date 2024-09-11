import UseToggleTheme from 'hooks/useToggleTheme';
import * as S from './style';

interface Props {
  name: string;
  label: string[];
  data: string[];
  onClick: (value: string) => void;
  watch: string;
}

const EditRadioBtn = ({ name, label, data, onClick, watch }: Props) => {
  const [theme] = UseToggleTheme();
  return (
    <S.Layer>
      <span>{name}</span>
      <S.SelectList>
        {data.map((i, key) => {
          return (
            <div key={key}>
              <S.Button
                type="radio"
                checked={watch === i}
                id={label[key]}
                readOnly
                darkMode={theme}
              />
              <label htmlFor={label[key]} onClick={() => onClick(i)}>
                {label[key]}
              </label>
            </div>
          );
        })}
      </S.SelectList>
    </S.Layer>
  );
};

export default EditRadioBtn;

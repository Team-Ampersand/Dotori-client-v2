import * as S from './style';

const EditRadioBtn = ({
  name,
  label,
  data,
  onClick,
  watch,
}: {
  name: string;
  label: string[];
  data: string[];
  onClick: (value: string) => void;
  watch: string;
}) => {
  return (
    <S.Layer>
      <h3>{name}</h3>
      <S.SelectList>
        {data.map((i, key) => {
          return (
            <div key={key}>
              <S.Button
                type="radio"
                checked={watch === i}
                id={label[key]}
                name={name}
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

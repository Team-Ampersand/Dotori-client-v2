import { useEffect, useState } from 'react';
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
  const [a, setA] = useState('');

  return (
    <S.Layer>
      <h3>{name}</h3>
      <S.SelectList>
        {data.map((i, key) => {
          return (
            <div key={key}>
              <S.Button
                type="radio"
                onChange={() => onClick(i)}
                onClick={() => onClick(i)}
                checked={watch === i}
                name={name}
                id={label[key]}
              />
              <label htmlFor={label[key]}>{label[key]}</label>
            </div>
          );
        })}
      </S.SelectList>
    </S.Layer>
  );
};

export default EditRadioBtn;

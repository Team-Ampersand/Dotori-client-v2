import { SearchFilterProps } from 'types';

const FilterItem = ({
  index,
  name,
  item,
  value,
  onClick,
}: SearchFilterProps) => {
  return (
    <>
      <input
        type="radio"
        id={item}
        value={item}
        name={name}
        checked={
          (value === 'MAN' ? '남자' : value === 'WOMEN' ? '여자' : value) ===
          item
        }
        onClick={onClick}
        readOnly
      />
      <label htmlFor={item}>{item}</label>
    </>
  );
};

export default FilterItem;

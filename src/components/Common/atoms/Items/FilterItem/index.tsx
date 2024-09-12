import { SearchFilterProps } from 'types';

const FilterItem = ({ name, item, value, onClick }: SearchFilterProps) => {
  return (
    <>
      <input
        type="radio"
        id={item}
        value={item}
        name={name}
        checked={
          (value === 'MAN' ? '남자' : value === 'WOMAN' ? '여자' : value) ===
          item
        }
        readOnly
      />
      <label htmlFor={item} onClick={onClick}>
        {item}
      </label>
    </>
  );
};

export default FilterItem;

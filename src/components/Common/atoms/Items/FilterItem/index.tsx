import { SearchFilterProps } from 'types';

const FilterItem = ({
	index,
	name,
	item,
	value,
	setValue,
}: SearchFilterProps) => {
	return (
		<>
			<input
				type="radio"
				id={item}
				value={item}
				name={name}
				checked={value === item}
				onClick={() => setValue(index, item)}
			/>
			<label htmlFor={item}>{item}</label>
		</>
	);
};

export default FilterItem;

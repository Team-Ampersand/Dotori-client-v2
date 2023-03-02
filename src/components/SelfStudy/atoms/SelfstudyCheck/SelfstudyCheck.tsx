import React from 'react';
import * as S from './Style';
import { CheckProps } from 'types';
import { CheckBox, CheckedBox } from 'assets/svg';

const SelfstudyCheck = (checked: CheckProps) => {
	return (
		<S.Checkbox>{checked.checked ? <CheckedBox /> : <CheckBox />}</S.Checkbox>
	);
};

export default SelfstudyCheck;

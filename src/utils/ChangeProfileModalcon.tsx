import React from 'react';

import {
	PenaltyIcon,
	PenIcon,
	LockIcon,
	LogoutIcon,
} from 'assets/svg';
import { Palette } from 'styles/globals';

export const ChangeProfileModalcon = () => {
	return {
		'프로필수정' () { return <PenIcon/> },
		'규정위반 내역' () { return <PenaltyIcon/> },
		'비밀번호 변경' () { return <LockIcon color={Palette.NEUTRAL_N20}/> },
		'로그아웃' () { return <LogoutIcon/> },
    }
};
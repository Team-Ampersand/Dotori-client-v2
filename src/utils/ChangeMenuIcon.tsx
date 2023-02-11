import React from 'react';

import {
	Squares2x2Icon,
	BellIcon,
	BookIcon,
	ChairIcon,
	SpeakerIcon,
	PersonIcon,
	Squares2x2BlueIcon,
	BellBlueIcon,
	BookBlueIcon,
	ChairBlueIcon,
	SpeakerBlueIcon,
	PersonBlueIcon,
} from 'assets/svg';
import { Palette } from 'styles/globals';

export const ChangeMenuIcon = (isCurrentRoute:boolean) => {
	return {
		'홈' () { return isCurrentRoute ? <Squares2x2BlueIcon /> : <Squares2x2Icon /> },
		'공지사항' () { return isCurrentRoute ? <BellBlueIcon /> : <BellIcon /> },
		'자습신청' () { return isCurrentRoute ? <BookBlueIcon /> : <BookIcon /> },
		'안마의자 신청' () { return isCurrentRoute ? <ChairBlueIcon /> : <ChairIcon /> },
		'기상음악 신청' () { return isCurrentRoute ? <SpeakerBlueIcon /> : <SpeakerIcon /> },
		'학생정보' () { return isCurrentRoute ? <PersonBlueIcon /> : <PersonIcon color={Palette.NEUTRAL_N30}/> },
		'규정위반' () { return; },
    }
};
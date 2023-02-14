
export interface applyBoardState {
    count: number,
    applyStatus: "신청취소"|"신청불가"|"자습신청"|"안마의자"
}

export interface applyBoxProps extends applyBoardState {
    name: string,
    url: string,
    maxCount: number,
    onClick: () => void,
}

export interface applyStyleProps {
    applyStatus: "신청취소"|"신청불가"|"자습신청"|"안마의자"
}

export interface returnMealdataType {
    date: { datestr: string; day: number },
	mealCode: number,
	setList:  (list: string) => void;
}
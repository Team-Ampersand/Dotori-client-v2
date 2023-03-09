export interface applyStyleProps {
    applyStatus: "신청취소"|"신청불가"|"자습신청"|"안마의자"|"인원수정"
}

export interface applyBoardState extends applyStyleProps {
    count: number,
}

export interface applyBoxProps extends applyBoardState {
    name: string,
    url: string,
    maxCount: number,
    onClick: () => void,
}

export interface returnMealdataType {
    date: { datestr: string; day: number },
	mealCode: number,
	setList:  (list: string) => void;
}
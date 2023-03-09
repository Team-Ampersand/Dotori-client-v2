import { PenaltyMenuProps } from 'types';

export const PenaltyMenuData: PenaltyMenuProps[] = [
  {
    penaltyTitle: '금지 물품 반입',
    menuList: [
      '반입 - 화기류',
      '반입 - 흉기',
      '반입 - 주류',
      '반입 - 담배',
      '반입 - 사행성기구',
      '반입 - 음식',
    ],
  },
  {
    penaltyTitle: '금지 물품 사용',
    menuList: [
      '사용 - 화기류',
      '사용 - 흉기',
      '사용 - 주류',
      '사용 - 담배',
      '사용 - 사행성기구',
      '사용 - 음식',
    ],
  },
  {
    penaltyTitle: '사감 지도 불이행',
    menuList: ['사감의 학습 및 생활지도 불이행'],
  },
  {
    penaltyTitle: '시간 관 소홀 및 이탈 행위',
    menuList: ['지각', '외출', '외박'],
  },
  {
    penaltyTitle: '물품 훼손 및 절도',
    menuList: ['물품훼손', '절도', '갈취'],
  },
  {
    penaltyTitle: '취침 방해',
    menuList: ['타호실 출입', '전자기기 소지'],
  },
  {
    penaltyTitle: '공동 생활 방해 및 위생 상태 불량',
    menuList: [
      '고성방가',
      '지정시간 외 기숙사 출입',
      '세탁물 방치',
      '공공시설물 사용규정 위반',
      '부착된 게시물 훼손',
      '전자기기 소지 혹은 사용',
      '호실 정리정돈 상태 불량',
      '기숙사 환경 오염',
    ],
  },
  {
    penaltyTitle: '애정 행위',
    menuList: ['애정 행위', '성적 행위'],
  },
  {
    penaltyTitle: '기숙사 출입 금지 구역 출입',
    menuList: ['출입 금지 구역 출입'],
  },
  {
    penaltyTitle: '학습실 면학분위기 저해',
    menuList: ['학습실 면학분위기 저해'],
  },
  {
    penaltyTitle: '외부인 출입 관여',
    menuList: ['외부인 출입 허가'],
  },
];

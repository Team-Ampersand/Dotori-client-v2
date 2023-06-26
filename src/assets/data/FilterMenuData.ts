import { filterListProps } from 'types';

export const FilterMenuData: filterListProps[] = [
  {
    filterTitle: '학년',
    filterList: ['1', '2', '3'],
    show: ['selfstudy', 'massage', 'studentdetail', 'penalty'],
  },
  {
    filterTitle: '반',
    filterList: ['1 ', '2 ', '3 ', '4 '],
    show: ['selfstudy', 'massage', 'studentdetail', 'penalty'],
  },
  {
    filterTitle: '성별',
    filterList: ['남자', '여자'],
    show: ['selfstudy', 'studentdetail', 'penalty'],
  },
  {
    filterTitle: '직책',
    filterList: ['학생', '도토리', '자치위원'],
    show: ['studentdetail'],
  },
  {
    filterTitle: '자습',
    filterList: ['자습금지', '자습가능'],
    show: ['studentdetail'],
  },
];

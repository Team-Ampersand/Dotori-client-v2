import { MouseEvent } from 'react';

export const preventEvent = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

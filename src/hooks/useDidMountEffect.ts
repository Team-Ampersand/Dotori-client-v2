import { useRef, useEffect, DependencyList } from 'react';

export const useDidMountEffect = (
  func: { (): void; (): void },
  deps: DependencyList | undefined
) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

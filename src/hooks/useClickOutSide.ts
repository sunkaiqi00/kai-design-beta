import { RefObject, useEffect } from "react";

const useClickOutSide = (ref: RefObject<HTMLElement>, handle: () => void) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
        return
      }
      handle();
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handle]);
}

export default useClickOutSide;

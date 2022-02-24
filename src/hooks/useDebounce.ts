import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(debounceTimer);
    }
  }, [value, delay])
  return debounceValue;
};

export default useDebounce;

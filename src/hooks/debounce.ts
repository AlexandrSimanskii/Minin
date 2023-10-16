import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number=3000) => {
  const [debouncedValue, setDebonsedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebonsedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);

  return debouncedValue;
};

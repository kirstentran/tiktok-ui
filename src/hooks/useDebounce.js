import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);

    // eslint-disable-next-line react-hooks/exhautive-deps
  }, [value]);

  return debouncedValue;
}

export default useDebounce;

import { useEffect, useState } from 'react';

export default function useCountUp(end = 100, duration = 1000, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const interval = setInterval(() => {
      current += 1;
      setValue(current);
      if (current === end) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, [start, end, duration]);

  return value;
}

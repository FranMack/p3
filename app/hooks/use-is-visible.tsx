import { useEffect, useRef, useState } from "react";

export function useIsVisible(threshold = 0.1, oneTime = false) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (oneTime) observer.disconnect();
        } else if (!oneTime) {
          setIsVisible(false);
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, oneTime]);

  return [ref, isVisible] as const;
}

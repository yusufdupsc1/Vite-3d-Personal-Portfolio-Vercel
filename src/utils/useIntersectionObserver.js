import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  options = { root: null, rootMargin: "0px", threshold: 0.2 }
) => {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = targetRef.current;

    if (!node || typeof window === "undefined") {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return { ref: targetRef, isIntersecting };
};

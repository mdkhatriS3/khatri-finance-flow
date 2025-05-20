
import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  threshold?: number;
  rootMargin?: string;
}

export const useAnimateOnScroll = ({ 
  threshold = 0.1,
  rootMargin = "0px"
}: AnimateOnScrollProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, isInView]);
  
  return { ref, isInView };
};

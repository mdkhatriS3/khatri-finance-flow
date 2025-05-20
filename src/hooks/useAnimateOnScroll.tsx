
import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  threshold?: number;
  rootMargin?: string;
  resetOnExit?: boolean;
}

export const useAnimateOnScroll = ({ 
  threshold = 0.1,
  rootMargin = "0px",
  resetOnExit = false
}: AnimateOnScrollProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (resetOnExit) {
          // Reset animation when element is out of view and reset is enabled
          setIsInView(false);
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
  }, [threshold, rootMargin, resetOnExit]);
  
  return { ref, isInView };
};

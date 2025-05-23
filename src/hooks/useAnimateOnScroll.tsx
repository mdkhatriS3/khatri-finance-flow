
import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  threshold?: number;
  rootMargin?: string;
  resetOnExit?: boolean;
  once?: boolean;
}

export const useAnimateOnScroll = ({ 
  threshold = 0.1,
  rootMargin = "0px",
  resetOnExit = false,
  once = false
}: AnimateOnScrollProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If element enters viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          // If once is true, we disconnect the observer after first intersection
          if (once) {
            observer.disconnect();
          }
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
  }, [threshold, rootMargin, resetOnExit, once]);
  
  return { ref, isInView };
};

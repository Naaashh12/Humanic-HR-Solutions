import { useEffect, useRef, useState } from 'react';

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * @param options - IntersectionObserver options
 * @returns React ref to attach to element, and isVisible state
 */
export function useScrollAnimation(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, defaultOptions);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
}

/**
 * Hook for animated count-up numbers
 * @param from - Starting number
 * @param to - Ending number
 * @param duration - Animation duration in milliseconds
 * @param shouldStart - Whether animation should run
 * @returns Current count value
 */
export function useCountUp(
  from: number = 0,
  to: number = 100,
  duration: number = 2000,
  shouldStart: boolean = true
) {
  const [count, setCount] = useState(from);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) {
      setCount(from);
      return;
    }

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const currentCount = Math.floor(from + (to - from) * progress);
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [from, to, duration, shouldStart]);

  return count;
}

/**
 * Hook for tracking scroll position and progress
 * @returns Object with scroll position and scroll percentage (0-1)
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolledTop = window.scrollY;
      const totalScroll = scrolledTop / documentHeight;

      setScrollProgress(totalScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}

/**
 * Hook for managing scroll lock (preventing body scroll)
 * @param isLocked - Whether to lock scroll
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [isLocked]);
}

/**
 * Hook for mouse position tracking (for custom cursor)
 * @returns Object with current mouse position
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

/**
 * Hook for debounced value
 * @param value - Value to debounce
 * @param delay - Debounce delay in milliseconds
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook for detecting mobile device
 * @returns Boolean indicating if device is mobile
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

/**
 * Hook for detecting touch support
 * @returns Boolean indicating if device supports touch
 */
export function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouchSupported = () => {
      return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        ((navigator as any).msMaxTouchPoints > 0)
      );
    };

    setIsTouchDevice(isTouchSupported());
  }, []);

  return isTouchDevice;
}

/**
 * Hook for managing loading state with callback
 * @param callback - Async function to execute
 * @returns Object with loading state and error
 */
export function useAsync<T>(
  callback: () => Promise<T>
): {
  loading: boolean;
  error: Error | null;
  execute: () => Promise<T | null>;
} {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await callback();
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      setLoading(false);
      return null;
    }
  };

  return { loading, error, execute };
}

/**
 * Hook for detecting element visibility on scroll with animation trigger
 * @param triggerOnce - Whether animation should trigger only once
 * @returns Object with ref and animation classes
 */
export function useInViewAnimation(triggerOnce = true) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce]);

  return {
    ref,
    isInView: triggerOnce ? hasTriggered : isInView,
  };
}

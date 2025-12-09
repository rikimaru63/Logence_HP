"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  enabled?: boolean;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!enabled || hasStarted.current) return;

    const startAnimation = () => {
      hasStarted.current = true;
      startTimeRef.current = 0;

      const easeOutQuart = (t: number): number => {
        return 1 - Math.pow(1 - t, 4);
      };

      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = start + (end - start) * easedProgress;

        setCount(currentValue);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setIsComplete(true);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, start, end, duration, delay]);

  const formattedValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { count, formattedValue, isComplete };
}

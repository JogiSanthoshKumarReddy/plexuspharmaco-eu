"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ value = 2.5, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(value.toString());

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      setTimeout(() => {
        motionValue.set(value);
      }, 50);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      // Only update if it's actually changing, preventing SSR mismatch
      if (latest > 0 || displayValue === "0") {
        setDisplayValue(Math.floor(latest).toLocaleString());
      }
    });
  }, [springValue, displayValue]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

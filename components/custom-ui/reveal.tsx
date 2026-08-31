"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/** Subtle, performant scroll reveal used across the page. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  viewportMargin = "-80px",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  viewportMargin?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Animated integer counter that runs when scrolled into view. */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}0${suffix}`}
    </span>
  );
}

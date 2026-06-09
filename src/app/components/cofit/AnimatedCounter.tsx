import { motion, useMotionValue, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  format?: (n: number) => string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  className = "",
  style = {},
  format,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Shared 0→1 progress driven by a fixed-duration tween, so multiple
  // counters with the same `duration` always finish at the same moment.
  const progress = useMotionValue(0);

  const display = useTransform(progress, (p) => {
    const n = Math.floor(value * p);
    return format ? format(n) : n.toLocaleString();
  });

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    let start = 0;
    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      progress.set(eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, duration, progress]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{display}</motion.span>
      {suffix && <span>{suffix}</span>}
    </motion.div>
  );
}

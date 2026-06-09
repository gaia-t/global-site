import { motion, useInView } from "motion/react";
import { useMemo, useRef } from "react";

export default function FloatingParticles() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px" });

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 8 + Math.random() * 16,
      })),
    [],
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            bottom: -20,
          }}
          animate={
            inView
              ? {
                  y: [0, -window.innerHeight - 100],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5],
                }
              : { y: 0, opacity: 0 }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: inView ? Infinity : 0,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

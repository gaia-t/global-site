import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import FloatingParticles from "./FloatingParticles";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 800], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1730740505666-2583dc3685eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Healthy lifestyle"
          className="w-full h-full object-cover"
        />
        <FloatingParticles />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-8 py-32 z-20"
        style={{ opacity }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="mb-4 text-white"
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Flex8 Slim Program
          </motion.h1>

          <motion.p
            className="mb-4 text-white"
            style={{
              fontSize: '28px',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            The Diet App That Actually Gets You.
          </motion.p>

          <motion.p
            className="mb-8 text-white/90"
            style={{
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Personalized nutrition guidance that understands your lifestyle — powered by science and supported by expert care.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MagneticButton
              href="https://hi.cofit.me/o9YlF"
              className="text-white shadow-lg"
              style={{
                backgroundColor: 'var(--color-secondary)',
              }}
            >
              Get started
            </MagneticButton>
            <MagneticButton
              href="#how-it-works"
              className="text-white backdrop-blur-sm border border-white/70"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              }}
            >
              Learn How It Works
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

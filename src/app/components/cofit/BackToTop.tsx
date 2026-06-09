import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full shadow-2xl z-40"
      style={{
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
      }}
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: '#0f6f4b',
      }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </motion.button>
  );
}

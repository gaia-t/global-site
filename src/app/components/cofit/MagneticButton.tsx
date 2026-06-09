import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
}

const SPRING = { damping: 20, stiffness: 200 };

export default function MagneticButton({
  children,
  href,
  onClick,
  type,
  className = "",
  style,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `${className} px-10 py-4 rounded-full font-medium transition-all duration-300 text-lg inline-block`,
    style: { ...style, x: springX, y: springY },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a ref={buttonRef as React.RefObject<HTMLAnchorElement>} href={href} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      type={type}
      {...commonProps}
    >
      {children}
    </motion.button>
  );
}

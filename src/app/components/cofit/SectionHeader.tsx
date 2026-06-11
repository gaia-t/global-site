import { motion } from "motion/react";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
  headingSize?: number;
  subheadingMaxWidth?: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  headingSize = 48,
  subheadingMaxWidth = "max-w-3xl",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const mxClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <motion.p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-primary, #169E6B)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        style={{
          fontSize: `clamp(${Math.round(headingSize * 0.62)}px, ${headingSize / 16}vw, ${headingSize}px)`,
          fontWeight: 700,
          lineHeight: 1.2,
          color: "var(--color-text)",
        }}
        className={subheading ? "mb-5" : ""}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          style={{
            fontSize: "20px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--color-text-secondary)",
          }}
          className={`${subheadingMaxWidth} ${mxClass}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}

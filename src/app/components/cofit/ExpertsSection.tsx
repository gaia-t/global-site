import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const PLACEHOLDERS = [
  { gradient: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))", initials: "RD" },
  { gradient: "linear-gradient(135deg, var(--color-secondary), var(--color-accent-blue))", initials: "MS" },
  { gradient: "linear-gradient(135deg, var(--color-accent-blue), var(--color-primary))", initials: "CN" },
  { gradient: "linear-gradient(135deg, var(--color-accent-orange), var(--color-secondary))", initials: "PhD" },
];

export default function ExpertsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#f0fffe]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              eyebrow="OUR EXPERTS"
              heading="Registered dietitians, ready to support you"
              subheading="Each dietitian goes through rigorous vetting, including credential verification and an in-depth interview."
              align="left"
              headingSize={48}
              subheadingMaxWidth=""
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              {PLACEHOLDERS.slice(0, 2).map((p, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-2xl shadow-lg flex items-center justify-center"
                  style={{ aspectRatio: "3/4", background: p.gradient }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: "56px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                    {p.initials}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4 pt-12">
              {PLACEHOLDERS.slice(2).map((p, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-2xl shadow-lg flex items-center justify-center"
                  style={{ aspectRatio: "3/4", background: p.gradient }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: "56px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                    {p.initials}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

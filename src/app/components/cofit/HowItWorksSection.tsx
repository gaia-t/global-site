import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    step: 1,
    title: "1-on-1 Consultation",
    description:
      "Begin with a comprehensive video or phone analysis by a certified nutritionist to understand your baseline and hormone type.",
    image:
      "https://images.unsplash.com/photo-1675270690434-aa99f4871e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Nutritionist consultation",
    gradient: "from-[#169E6B] to-[#00C2E0]",
  },
  {
    step: 2,
    title: "Customized Flexi-Carb Plan",
    description:
      "Receive a tailored diet plan designed for your actual lifestyle, social events, and cultural food preferences.",
    image:
      "https://images.unsplash.com/photo-1588177806780-51d021f6b2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Health tracking app",
    gradient: "from-[#004F51] to-[#169E6B]",
  },
  {
    step: 3,
    title: "Daily Support & Adjustments",
    description:
      "Stay on track with online support from 9 AM to 11 PM. Weekend diet analyses and adjustments provided every Monday.",
    image:
      "https://images.unsplash.com/photo-1660777748008-68d206e4a632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Healthy meals",
    gradient: "from-[#FFB46E] to-[#169E6B]",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-32 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          heading="Change behavior, live better."
          subheading="A science-backed approach combining human expertise with intelligent technology."
          headingSize={48}
          subheadingMaxWidth="max-w-2xl"
          className="mb-20"
        />

        {STEPS.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={s.step}
              className={`grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 ${
                i < STEPS.length - 1 ? "mb-32" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative group ${reverse ? "max-md:order-1 md:col-start-2 md:row-start-1" : ""}`}
              >
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${s.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />
                <motion.img
                  src={s.image}
                  alt={s.alt}
                  className="w-full rounded-2xl shadow-2xl relative"
                  style={{ aspectRatio: "4/5", objectFit: "cover" }}
                  whileHover={{ scale: 1.02, rotateY: reverse ? -2 : 2 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-8 ${reverse ? "max-md:order-2 md:col-start-1 md:row-start-1" : ""}`}
              >
                <div>
                  <motion.div
                    className="mb-4 inline-block px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: "#f0fffe",
                      color: "var(--color-primary)",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  >
                    Step {s.step}
                  </motion.div>
                  <h3
                    className="mb-4"
                    style={{ fontSize: "32px", fontWeight: 700, color: "var(--color-text)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

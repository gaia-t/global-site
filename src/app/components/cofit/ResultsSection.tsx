import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeader from "./SectionHeader";

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [800, 2000], ["0%", "20%"]);
  return (
    <section ref={sectionRef} className="relative py-32 bg-[#f7fbf9]">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          heading="Real people, real results"
          subheading="Sessions, meals, and outcomes from Flex8 members"
          headingSize={48}
          subheadingMaxWidth="max-w-2xl"
          className="mb-20"
        />

        <div className="grid grid-cols-3 gap-8 mb-20 max-md:grid-cols-1">
          {[
            { value: 40000, suffix: "+", label: "Clients Served", color: "#169E6B" },
            { value: 93, suffix: "%", label: "Satisfaction Rate", color: "#004F51" },
            { value: 100, suffix: "+", label: "Board-Certified Dietitians", color: "#00C2E0" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="mb-3"
                style={{
                  fontSize: '64px',
                  fontWeight: 700,
                  color: stat.color,
                }}
              />
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative"
          style={{ height: '500px', borderRadius: '24px', overflow: 'hidden' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1758874960056-07aa3d0afa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Success story"
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '24px',
              objectPosition: 'center 30%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center z-10">
            <div className="max-w-2xl p-16">
              <p
                className="mb-6 text-white/90"
                style={{
                  fontSize: '24px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                "In 4 months, I've lost 15kg and my blood sugar is finally under control. My nutritionist helped me understand what works for my body. This isn't a diet—it's a lifestyle change that actually sticks."
              </p>
              <div className="text-white">
                <p style={{ fontSize: '18px', fontWeight: 600 }}>Sarah Chen</p>
                <p style={{ fontSize: '14px', opacity: 0.8 }}>Taipei • Type 2 Diabetes Management</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const PILLARS = [
  {
    num: "01",
    icon: "📊",
    title: "Science-Based Assessment",
    desc: "Clinical hormone-type analysis identifies the root cause of your weight challenges — not just surface-level calories.",
    points: ["Hormone-type analysis", "Personalized nutrition strategy", "Root-cause identification"],
  },
  {
    num: "02",
    icon: "👩‍⚕️",
    title: "Expert Nutritionists",
    desc: "Registered nutritionists review your profile and respond to your daily check-ins with personalized feedback — backed by AI-powered real-time dietary analysis available around the clock.",
    points: ["Daily personalized guidance", "AI dietary analysis, 24/7", "1-on-1 video consultations"],
  },
  {
    num: "03",
    icon: "🌱",
    title: "Habit Transformation",
    desc: "We don't just help you lose weight — we help you build the mindset and habits to keep it off for life.",
    points: ["Sustainable lifestyle change", "Behavioral coaching", "Long-term results"],
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-32 bg-[#f7fbf9]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          heading="A Smarter Way to Lose Weight"
          subheading="Flex8 isn't another diet. It's an 8-week guided transformation designed to help you understand your body, improve your eating habits, and create lasting change with expert support."
          headingSize={48}
          subheadingMaxWidth="max-w-3xl"
          className="mb-20"
        />

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              className="bg-white rounded-2xl p-10 relative overflow-hidden"
              style={{
                boxShadow: '0 1px 3px rgba(15,31,26,0.04), 0 12px 32px -8px rgba(15,31,26,0.09)',
                border: '1px solid rgba(0,79,81,0.06)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px -12px rgba(0,79,81,0.14)', transition: { duration: 0.3 } }}
            >
              {/* Big ghost number */}
              <div
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: '52px',
                  color: 'rgba(0,79,81,0.07)',
                  lineHeight: 1,
                  marginBottom: '10px',
                  userSelect: 'none',
                }}
              >
                {p.num}
              </div>

              <div style={{ fontSize: '30px', marginBottom: '14px' }}>{p.icon}</div>

              <h3
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: '21px',
                  color: 'var(--color-text)',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.75,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '18px',
                }}
              >
                {p.desc}
              </p>

              <div className="flex flex-col gap-2">
                {p.points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-center gap-2"
                    style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-secondary)' }}
                  >
                    <span>✓</span>
                    {pt}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

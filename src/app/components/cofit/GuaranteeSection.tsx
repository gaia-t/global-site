import { motion } from "motion/react";

const BADGES = [
  { icon: "🛡️", title: "Satisfaction Guarantee", desc: "We stand behind every program we offer." },
  { icon: "💸", title: "Clear Refund Policy", desc: "Refund available within 3 days of program kick-off." },
  { icon: "🔒", title: "Low-Risk Commitment", desc: "No long-term lock-in. Start with confidence." },
];

export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-4xl mb-4">✦</div>
          <h2 className="mb-3" style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, lineHeight: 1.2, color: 'var(--color-text)' }}>
            Try With Confidence
          </h2>
          <p className="mb-10 max-w-xl mx-auto" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
            We believe in empowering consumers with confidence and transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {BADGES.map((badge, i) => (
            <motion.div
              key={i}
              className="p-7 rounded-2xl"
              style={{
                background: '#f7fbf9',
                border: '1px solid rgba(0,79,81,0.1)',
                boxShadow: '0 1px 2px rgba(15,31,26,0.04)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h3 className="mb-3 font-bold" style={{ fontSize: '20px', color: 'var(--color-text)' }}>{badge.title}</h3>
              <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

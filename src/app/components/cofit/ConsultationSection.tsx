import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function ConsultationSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      id="consultation"
      style={{ background: '#fafef9' }}
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,79,81,0.15) 30%, rgba(22,158,107,0.25) 50%, rgba(0,79,81,0.15) 70%, transparent 100%)' }} />

      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: '#f0fffe', color: 'var(--color-primary)', border: '1px solid rgba(0,79,81,0.12)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          >
            Not sure yet?
          </motion.div>

          <h2
            className="mb-5"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--color-text)',
            }}
          >
            Start with a 1-on-1{' '}
            <span style={{ color: 'var(--color-primary)' }}>Nutritionist Consultation</span>
          </h2>

          <p
            className="mb-4 max-w-2xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}
          >
            Unsure if the 8-week program is right for you? Book a standalone 30-minute private session.
            Your RD analyzes your body composition, eating habits, and weight root cause —
            helping you decide on the best next step.
          </p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <MagneticButton
              href="https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3"
              className="text-white shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)', fontSize: '16px', paddingLeft: '2rem', paddingRight: '2rem' }}
            >
              Book in English
            </MagneticButton>
            <MagneticButton
              href="https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3"
              className="text-white"
              style={{ backgroundColor: 'var(--color-secondary)', fontSize: '16px', paddingLeft: '2rem', paddingRight: '2rem' }}
            >
              預約中文諮詢
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,79,81,0.1) 50%, transparent 100%)' }} />
    </section>
  );
}

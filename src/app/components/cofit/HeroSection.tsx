import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const TRUST_STATS = [
  { num: "40,000+", label: "People Served" },
  { num: "93%",     label: "Satisfaction Rate" },
  { num: "4.8 ★",  label: "App Store" },
  { num: "4.9 ★",  label: "Google Reviews" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 360], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #004F51 0%, #006b6e 50%, #007a7e 100%)',
        paddingTop: '80px',
      }}
    >
      {/* Subtle dot-cross pattern (same as reference) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 w-full grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12"
        style={{ opacity: contentOpacity }}
      >
        {/* ── LEFT: text ── */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#7fffd4' }} />
            <span className="text-white/85 text-sm font-medium">Science-backed · Expert-supported</span>
          </motion.div>

          <motion.h1
            className="text-white mb-5"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(36px, 4vw, 58px)',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Understand Your Body.{' '}
            <em style={{ fontStyle: 'italic', color: '#a8e6cf' }}>Lose Weight Smarter.</em>
          </motion.h1>

          <motion.p
            className="mb-9"
            style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', maxWidth: 480 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Science-backed nutrition guidance and expert support designed for real life.
          </motion.p>

          <motion.div
            className="flex gap-3 flex-wrap mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <MagneticButton
              href="#pricing"
              className="font-semibold shadow-xl"
              style={{ background: 'white', color: '#004F51', fontSize: '15px' }}
            >
              View Programs →
            </MagneticButton>
            <MagneticButton
              href="https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3"
              className="text-white border border-white/25 font-medium"
              style={{ background: 'rgba(255,255,255,0.12)', fontSize: '15px' }}
            >
              Book a Consultation
            </MagneticButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex items-center gap-0 flex-wrap max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {TRUST_STATS.map((s, i) => (
              <div key={i} className="flex items-center max-sm:block">
                <div className="pr-6 max-sm:pr-0">
                  <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: '22px', color: 'white', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{s.label}</div>
                </div>
                {i < TRUST_STATS.length - 1 && (
                  <div className="h-9 mr-6 max-sm:hidden" style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: framed image + floating badges ── */}
        <motion.div
          className="relative flex justify-center items-center max-md:hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {/* Image card frame */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              maxWidth: 420,
              borderRadius: 24,
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.08)',
              aspectRatio: '3/4',
              boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src="/hero-woman.jpg"
              alt="Confident healthy woman"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
              }}
            />
            {/* inner vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,60,62,0.35) 100%)' }}
            />
          </div>

          {/* Floating badge: bottom-left — avg weight lost */}
          <motion.div
            className="absolute flex items-center gap-3"
            style={{
              bottom: 32, left: -28,
              background: 'white', borderRadius: 18,
              padding: '14px 20px',
              boxShadow: '0 16px 48px rgba(0,79,81,0.22)',
              minWidth: 210,
            }}
            initial={{ opacity: 0, x: -16, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0 text-xl"
              style={{ width: 42, height: 42, borderRadius: 12, background: '#e6f9f2' }}
            >
              📉
            </div>
            <div>
              <div style={{ fontSize: 11, color: '#6b8f90', marginBottom: 2 }}>Average Result per User</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1a2e2f', lineHeight: 1.2 }}>−5.2 kg in 8 weeks</div>
            </div>
          </motion.div>

          {/* Floating badge: top-right — satisfaction */}
          <motion.div
            className="absolute flex items-center gap-3"
            style={{
              top: 32, right: -28,
              background: '#004F51', borderRadius: 18,
              padding: '14px 20px',
              boxShadow: '0 16px 48px rgba(0,79,81,0.38)',
              minWidth: 190,
            }}
            initial={{ opacity: 0, x: 16, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0 text-lg"
              style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(255,255,255,0.15)' }}
            >
              ⭐
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>User Satisfaction Rate</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'white', lineHeight: 1 }}>93%</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile: text-over-photo fallback */}
      <div className="absolute inset-0 md:hidden pointer-events-none" style={{ background: 'rgba(0,79,81,0)' }} />
    </section>
  );
}

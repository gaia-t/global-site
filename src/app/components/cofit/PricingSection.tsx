import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

function CheckIcon({ color = "#169E6B" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="6.5" stroke={color} strokeWidth="1.2"/>
      <path d="M4.5 7l2 2 3-3" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14"/>
      <rect x="3" y="7" width="12" height="10" rx="2"/>
    </svg>
  );
}

const SLIM_FEATURES = [
  "Hormone body-type quiz & clinical assessment",
  "8-week personalized meal plan",
  "Dedicated registered dietitian",
  "Daily meal photo check-in & feedback",
  "2 video consultation sessions",
  "24/7 AI dietary assistant, always available",
  "App access & habit tracking",
  "Cash reward on goal achievement",
];

// ── Upsell modal ──────────────────────────────────────────────────────────────
function UpsellModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<'slim' | 'premium' | 'consult'>('premium');

  const SLIM_URL    = "https://hi.cofit.me/o9YlF";
  const PREMIUM_URL = "https://hi.cofit.me/o9YlF";
  const CONSULT_URL = "https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3";

  function RadioDot({ active }: { active: boolean }) {
    return (
      <div
        className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
        style={{ borderColor: active ? 'var(--color-primary)' : 'rgba(0,79,81,0.22)' }}
      >
        {active && <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--color-primary)' }} />}
      </div>
    );
  }

  const ctaLabel =
    selected === 'consult' ? 'Book My 30-min Consultation' :
    selected === 'premium' ? 'Get Started — Flex8 Slim Premium' :
    'Get Started — Flex8 Slim';

  const ctaHref =
    selected === 'consult' ? CONSULT_URL :
    selected === 'premium' ? PREMIUM_URL :
    SLIM_URL;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ overflowY: 'auto' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: 'rgba(0,25,26,0.72)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl w-full my-4"
        style={{ maxWidth: 560, zIndex: 1 }}
        initial={{ scale: 0.93, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.93, y: 24 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10"
          style={{ background: 'rgba(0,0,0,0.06)', color: '#888' }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M1 1l9 9M10 1L1 10"/>
          </svg>
        </button>

        {/* Header */}
        <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(0,79,81,0.08)' }}>
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--color-secondary)' }}>ONE LAST STEP</p>
          <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.35, paddingRight: 36 }}>
            Would you like more video consultations?
          </h3>
          <p className="mt-1.5" style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
            Live 1-on-1 sessions to review your progress and adjust your plan with your dietitian.
          </p>
        </div>

        <div className="px-7 pt-5 pb-2 space-y-3">
          {/* Option A: Slim */}
          <button
            className="w-full text-left rounded-2xl transition-colors"
            style={{
              padding: '15px 18px',
              background: 'white',
              border: `2px solid ${selected === 'slim' ? 'var(--color-primary)' : 'rgba(0,79,81,0.13)'}`,
              outline: 'none',
            }}
            onClick={() => setSelected('slim')}
          >
            <div className="flex gap-3 items-center">
              <RadioDot active={selected === 'slim'} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold" style={{ fontSize: '15px', color: 'var(--color-text)' }}>Flex8 Slim</span>
                  <div className="flex items-baseline gap-1 flex-shrink-0">
                    <span style={{ fontSize: '11px', color: '#c0c0c0', textDecoration: 'line-through' }}>$950</span>
                    <span className="font-bold" style={{ fontSize: '21px', color: 'var(--color-text)', lineHeight: 1 }}>$649</span>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>USD</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                  <VideoIcon />
                  <span style={{ fontSize: '12px' }}>2 video consultations included</span>
                </div>
              </div>
            </div>
          </button>

          {/* Option B: Premium — "Most Popular" banner */}
          <button
            className="w-full text-left rounded-2xl overflow-hidden transition-colors"
            style={{
              background: 'white',
              border: `2px solid ${selected === 'premium' ? 'var(--color-primary)' : 'rgba(0,79,81,0.2)'}`,
              outline: 'none',
            }}
            onClick={() => setSelected('premium')}
          >
            <div style={{
              textAlign: 'center', padding: '5px 18px',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
              background: selected === 'premium' ? 'var(--color-primary)' : 'rgba(0,79,81,0.07)',
              color: selected === 'premium' ? 'white' : 'rgba(0,79,81,0.45)',
            }}>
              RECOMMENDED
            </div>
            <div style={{ padding: '14px 18px' }}>
              <div className="flex gap-3 items-center">
                <RadioDot active={selected === 'premium'} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold" style={{ fontSize: '15px', color: 'var(--color-text)' }}>Flex8 Slim Premium</span>
                    <div className="flex items-baseline gap-1 flex-shrink-0">
                      <span style={{ fontSize: '11px', color: '#c0c0c0', textDecoration: 'line-through' }}>$1,100</span>
                      <span className="font-bold" style={{ fontSize: '21px', lineHeight: 1, color: 'var(--color-text)' }}>$729</span>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>USD</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: 3, marginBottom: 5 }}>
                    +$80 for one extra session — speak to your dietitian 3× for deeper support.
                  </p>
                  <div className="flex items-center gap-1.5" style={{ color: 'var(--color-secondary)' }}>
                    <VideoIcon />
                    <span style={{ fontSize: '12px', fontWeight: 500 }}>3 video consultations included</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="px-7 py-3 flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: 'rgba(0,79,81,0.08)' }}/>
          <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
            not sure which plan is right for you?
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(0,79,81,0.08)' }}/>
        </div>

        {/* Option C: Consultation */}
        <div className="px-7 pb-5">
          <button
            className="w-full text-left rounded-xl transition-colors"
            style={{
              padding: '13px 16px', background: 'white',
              border: `1.5px solid ${selected === 'consult' ? 'var(--color-primary)' : 'rgba(0,79,81,0.1)'}`,
              outline: 'none',
            }}
            onClick={() => setSelected('consult')}
          >
            <div className="flex gap-3 items-center">
              <RadioDot active={selected === 'consult'} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium" style={{ fontSize: '13px', color: 'var(--color-text)' }}>
                      30-min 1-on-1 Dietitian Consultation
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: 1 }}>
                      Talk to an RD first before committing to a program
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5 flex-shrink-0">
                    <span style={{ fontSize: '12px', color: '#bbb', textDecoration: 'line-through' }}>$100</span>
                    <span className="font-bold" style={{ fontSize: '17px', color: 'var(--color-text)', lineHeight: 1 }}>$30</span>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>USD</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* CTA */}
        <div className="px-7 pb-7">
          <a
            href={ctaHref}
            className="block w-full text-center py-4 rounded-xl font-semibold text-sm text-white"
            style={{
              background: 'linear-gradient(135deg, #004F51 0%, #169E6B 100%)',
              boxShadow: '0 8px 24px rgba(0,79,51,0.22)',
              letterSpacing: '0.01em',
            }}
          >
            {ctaLabel}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="PROGRAM PLANS"
          heading="Your 8-Week Transformation"
          subheading="One focused program — everything you need to finally understand your body and lose weight for good."
          headingSize={44}
          subheadingMaxWidth="max-w-xl"
          className="mb-12"
        />

        {/*
          Three equal-height cards in a row (grid, align-items: stretch = default)
          Desktop : [dark program card | food photo | CTA card]
          Mobile  : [CTA card → dark card → food photo]
        */}
        <div
          className="grid max-lg:flex max-lg:flex-col max-lg:gap-5"
          style={{
            gridTemplateColumns: '1fr clamp(190px,21%,240px) clamp(260px,29%,320px)',
            gap: '1.25rem',
          }}
        >
          {/* ── Col 1: Dark program card ── */}
          <motion.div
            className="max-lg:order-2 relative rounded-3xl overflow-hidden flex flex-col"
            style={{ background: 'linear-gradient(145deg, #004F51 0%, #0d7a5c 60%, #169E6B 100%)', minHeight: 420 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
              animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative p-8 md:p-9 flex flex-col flex-1">
              {/* Badge + title */}
              <div className="mb-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: 'rgba(255,255,255,0.16)', color: 'white', border: '1px solid rgba(255,255,255,0.22)' }}
                >
                  Flex8 Slim Program
                </span>
                <h3 className="text-white font-bold" style={{ fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                  Everything included in your 8-week journey
                </h3>
              </div>
              {/* Features list — flex-1 to push nothing down; just flows */}
              <div className="flex flex-col gap-3.5">
                {SLIM_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5"><CheckIcon color="rgba(168,230,207,0.9)" /></span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Col 2: Food photo ── */}
          <motion.div
            className="max-lg:hidden relative rounded-3xl overflow-hidden"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=crop&h=700&w=500&q=80"
              alt="Colorful healthy meal bowl with fresh vegetables"
              className="w-full h-full object-cover object-center absolute inset-0"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,40,42,0.80) 0%, rgba(0,40,42,0.15) 50%, transparent 100%)' }}
            />
            {/* Testimonial at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex gap-0.5 mb-1.5">
                {[0,1,2,3,4].map(s => (
                  <svg key={s} width="11" height="11" viewBox="0 0 16 16" fill="#F5A623">
                    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.1L8 10.4l-3.7 1.94.7-4.1L2 5.5l4.15-.75z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white" style={{ fontSize: '12px', fontStyle: 'italic', lineHeight: 1.6, fontWeight: 300 }}>
                "Lost 8 kg in 8 weeks and finally kept it off."
              </p>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>— Lee · Taipei</p>
            </div>
          </motion.div>

          {/* ── Col 3: CTA card (equal height, flex-col so trust signals pin to bottom) ── */}
          <motion.div
            className="max-lg:order-1 max-lg:w-full flex flex-col"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div
              className="rounded-3xl bg-white flex flex-col flex-1"
              style={{
                boxShadow: '0 4px 6px rgba(0,79,81,0.04), 0 20px 48px rgba(0,79,81,0.11)',
                border: '1px solid rgba(0,79,81,0.09)',
                overflow: 'hidden',
              }}
            >
              {/* "Most Popular" banner at the very top */}
              <div style={{
                textAlign: 'center', padding: '9px 16px',
                fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
                background: 'var(--color-primary)', color: 'white',
              }}>
                MOST POPULAR
              </div>

              <div className="p-7 flex flex-col flex-1 gap-5">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold" style={{ fontSize: '46px', letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--color-text)' }}>$649</span>
                    <div>
                      <div style={{ fontSize: '13px', color: '#bbb', textDecoration: 'line-through' }}>$950</div>
                      <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>USD</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-secondary)', fontWeight: 600, marginTop: 5 }}>
                    Save $301 · Limited time offer
                  </p>
                </div>

                {/* Key highlights */}
                <div className="space-y-2.5">
                  {[
                    "Dedicated registered dietitian",
                    "Daily check-ins & personalised feedback",
                    "24/7 AI dietary assistant",
                    "Cash reward on goal achievement",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckIcon color="var(--color-secondary)" />
                      <span style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.45 }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Push CTA + trust to bottom */}
                <div className="flex flex-col gap-4 mt-auto">
                  {/* CTA */}
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full py-4 rounded-xl font-bold text-white cursor-pointer transition-all hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #004F51 0%, #169E6B 100%)',
                      fontSize: '16px',
                      boxShadow: '0 6px 20px rgba(0,79,81,0.28)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Get Started Now
                  </button>

                  {/* Trust signals */}
                  <div className="grid grid-cols-3 gap-2" style={{ borderTop: '1px solid rgba(0,79,81,0.07)', paddingTop: '1rem' }}>
                    {[
                      { value: '−5.2kg', sub: 'avg. result' },
                      { value: '93%', sub: 'satisfied' },
                      { value: '3-day', sub: 'money-back' },
                    ].map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="font-bold" style={{ fontSize: '14px', color: 'var(--color-primary)', lineHeight: 1 }}>{s.value}</div>
                        <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginTop: 3, lineHeight: 1.3 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          className="text-center mt-8"
          style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Not ready to commit?{' '}
          <a href="https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
            Start with a 30-min consultation for $30 →
          </a>
        </motion.p>
      </div>

      <AnimatePresence>
        {showModal && <UpsellModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
}

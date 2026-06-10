import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const EXPERTS = [
  {
    name: "Grace Huang",
    initials: "GH",
    credentials: "Doctor of Health Science · Maternal & Child Nutrition",
    specialty: "Bilingual counseling · Family health",
    quote: "If you've tried diets before and the weight keeps coming back, I help you find the root cause — and build a plan that finally sticks.",
    driveId: "1tponp8JEjHDkd2YvQGqZowoLBQqs5qgK",
    gradient: "linear-gradient(160deg, #004F51 0%, #169E6B 100%)",
  },
  {
    name: "Elaine Huang",
    initials: "EH",
    credentials: "B.S. Clinical Nutrition, UC Davis",
    specialty: "Sustainable weight loss · Behavioral coaching",
    quote: "Struggling to stay consistent? I design routines that fit your real life — so you stop restarting every Monday.",
    driveId: "1nJu3-ERJyERPF9zNlutsybJDGOSKRsmW",
    gradient: "linear-gradient(160deg, #169E6B 0%, #00C2E0 100%)",
  },
  {
    name: "Jun-Quan Zhang",
    initials: "JZ",
    credentials: "M.S. Nutrition, Chung Shan Medical University",
    specialty: "Body composition · Exercise nutrition & recovery",
    quote: "Want to lose fat without losing muscle? I build plans around how you move — so you get leaner and stronger, not just lighter.",
    driveId: "17WGDxevbvK2LLay6xuDc-RdAni82NXo9",
    gradient: "linear-gradient(160deg, #00C2E0 0%, #004F51 100%)",
  },
  {
    name: "Yu-Sheng Huang",
    initials: "YH",
    credentials: "Certified Sports Nutritionist · Metabolic health",
    specialty: "Metabolic regulation · Body recomposition",
    quote: "If your weight has plateaued no matter what you try, I help you reset your metabolism — without extreme restriction or crash diets.",
    driveId: "1FQ0rRcDSjH4f2-fPWL92b7Av-yEwqZoV",
    gradient: "linear-gradient(160deg, #FFB46E 0%, #169E6B 100%)",
  },
  {
    name: "Luo-Xuan Lee",
    initials: "LL",
    credentials: "China Medical University · Functional medicine",
    specialty: "Emotional eating · Habit-based lifestyle reset",
    quote: "Stress eating, emotional cravings, late-night snacking — I help you understand what's really driving those habits and break the cycle for good.",
    driveId: "1U2-qE5to8HDjxeg7T9fJd-kzk89YeN8_",
    gradient: "linear-gradient(160deg, #004F51 0%, #FFB46E 100%)",
  },
];

function driveUrl(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w600`;
}

export default function ExpertsSection() {
  const [active, setActive] = useState(0);
  const [imgFailed, setImgFailed] = useState<Record<number, boolean>>({});

  // Auto-rotate every 8s — slow enough to read the full quote
  useEffect(() => {
    const id = setInterval(() => {
      setActive(a => (a + 1) % EXPERTS.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const expert = EXPERTS[active];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fafef9] to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          eyebrow="OUR EXPERTS"
          heading="Registered Dietitians Ready to Support You"
          subheading="Each dietitian is rigorously vetted and trained — so you always get expert-level guidance."
          headingSize={44}
          subheadingMaxWidth="max-w-2xl"
          className="mb-14"
        />

        <div className="flex gap-10 items-center max-md:flex-col">
          {/* ── Large active photo ── */}
          <motion.div
            className="flex-shrink-0 relative"
            style={{ width: 320 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative overflow-hidden rounded-3xl"
                style={{
                  width: 320, height: 420,
                  boxShadow: '0 24px 64px rgba(0,79,81,0.22)',
                }}
                initial={{ opacity: 0, scale: 0.92, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.92, x: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {expert.driveId && !imgFailed[active] ? (
                  <img
                    src={driveUrl(expert.driveId)}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgFailed(f => ({ ...f, [active]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: expert.gradient }}>
                    <span style={{ fontSize: '72px', fontWeight: 700, color: 'rgba(255,255,255,0.88)' }}>{expert.initials}</span>
                  </div>
                )}
                {/* Bottom gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,40,42,0.55) 0%, transparent 50%)' }}
                />
                {/* Name on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-bold text-white" style={{ fontSize: '18px' }}>{expert.name}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{expert.credentials}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Right: info + thumbnails ── */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Quote + expertise */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="rounded-2xl p-7 mb-5"
                  style={{ background: '#f0fffe', border: '1px solid rgba(0,79,81,0.1)' }}
                >
                  <p className="mb-4" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-secondary)' }}>
                    {expert.specialty.toUpperCase()}
                  </p>
                  <blockquote style={{ fontSize: '20px', fontFamily: '"DM Serif Display", serif', color: 'var(--color-text)', lineHeight: 1.5, fontStyle: 'italic' }}>
                    "{expert.quote}"
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail row */}
            <div className="flex gap-3">
              {EXPERTS.map((e, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative flex-1 rounded-2xl overflow-hidden transition-all"
                  style={{
                    aspectRatio: '3/4',
                    outline: i === active ? '2.5px solid #169E6B' : '2.5px solid transparent',
                    outlineOffset: 2,
                    opacity: i === active ? 1 : 0.55,
                    transform: i === active ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    boxShadow: i === active ? '0 8px 24px rgba(0,79,81,0.2)' : 'none',
                  }}
                >
                  {e.driveId && !imgFailed[i] ? (
                    <img
                      src={driveUrl(e.driveId)}
                      alt={e.name}
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgFailed(f => ({ ...f, [i]: true }))}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: e.gradient }}>
                      <span style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{e.initials}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {EXPERTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === active ? 24 : 8, height: 8, background: i === active ? 'var(--color-primary)' : 'rgba(0,79,81,0.2)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

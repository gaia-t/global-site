import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Header from "../cofit/Header";
import ScrollProgress from "../cofit/ScrollProgress";
import BackToTop from "../cofit/BackToTop";
import MagneticButton from "../cofit/MagneticButton";
import SectionHeader from "../cofit/SectionHeader";
import Footer from "../cofit/Footer";

const CONSULT_URL = "https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3";
const FB_URL      = "https://www.facebook.com/people/Cofit-Your-Personal-Nutritionist/61578227114212/";

// ─────────────────────────────────────────────────────────────────────────────
// Quiz
// ─────────────────────────────────────────────────────────────────────────────
const QUIZ = [
  {
    q: "Which challenge feels most familiar?",
    options: [
      { text: "I eat less, but the scale barely moves",         result: "A" },
      { text: "I keep losing weight and gaining it back",       result: "C" },
      { text: "I struggle with cravings and emotional eating",  result: "B" },
      { text: "I don't know what actually works for my body",   result: "A" },
    ],
  },
  {
    q: "Which best describes your current situation?",
    options: [
      { text: "I've tried multiple diets before",               result: "A" },
      { text: "I'm a busy parent with little time for myself",  result: "C" },
      { text: "My body feels different than it used to",        result: "B" },
      { text: "I know what to do, but can't stay consistent",   result: "C" },
    ],
  },
  {
    q: "What would you most like us to help with?",
    options: [
      { text: "Understanding why I'm not seeing results",       result: "A" },
      { text: "Building healthier eating habits",               result: "C" },
      { text: "Losing weight without restrictive dieting",      result: "B" },
      { text: "Having expert guidance and accountability",      result: "A" },
    ],
  },
];

type ResultKey = "A" | "B" | "C";

const RESULTS: Record<ResultKey, { headline: string; subheadline: string; body: string; cta: string }> = {
  A: {
    headline: "You Don't Need More Willpower.",
    subheadline: "You Need More Clarity.",
    body: "Based on your answers, it sounds like you've already been putting in effort — but may not know which habits or patterns are actually affecting your progress. A 1-on-1 consultation can help identify what's working, what's not, and where to focus next.",
    cta: "Book My Consultation",
  },
  B: {
    headline: "Your Body May Be Sending Signals You're Missing.",
    subheadline: "",
    body: "Cravings, energy dips, and difficulty losing weight aren't always about eating too much. Your nutritionist can help uncover potential lifestyle, nutrition, and body composition factors that may be influencing your results.",
    cta: "Get Personalized Guidance",
  },
  C: {
    headline: "You Don't Need Another Diet.",
    subheadline: "You Need A Plan That Fits Your Life.",
    body: "Many people know what they 'should' do. The challenge is finding an approach that's realistic, sustainable, and tailored to their daily routine. A consultation helps you build a strategy that works for your lifestyle — not someone else's.",
    cta: "Start With A Consultation",
  },
};

function QuizModal({ onClose }: { onClose: () => void }) {
  const [step, setStep]     = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({ A: 0, B: 0, C: 0 });
  const [result, setResult] = useState<ResultKey | null>(null);

  function choose(r: string) {
    const key  = r as ResultKey;
    const next = { ...scores, [key]: scores[key] + 1 };
    setScores(next);
    if (step + 1 >= QUIZ.length) {
      const winner = (Object.entries(next).sort((a, b) => b[1] - a[1])[0][0]) as ResultKey;
      setResult(winner);
    } else {
      setStep(step + 1);
    }
  }

  const res = result ? RESULTS[result] : null;

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ overflowY: 'auto' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="absolute inset-0" style={{ background: 'rgba(0,25,26,0.78)', backdropFilter: 'blur(10px)' }} onClick={onClose} />
      <motion.div className="relative bg-white rounded-3xl shadow-2xl w-full my-4" style={{ maxWidth: 520, zIndex: 1 }}
        initial={{ scale: 0.93, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.93, y: 24 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10"
          style={{ background: 'rgba(0,0,0,0.06)', color: '#999' }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M1 1l9 9M10 1L1 10"/>
          </svg>
        </button>

        {!res ? (
          <div className="p-8 pt-9">
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>1-Minute Quiz</span>
                <span>Question {step + 1} of {QUIZ.length}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#e8f0ee' }}>
                <motion.div className="h-full rounded-full" style={{ background: 'var(--color-primary)' }}
                  animate={{ width: `${(step / QUIZ.length) * 100}%` }} transition={{ duration: 0.4 }} />
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.22 }}>
                <h3 className="mb-5" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.4 }}>{QUIZ[step].q}</h3>
                <div className="space-y-2.5">
                  {QUIZ[step].options.map((opt, i) => (
                    <button key={i} onClick={() => choose(opt.result)}
                      className="w-full text-left px-4 py-3.5 rounded-xl transition-all"
                      style={{ background: '#f7fbf9', border: '1.5px solid rgba(0,79,81,0.1)', fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.5 }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e6f5ef'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,79,81,0.3)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f7fbf9'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,79,81,0.1)'; }}>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div className="p-8 pt-9" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'var(--color-primary)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>
              </svg>
            </div>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: 'var(--color-secondary)' }}>YOUR RESULT</p>
            <h3 className="mb-1" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{res.headline}</h3>
            {res.subheadline && (
              <h4 className="mb-4" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.3 }}>{res.subheadline}</h4>
            )}
            <p className="mb-6" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>{res.body}</p>
            <a href={CONSULT_URL} onClick={onClose} className="block w-full text-center py-4 rounded-xl text-white font-semibold"
              style={{ background: 'linear-gradient(135deg, #004F51 0%, #169E6B 100%)', boxShadow: '0 6px 20px rgba(0,79,81,0.28)' }}>
              {res.cta} →
            </a>
            <button onClick={onClose} className="w-full text-center mt-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>Maybe later</button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Reusable icons
// ─────────────────────────────────────────────────────────────────────────────
function CheckBadge({ color = "var(--color-secondary)" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="9" cy="9" r="8.5" stroke={color} strokeWidth="1.3"/>
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function ConsultationPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [openFAQ,  setOpenFAQ]  = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <ScrollProgress />
      <BackToTop />
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — 2-column: text left · nutritionist photo right
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #004F51 0%, #006b6e 50%, #007a7e 100%)', paddingTop: 80 }}>

        {/* Dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
        {/* Ambient glow */}
        <motion.div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(22,158,107,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}/>

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-16 w-full grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">

          {/* ── LEFT: text ── */}
          <div>
            <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#7fffd4' }}/>
              <span className="text-white/85 text-sm font-medium">30-min · Online · Expert-led</span>
            </motion.div>

            <motion.h1 className="text-white mb-5"
              style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: 1.1, letterSpacing: '-1px' }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              Understand Why You're Stuck Before Starting Another Diet.
            </motion.h1>

            <motion.p className="mb-10" style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', maxWidth: 480 }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22 }}>
              Whether you're struggling with postpartum weight, constant cravings, slow progress, or weight regain — a registered nutritionist can help you uncover what's really holding you back, and what to do next.
            </motion.p>

            <motion.div className="flex gap-3 flex-wrap"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
              <MagneticButton href={CONSULT_URL} className="font-semibold shadow-xl"
                style={{ background: 'white', color: '#004F51', fontSize: '15px' }}>
                Book Consultation →
              </MagneticButton>
              <MagneticButton onClick={() => setShowQuiz(true)}
                className="text-white border border-white/25 font-medium"
                style={{ background: 'rgba(255,255,255,0.12)', fontSize: '15px', cursor: 'pointer' }}>
                Take the 1-Minute Quiz
              </MagneticButton>
            </motion.div>
          </div>

          {/* ── RIGHT: photo — hidden on mobile ── */}
          <motion.div className="flex justify-center items-center max-md:hidden"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}>
            <div className="relative overflow-hidden"
              style={{
                width: '100%',
                borderRadius: 32,
                aspectRatio: '3/4',
                boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
              }}>
              <img
                src="/consultation-hero.png"
                alt="Registered nutritionist ready for consultation"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 10%', transform: 'scale(1.15)', transformOrigin: 'center 25%' }}
              />
              {/* Subtle gradient overlay at bottom for the caption */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,40,42,0.55) 100%)' }}/>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-7 pb-7 pt-10">
                <p className="font-semibold text-white mb-0.5" style={{ fontSize: '16px', letterSpacing: '0.01em' }}>
                  Registered Nutritionist
                </p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  Cofit · Board Certified · Clinically Experienced
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: What You'll Gain
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="IN JUST 30 MINUTES"
            heading="What You'll Gain"
            subheading="Walk away with clarity, not confusion."
            headingSize={44}
            subheadingMaxWidth="max-w-md"
            className="mb-14"
          />
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {[
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>),
                title: "Personalized Nutrition Assessment",
                desc: "Understand how your current eating habits may be helping — or hurting — your progress.",
                color: "#169E6B", bg: "#f0fffe",
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>),
                title: "Body Composition Insights",
                desc: "Learn what your body metrics may reveal about your health and weight-loss challenges.",
                color: "#004F51", bg: "#e6f0f0",
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>),
                title: "Craving & Lifestyle Analysis",
                desc: "Identify hidden factors such as stress, meal timing, sleep, and daily routines.",
                color: "#00C2E0", bg: "#e0f7fb",
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>),
                title: "Practical Next Steps",
                desc: "Receive realistic recommendations tailored to your goals, schedule, and lifestyle.",
                color: "#e8810a", bg: "#fff5e9",
              },
            ].map((item, i) => (
              <motion.div key={i} className="rounded-2xl p-8 flex gap-5 items-start"
                style={{ background: item.bg, border: `1px solid ${item.color}18` }}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}18`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ fontSize: '17px', color: 'var(--color-text)', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: Questions We Help Answer
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f7fbf9]">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="REAL QUESTIONS"
            heading="The Questions We Help Answer Every Day"
            subheading="If you've ever wondered…"
            headingSize={44}
            subheadingMaxWidth="max-w-md"
            className="mb-14"
          />
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {[
              "Why am I eating so little and still not losing weight?",
              "Why do I crave sugar every afternoon?",
              "Why was it easier to lose weight before pregnancy?",
              "Why do I always gain the weight back?",
              "Am I eating too much — or not enough?",
              "What's the healthiest way to lose weight without feeling miserable?",
            ].map((q, i) => (
              <motion.div key={i} className="rounded-2xl bg-white p-6 flex items-start gap-4"
                style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 8px 24px -8px rgba(15,31,26,0.08)', border: '1px solid rgba(0,79,81,0.06)' }}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}>
                <span style={{ fontSize: '22px', lineHeight: 1, fontFamily: 'Georgia, serif', color: 'rgba(0,79,81,0.15)', flexShrink: 0, marginTop: 2 }}>"</span>
                <p style={{ fontSize: '15px', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text)' }}>{q}</p>
              </motion.div>
            ))}
          </div>
          <motion.p className="text-center mt-10 font-semibold" style={{ fontSize: '16px', color: 'var(--color-primary)' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Then this consultation is for you.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: What Happens During — redesigned, no emoji, interactive
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="THE CONSULTATION"
            heading="What Happens During The Consultation?"
            subheading="In 30 minutes, you'll go from confused to clear."
            headingSize={44}
            subheadingMaxWidth="max-w-xl"
            className="mb-16"
          />

          {/* 3-phase flow */}
          <div className="grid grid-cols-3 gap-0 items-stretch max-md:grid-cols-1 max-md:gap-4">

            {/* ── BEFORE ── */}
            <motion.div className="relative rounded-l-3xl max-md:rounded-3xl overflow-hidden group"
              style={{ background: '#f0fffe', border: '1px solid rgba(22,158,107,0.15)' }}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="p-8 flex flex-col h-full">
                {/* Step label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(22,158,107,0.12)', color: '#169E6B' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                      <rect x="9" y="3" width="6" height="4" rx="1"/>
                      <path d="M9 12h6M9 16h4"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: 'rgba(22,158,107,0.6)' }}>STEP 1</span>
                </div>

                <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: 'var(--color-text)', lineHeight: 1.3 }}>Before Your Session</h3>
                <p className="mb-5 font-semibold" style={{ fontSize: '13px', color: '#169E6B' }}>Walk in prepared</p>
                <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.8, color: 'var(--color-text-secondary)', flex: 1 }}>
                  Complete a short questionnaire about your goals, lifestyle, and eating habits. This helps your nutritionist arrive ready to focus entirely on you — no time wasted getting up to speed.
                </p>

                {/* Value promise */}
                <div className="mt-6 pt-5 flex items-start gap-2.5" style={{ borderTop: '1px solid rgba(22,158,107,0.12)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#169E6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    Your answers stay private and are used only to personalize your session.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── DURING (featured center card) ── */}
            <motion.div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group max-md:-mx-0"
              style={{ background: 'linear-gradient(145deg, #004F51 0%, #0d7a5c 55%, #169E6B 100%)', margin: '-8px 0', boxShadow: '0 24px 64px rgba(0,79,81,0.3)' }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}>
              {/* Floating glow */}
              <motion.div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
                animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}/>

              <div className="p-8 pt-10 flex flex-col h-full relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full mb-6"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.22)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#7fffd4' }}/>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'white', letterSpacing: '0.08em' }}>THE HEART OF IT</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>

                <h3 className="font-bold mb-1" style={{ fontSize: '22px', color: 'white', lineHeight: 1.3 }}>During Your Session</h3>
                <p className="mb-5 font-semibold" style={{ fontSize: '13px', color: 'rgba(168,230,207,0.9)' }}>Get to the root of it</p>

                <p className="mb-4" style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                  Meet 1-on-1 with a registered nutritionist online. Together, you'll explore:
                </p>

                <ul className="space-y-2.5 flex-1">
                  {[
                    "Your current eating habits and patterns",
                    "Lifestyle routines that may affect your weight",
                    "Specific challenges and frustrations",
                    "Your health goals and timeline",
                    "Your weight-loss history and what's been tried",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                        <circle cx="7" cy="7" r="6.5" stroke="rgba(168,230,207,0.6)" strokeWidth="1.2"/>
                        <path d="M4.5 7l2 2 3-3" stroke="rgba(168,230,207,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 flex items-start gap-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(168,230,207,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
                  </svg>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                    Fully confidential. No judgment — just expert guidance tailored to you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── AFTER ── */}
            <motion.div className="relative rounded-r-3xl max-md:rounded-3xl overflow-hidden group"
              style={{ background: '#fff8f2', border: '1px solid rgba(232,129,10,0.15)' }}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(232,129,10,0.1)', color: '#e8810a' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                      <polyline points="16 7 22 7 22 13"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: 'rgba(232,129,10,0.6)' }}>STEP 3</span>
                </div>

                <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: 'var(--color-text)', lineHeight: 1.3 }}>After Your Session</h3>
                <p className="mb-5 font-semibold" style={{ fontSize: '13px', color: '#e8810a' }}>Leave empowered</p>

                <div className="space-y-3 flex-1">
                  {[
                    { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z", label: "Actionable personalized recommendations" },
                    { icon: "M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-1.447-.894L15 9m0 8V9m0 0L9 7", label: "A clear roadmap for your next steps" },
                    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "The choice to continue with Flex8 Program" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,129,10,0.08)', color: '#e8810a' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon}/>
                        </svg>
                      </div>
                      <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-secondary)', paddingTop: 4 }}>{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 flex items-start gap-2.5" style={{ borderTop: '1px solid rgba(232,129,10,0.12)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8810a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    No pressure. No commitments. Just clarity about what works for your body.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA beneath the 3-phase flow */}
          <motion.div className="text-center mt-12"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <MagneticButton href={CONSULT_URL} className="text-white shadow-xl"
              style={{ backgroundColor: 'var(--color-primary)', fontSize: '15px' }}>
              Book Your 30-Minute Session →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 + 6: Right For You · Why Start
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f7fbf9]">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">

            <motion.div className="rounded-3xl bg-white p-10"
              style={{ boxShadow: '0 4px 6px rgba(0,79,81,0.04), 0 20px 48px rgba(0,79,81,0.08)', border: '1px solid rgba(0,79,81,0.07)' }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--color-secondary)' }}>IS THIS RIGHT FOR YOU?</p>
              <h3 className="mb-7" style={{ fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 700, lineHeight: 1.25, color: 'var(--color-text)' }}>
                This is a great fit if you:
              </h3>
              <ul className="space-y-4">
                {[
                  "Have tried multiple diets without lasting results",
                  "Recently had a baby and feel like your body has changed",
                  "Feel frustrated despite your efforts",
                  "Want expert guidance before committing to a full program",
                  "Prefer personalized advice over generic diet plans",
                  "Want to understand your body better",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckBadge />
                    <span style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="rounded-3xl p-10 flex flex-col"
              style={{ background: 'linear-gradient(145deg, #004F51 0%, #0d7a5c 60%, #169E6B 100%)', boxShadow: '0 20px 48px rgba(0,79,81,0.22)' }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>WHY START HERE?</p>
              <h3 className="mb-3" style={{ fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 700, lineHeight: 1.25, color: 'white' }}>
                Why Start With A Consultation?
              </h3>
              <p className="mb-6" style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                Because guessing is exhausting. Most people spend years trying different diets, apps, and fitness plans. One conversation with an experienced nutritionist can help you understand:
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "What's actually preventing progress",
                  "Which habits matter most",
                  "What changes are worth focusing on",
                  "Whether a structured program like Flex8 is the right next step",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckBadge color="rgba(168,230,207,0.9)" />
                    <span style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.88)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-6" style={{ fontSize: '15px', fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Instead of spending months experimenting, start with clarity.
              </p>
              <a href={CONSULT_URL} className="block text-center py-4 rounded-xl font-bold"
                style={{ background: 'white', color: '#004F51', fontSize: '15px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                Book My Consultation →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7: Booking Process — line icons + CTA + updated FB URL
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white" id="booking">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="HOW IT WORKS"
            heading="Your Path to the Consultation"
            subheading="Six simple steps from sign-up to meeting your nutritionist."
            headingSize={44}
            subheadingMaxWidth="max-w-xl"
            className="mb-16"
          />

          {/* 3-col grid — 2 rows of 3, each row uses CSS grid stretch for equal height */}
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              {
                num: "01", color: "#169E6B", bg: "#f0fffe",
                title: "Complete Registration",
                desc: "Fill out the enrollment form to reserve your consultation spot.",
                href: CONSULT_URL,
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>),
              },
              {
                num: "02", color: "#004F51", bg: "#e6f0f0",
                title: "Join Our Facebook Page",
                desc: "Follow Cofit on Facebook for program updates and community support.",
                href: FB_URL,
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
              },
              {
                num: "03", color: "#00C2E0", bg: "#e0f7fb",
                title: "Download Cofit App",
                desc: "Install the Cofit app on your phone — this is where your daily tracking and coaching happens.",
                appLinks: true,
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><path d="M12 10v4M10 12l2 2 2-2"/></svg>),
              },
              {
                num: "04", color: "#7B61FF", bg: "#f5f3ff",
                title: "Log Meals for 2 Days",
                desc: "Photo-log your meals and complete the intake questionnaire inside the app.",
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>),
              },
              {
                num: "05", color: "#e8810a", bg: "#fff5e9",
                title: "Record Weight & Waist",
                desc: "Measure and log your weight and waist circumference in the app.",
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>),
              },
              {
                num: "06", color: "#E85D8A", bg: "#fdf0f5",
                title: "Meet Your Nutritionist",
                desc: "Join your 1-on-1 video consultation and get your personalized plan.",
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14"/><rect x="3" y="7" width="12" height="10" rx="2"/></svg>),
              },
            ].map((step, i) => (
              <motion.div key={i} className="flex flex-col"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}>

                {/* Icon + step num */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: step.bg, border: `1.5px solid ${step.color}28`, boxShadow: `0 4px 16px ${step.color}18`, color: step.color }}>
                    {step.icon}
                  </div>
                  <span className="font-bold" style={{ fontSize: '13px', color: `${step.color}80`, letterSpacing: '0.06em' }}>
                    STEP {step.num}
                  </span>
                </div>

                {/* Card — flex-1 so all 3 in a row stretch to equal height.
                    Steps with href render as <a> so the whole card is clickable. */}
                {(() => {
                  const hasLink = 'href' in step && step.href;
                  const cardStyle = {
                    boxShadow: '0 1px 3px rgba(15,31,26,0.05), 0 8px 24px -6px rgba(15,31,26,0.09)',
                    border: '1px solid rgba(0,79,81,0.06)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    display: 'flex' as const,
                    flexDirection: 'column' as const,
                    textDecoration: 'none',
                  };
                  const CardTag = hasLink ? 'a' : 'div';
                  const linkProps = hasLink
                    ? { href: (step as { href: string }).href, target: '_blank', rel: 'noreferrer' }
                    : {};
                  return (
                  <CardTag
                    {...(linkProps as object)}
                    className={`rounded-2xl bg-white p-6 flex-1 flex flex-col${hasLink ? ' group/card cursor-pointer' : ''}`}
                    style={cardStyle}
                    {...(hasLink ? {
                      onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px rgba(15,31,26,0.1), 0 16px 40px -8px ${step.color}28`;
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      },
                      onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(15,31,26,0.05), 0 8px 24px -6px rgba(15,31,26,0.09)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      },
                    } : {})}
                  >
                  <h4 className="font-bold mb-2" style={{ fontSize: '16px', lineHeight: 1.35, color: hasLink ? step.color : 'var(--color-text)' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text-secondary)', flex: 1 }}>
                    {step.desc}
                  </p>
                  {/* iOS + Android links for step 03 */}
                  {('appLinks' in step && step.appLinks) && (
                    <div className="flex flex-col gap-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,194,224,0.12)' }}>
                      <a href="https://apps.apple.com/tw/app/cofit-%E6%88%91%E7%9A%84%E5%B0%88%E5%B1%AC%E7%87%9F%E9%A4%8A%E5%B8%AB/id1062498342"
                        target="_blank" rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium transition-all hover:opacity-85"
                        style={{ background: '#000', color: '#fff', fontSize: '13px', textDecoration: 'none' }}>
                        {/* Apple icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        Download on the App Store
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=me.cofit.ironman&hl=zh_TW"
                        target="_blank" rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium transition-all hover:opacity-85"
                        style={{ background: '#1a73e8', color: '#fff', fontSize: '13px', textDecoration: 'none' }}>
                        {/* Play icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                          <path d="M3 20.5v-17c0-.83.93-1.3 1.6-.8l14 8.5c.63.38.63 1.32 0 1.7l-14 8.5c-.67.5-1.6.03-1.6-.9z"/>
                        </svg>
                        Get it on Google Play
                      </a>
                    </div>
                  )}
                  </CardTag>
                  );
                })()}
              </motion.div>
            ))}
          </div>

          {/* CTA under booking steps */}
          <motion.div className="text-center mt-14"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="mb-5" style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
              Ready to get started? Complete step 1 now.
            </p>
            <MagneticButton href={CONSULT_URL} className="text-white shadow-xl"
              style={{ backgroundColor: 'var(--color-secondary)', fontSize: '16px' }}>
              Book My Consultation →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8: FAQ
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f7fbf9]" id="faq">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <SectionHeader eyebrow="FAQ" heading="Frequently Asked Questions" headingSize={40} className="mb-12" />
          <div className="space-y-3">
            {[
              { q: "Is the consultation conducted online?",     a: "Yes. You can join from anywhere in the world via video call — no travel required." },
              { q: "What language is available?",              a: "English, Cantonese, and Mandarin consultations are available. Let us know your preference when booking." },
              { q: "Do I need special equipment?",             a: "No. Any existing body measurements are helpful, but not required. Just bring yourself and your questions." },
              { q: "Will I receive a meal plan?",              a: "The consultation focuses on assessment and personalized recommendations. Your nutritionist will discuss the most appropriate next steps based on your goals." },
              { q: "What happens after the consultation?",     a: "You'll leave with personalized recommendations and can decide whether you'd like additional support through the Flex8 Program." },
            ].map((faq, i) => (
              <motion.div key={i} className="rounded-2xl bg-white overflow-hidden"
                style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04)', border: '1px solid rgba(0,79,81,0.08)' }}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}>
                <button className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.4 }}>{faq.q}</span>
                  <motion.span animate={{ rotate: openFAQ === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
                    style={{ background: openFAQ === i ? 'var(--color-primary)' : '#f0fffe', color: openFAQ === i ? 'white' : 'var(--color-primary)', fontSize: '18px', fontWeight: 300 }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-7 pb-5" style={{ borderTop: '1px solid rgba(0,79,81,0.06)' }}>
                        <p className="pt-4" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--color-text-secondary)' }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA — white background, dark heading (matches deployed style)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest mb-4" style={{ color: 'var(--color-secondary)' }}>GET STARTED</p>
            <h2 className="mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.15, color: 'var(--color-text)' }}>
              Stop Guessing.<br/>Start Understanding.
            </h2>
            <p className="mb-10 mx-auto" style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: 560 }}>
              One conversation could help you uncover what's been holding you back for years. Get personalized guidance from a registered nutritionist and take the first step toward lasting change.
            </p>
            <MagneticButton href={CONSULT_URL} className="text-white shadow-xl"
              style={{ backgroundColor: 'var(--color-secondary)', fontSize: '18px' }}>
              Book Your Consultation
            </MagneticButton>
            <p className="mt-6" style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              30-minute online consultation &nbsp;·&nbsp; Personalized recommendations &nbsp;·&nbsp; Available worldwide
            </p>
          </motion.div>
        </div>
      </section>

      <Footer
        columns={[
          { heading: "Consultation", links: [
            { label: "How It Works",   href: "#booking" },
            { label: "Booking Process",href: "#booking" },
            { label: "FAQ",            href: "#faq" },
          ]},
          { heading: "Pages", links: [
            { label: "Flex8 Program",  href: "/" },
          ]},
        ]}
        copyright="© 2026 Cofit Healthcare Inc. All Rights Reserved."
      />

      <AnimatePresence>
        {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}
      </AnimatePresence>
    </div>
  );
}

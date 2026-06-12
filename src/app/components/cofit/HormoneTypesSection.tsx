import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MagneticButton from "./MagneticButton";

// Flat person silhouette (icon-style, like bathroom sign)
// Fat zones are colored ellipses overlaid on the relevant body area
function PersonFigure({ zones }: { zones: React.ReactNode }) {
  return (
    <svg viewBox="0 0 56 112" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* HEAD */}
      <circle cx="28" cy="11" r="10" fill="currentColor" opacity="0.18"/>
      {/* LEFT ARM */}
      <path d="M6 33 C4 41 4 51 6 60 C7 64 10 65 13 64 L15 60 C13 53 13 43 14 36Z"
            fill="currentColor" opacity="0.18"/>
      {/* RIGHT ARM */}
      <path d="M50 33 C52 41 52 51 50 60 C49 64 46 65 43 64 L41 60 C43 53 43 43 42 36Z"
            fill="currentColor" opacity="0.18"/>
      {/* TORSO */}
      <path d="M14 30 C13 42 13 56 15 66 L41 66 C43 56 43 42 42 30 C38 28 33 27 28 27 C23 27 18 28 14 30Z"
            fill="currentColor" opacity="0.18"/>
      {/* LEFT LEG */}
      <rect x="15" y="66" width="11" height="44" rx="5.5" fill="currentColor" opacity="0.18"/>
      {/* RIGHT LEG */}
      <rect x="30" y="66" width="11" height="44" rx="5.5" fill="currentColor" opacity="0.18"/>
      {/* FAT ZONES on top */}
      {zones}
    </svg>
  );
}

const BODY_SVGS: Record<string, React.ReactNode> = {
  P: ( // Insulin Resistance — upper abdomen
    <PersonFigure zones={
      <ellipse className="fat-zone" cx="28" cy="47" rx="13" ry="11" fill="#169E6B" opacity="0.85"/>
    }/>
  ),
  A: ( // Androgen — shoulders + upper arms
    <PersonFigure zones={<>
      <rect className="fat-zone" x="4" y="27" width="48" height="14" rx="7" fill="#004F51" opacity="0.82"/>
      <path className="fat-zone" d="M5 34 C3 42 3 52 5 61 C6 64 9 65 12 64 L15 59 C13 52 13 42 14 36Z" fill="#004F51" opacity="0.62"/>
      <path className="fat-zone" d="M51 34 C53 42 53 52 51 61 C50 64 47 65 44 64 L41 59 C43 52 43 42 42 36Z" fill="#004F51" opacity="0.62"/>
    </>}/>
  ),
  T: ( // Thyroid — face puffiness + full arms + overall body
    <PersonFigure zones={<>
      <circle className="fat-zone" cx="28" cy="11" r="12" fill="#00C2E0" opacity="0.42"/>
      <path className="fat-zone" d="M5 34 C3 42 3 52 5 61 C6 64 9 65 12 64 L15 59 C13 52 13 42 14 36Z" fill="#00C2E0" opacity="0.78"/>
      <path className="fat-zone" d="M51 34 C53 42 53 52 51 61 C50 64 47 65 44 64 L41 59 C43 52 43 42 42 36Z" fill="#00C2E0" opacity="0.78"/>
      <ellipse className="fat-zone" cx="28" cy="47" rx="14" ry="18" fill="#00C2E0" opacity="0.3"/>
    </>}/>
  ),
  L: ( // Liver — lower protruding belly
    <PersonFigure zones={
      <ellipse className="fat-zone" cx="28" cy="60" rx="14" ry="10" fill="#e8810a" opacity="0.88"/>
    }/>
  ),
  C: ( // Cortisol — central belly, slim limbs
    <PersonFigure zones={
      <ellipse className="fat-zone" cx="28" cy="50" rx="13" ry="12" fill="#7B61FF" opacity="0.85"/>
    }/>
  ),
  E: ( // Estrogen — hips + thighs
    <PersonFigure zones={<>
      <ellipse className="fat-zone" cx="28" cy="68" rx="18" ry="8" fill="#E85D8A" opacity="0.78"/>
      <rect className="fat-zone" x="14" y="66" width="12" height="38" rx="6" fill="#E85D8A" opacity="0.65"/>
      <rect className="fat-zone" x="30" y="66" width="12" height="38" rx="6" fill="#E85D8A" opacity="0.65"/>
    </>}/>
  ),
};

const TYPES = [
  { type: "P", label: "Type P", color: "#169E6B", bg: "#f0fffe", title: "Insulin Resistance",
    symptoms: ["Upper abdomen fat", "Darkened skin folds", "Afternoon energy crash after meals", "Difficulty focusing"] },
  { type: "A", label: "Type A", color: "#004F51", bg: "#f0f9f9", title: "Androgen Imbalance",
    symptoms: ["Broad shoulders & upper back", "Low energy & mood", "Men: possible sexual dysfunction", "Women: higher PCOS risk"] },
  { type: "T", label: "Type T", color: "#00C2E0", bg: "#e8fafd", title: "Thyroid Imbalance",
    symptoms: ["Flabby arms & full-body puffiness", "Craves sweets & bread", "Dry hair, prone to falling", "Often feels down"] },
  { type: "L", label: "Type L", color: "#e8810a", bg: "#fff8f0", title: "Liver Congestion",
    symptoms: ["Protruding lower belly", "Craves fried foods", "Dark yellow urine", "Alert at night, tired in the morning"] },
  { type: "C", label: "Type C", color: "#7B61FF", bg: "#f5f3ff", title: "Cortisol Overload",
    symptoms: ["Belly fat, slim limbs", "Craves salty/crunchy food", "Chronic stress & tension", "Hard to wake up, drowsy afternoon"] },
  { type: "E", label: "Type E", color: "#E85D8A", bg: "#fdf0f5", title: "Estrogen Dominance",
    symptoms: ["Saddlebag fat on hips & thighs", "Prefers sweets & dairy", "Enjoys ice cream & milk products", "Mood swings & easily irritated"] },
];

const QUESTIONS = [
  { q: "Where does your body tend to store most of its fat?",
    options: [
      { text: "Upper abdomen / around the stomach", types: ["P"] },
      { text: "Shoulders, upper back, and arms", types: ["A"] },
      { text: "All over — arms, legs, face look puffy", types: ["T"] },
      { text: "Belly sticks out, especially lower abdomen", types: ["L"] },
      { text: "Belly only — arms and legs stay slim", types: ["C"] },
      { text: "Hips, thighs, and buttocks (lower body)", types: ["E"] },
    ] },
  { q: "Which snack craving do you relate to most?",
    options: [
      { text: "White rice, noodles, or anything starchy", types: ["P", "T"] },
      { text: "Nothing specific — I just feel sluggish", types: ["A"] },
      { text: "Bread, pastries, or sweet desserts", types: ["T"] },
      { text: "Fried foods or oily snacks", types: ["L"] },
      { text: "Crunchy, salty snacks (chips, crackers)", types: ["C"] },
      { text: "Sweets — ice cream, chocolate, fruit", types: ["E"] },
    ] },
  { q: "How is your energy throughout the day?",
    options: [
      { text: "Big crash after lunch — very sleepy", types: ["P"] },
      { text: "Low energy all day, prone to feeling down", types: ["A"] },
      { text: "Feel tired most of the time, hair falling out", types: ["T"] },
      { text: "Alert at night, hard to sleep, wake up tired", types: ["L"] },
      { text: "Morning grogginess, afternoon slump", types: ["C"] },
      { text: "Energy is OK but mood swings a lot", types: ["E"] },
    ] },
  { q: "How would you describe your mood and stress levels?",
    options: [
      { text: "Foggy / hard to focus after meals", types: ["P"] },
      { text: "Often unmotivated or down without clear reason", types: ["A"] },
      { text: "Easily disappointed, sometimes feel hopeless", types: ["T"] },
      { text: "Generally OK but get irritable when hungry", types: ["L"] },
      { text: "Chronically stressed, always under pressure", types: ["C"] },
      { text: "Easily irritated, emotional, mood swings", types: ["E"] },
    ] },
  { q: "Which physical symptom have you noticed most?",
    options: [
      { text: "Dark patches of skin near armpits or neck", types: ["P"] },
      { text: "Facial or body hair changes", types: ["A"] },
      { text: "Dry hair, brittle nails, puffy / bloated", types: ["T"] },
      { text: "Yellow-tinged urine, digestive discomfort", types: ["L"] },
      { text: "Belly fat despite exercising", types: ["C"] },
      { text: "Water retention / bloating before period", types: ["E"] },
    ] },
  { q: "When do you feel hungriest or most likely to overeat?",
    options: [
      { text: "Right after lunch or in the afternoon", types: ["P"] },
      { text: "Evening — I tend to skip breakfast", types: ["A"] },
      { text: "Constantly — hard to feel full", types: ["T"] },
      { text: "Late at night (after 10pm)", types: ["L"] },
      { text: "When stressed, regardless of the time", types: ["C"] },
      { text: "Pre-menstrually or when emotional", types: ["E"] },
    ] },
];

function QuizModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ P: 0, A: 0, T: 0, L: 0, C: 0, E: 0 });
  const [result, setResult] = useState<typeof TYPES[0] | null>(null);

  function choose(types: string[]) {
    const next = { ...scores };
    types.forEach(t => { next[t] = (next[t] || 0) + 1; });
    setScores(next);
    if (step + 1 >= QUESTIONS.length) {
      const top = Object.entries(next).sort((a, b) => b[1] - a[1])[0][0];
      setResult(TYPES.find(t => t.type === top) || TYPES[0]);
    } else {
      setStep(step + 1);
    }
  }

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="absolute inset-0" style={{ background: 'rgba(0,25,26,0.75)', backdropFilter: 'blur(8px)' }} onClick={onClose} />
      <motion.div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 24 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 z-10" style={{ background: 'rgba(0,0,0,0.05)' }}>✕</button>
        {!result ? (
          <div className="p-8 pt-10">
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                <span>Question {step + 1} of {QUESTIONS.length}</span>
                <span>{Math.round((step / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ background: 'var(--color-primary)' }}
                  animate={{ width: `${(step / QUESTIONS.length) * 100}%` }} transition={{ duration: 0.4 }} />
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
                <h3 className="mb-5" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.4 }}>{QUESTIONS[step].q}</h3>
                <div className="space-y-2">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button key={i} onClick={() => choose(opt.types)} className="w-full text-left px-4 py-3 rounded-xl transition-all"
                      style={{ background: '#f7fbf9', border: '1px solid rgba(0,79,81,0.1)', fontSize: '14px', color: 'var(--color-text)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8f5f1'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,79,81,0.3)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f7fbf9'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,79,81,0.1)'; }}>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div className="p-8 pt-10 text-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: result.color }}>
              <span className="text-white font-bold text-2xl">{result.type}</span>
            </div>
            <p className="text-xs font-bold mb-1 tracking-wider" style={{ color: result.color }}>YOUR HORMONAL BODY TYPE</p>
            <h3 className="mb-1" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-text)' }}>{result.label}</h3>
            <p className="mb-5 font-medium" style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>{result.title}</p>
            <ul className="text-left space-y-2 mb-6 p-4 rounded-xl" style={{ background: result.bg }}>
              {result.symptoms.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text)' }}>
                  <span style={{ color: result.color, flexShrink: 0 }}>·</span>{s}
                </li>
              ))}
            </ul>
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Want to understand what this means for your body and how to address it?
            </p>
            <p className="text-xs mb-4 px-1" style={{ color: 'rgba(0,0,0,0.35)', lineHeight: 1.6 }}>
              This result is a quick initial screen based on self-reported patterns. It is not a medical diagnosis and should not replace professional advice.
            </p>
            <a href="https://pro.cofit.me/administrator/registration_forms/3088/new_group_class_order?org_id=3" onClick={onClose} className="block w-full py-4 rounded-xl text-white font-semibold mb-3 text-center" style={{ background: result.color }}>
              Book a 1-on-1 Nutritionist Consultation →
            </a>
            <button onClick={onClose} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Close</button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function HormoneTypesSection() {
  const [active, setActive] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section className="py-32 bg-white" id="hormone-types">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          heading="Weight gain isn't just about food — it's your hormones"
          subheading="Hormonal imbalances are often the hidden root cause of stubborn weight. After years of clinical research, Cofit identifies which of 6 hormonal body types you are — and builds your entire program around that specific root cause."
          headingSize={48}
          subheadingMaxWidth="max-w-3xl"
          className="mb-10"
        />

        {/* Quiz CTA + disclaimer */}
        <motion.div className="flex flex-col items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <MagneticButton onClick={() => setShowQuiz(true)} className="text-white shadow-lg"
            style={{ backgroundColor: 'var(--color-primary)', paddingLeft: '2rem', paddingRight: '2rem' }}>
            🧬 Find My Hormonal Body Type
          </MagneticButton>
          <p className="text-center max-w-md" style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            This is a quick self-screening tool based on common hormonal patterns. Results are indicative only and do not represent a clinical diagnosis or constitute medical advice. For an accurate assessment, please consult a registered nutritionist.
          </p>
        </motion.div>

        {/* 6-type grid */}
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {TYPES.map((t, i) => (
            <motion.div key={t.type} className="hormone-card rounded-2xl p-8 cursor-pointer relative overflow-hidden flex gap-5"
              style={{ background: t.bg, border: `1px solid ${t.color}22`, boxShadow: active === i ? `0 12px 40px ${t.color}28` : '0 1px 2px rgba(15,31,26,0.04)' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setActive(active === i ? null : i)}>

              {/* Body illustration */}
              <div className="flex-shrink-0" style={{ width: 56, height: 84, color: t.color }}>
                {BODY_SVGS[t.type]}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: t.color }}>
                    <span className="text-white font-bold text-sm">{t.type}</span>
                  </div>
                  <div>
                    <p className="font-bold leading-tight" style={{ fontSize: '15px', color: 'var(--color-text)' }}>{t.label}</p>
                    <p className="text-xs font-semibold" style={{ color: t.color }}>{t.title}</p>
                  </div>
                </div>
                <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t.symptoms[0]}</p>
                <AnimatePresence>
                  {active === i && (
                    <motion.ul className="space-y-1 pt-2" style={{ borderTop: `1px solid ${t.color}20` }}
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
                      {t.symptoms.slice(1).map((s, j) => (
                        <li key={j} className="text-xs flex gap-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                          <span style={{ color: t.color, flexShrink: 0 }}>·</span>{s}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <div className="mt-2 text-xs font-semibold" style={{ color: t.color }}>{active === i ? 'Less ↑' : 'More ↓'}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>{showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}</AnimatePresence>

      <style>{`
        @keyframes fat-pulse {
          0%, 100% { opacity: var(--fz-base, 0.85); }
          45%       { opacity: 0.15; }
        }
        .hormone-card:hover .fat-zone {
          animation: fat-pulse 1.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

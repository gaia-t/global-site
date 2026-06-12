import { motion } from "motion/react";

const ROW_A = [
  "🔄 Lost weight before, gained it back",
  "🍬 Cravings stronger than motivation",
  "⏰ Too busy to eat healthy",
  "😔 Guilt every time you enjoy food",
  "😕 Confused by conflicting advice",
  "💔 Weight affecting confidence",
  "🌙 Late-night hunger you can't ignore",
  "📉 Hit a frustrating plateau",
  "🥗 Eating well but still not losing",
  "😴 Tired even after a full night's sleep",
];

const ROW_B = [
  "🍞 Can't stop thinking about bread & noodles",
  "💪 Exercising but the scale won't move",
  "🧠 Stress eating you can't shake",
  "👗 Nothing fits the way it used to",
  "🔁 Every new diet works — until it doesn't",
  "🤷 Wondering what's wrong with you",
  "😤 Dieting feels like punishment",
  "🫃 Belly fat that just won't budge",
  "📱 Tried every app but nothing sticks",
  "🙅 Know what to eat but can't stick to it",
];

const COLORS = [
  { bg: '#f0fffe', color: '#004F51', border: 'rgba(0,79,81,0.12)' },
  { bg: '#fff8f0', color: '#b45309', border: 'rgba(180,83,9,0.12)' },
  { bg: '#f5f3ff', color: '#6d4fc2', border: 'rgba(109,79,194,0.12)' },
];

function Tag({ text, idx }: { text: string; idx: number }) {
  const c = COLORS[idx % COLORS.length];
  return (
    <span
      className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap"
      style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
    >
      {text}
    </span>
  );
}

function MarqueeRow({ tags, reverse = false }: { tags: string[]; reverse?: boolean }) {
  const tripled = [...tags, ...tags, ...tags];
  const duration = tags.length * 3.5;
  return (
    <div
      className="overflow-hidden py-2"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}
    >
      <div
        className="flex gap-3 w-max"
        style={{ animation: `marquee${reverse ? '-rev' : ''} ${duration}s linear infinite` }}
      >
        {tripled.map((tag, i) => <Tag key={i} text={tag} idx={i} />)}
      </div>
    </div>
  );
}

const CHECKLIST = [
  "You've lost weight before, but gained it back.",
  'You know what you "should" eat, but can\'t stick to it.',
  "You feel guilty every time you enjoy your favorite foods.",
  "Your cravings seem stronger than your motivation.",
  "Every new diet works for a while—until it doesn't.",
  "You're tired of wondering what's wrong with you.",
];

export default function SolutionsSection() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-rev {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section className="relative overflow-hidden pb-16 pt-14 bg-white" id="solutions">
        {/* Heading block */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <motion.h2
            className="text-center"
            style={{
              fontSize: 'clamp(20px, 2.8vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.25,
              color: 'var(--color-text)',
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            If losing weight were just about eating less,<br />you'd already be there.
          </motion.h2>
        </div>

        {/* Marquee */}
        <div className="space-y-2.5 mb-12">
          <MarqueeRow tags={ROW_A} />
          <MarqueeRow tags={ROW_B} reverse />
        </div>

        {/* Body copy + checklist */}
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Most people don't struggle because they lack discipline.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              They struggle because they're following advice that wasn't designed for their body, lifestyle, culture, or daily reality.
            </p>

            {/* Sound familiar? */}
            <div className="pt-2">
              <p className="font-bold mb-5" style={{ fontSize: '20px', color: 'var(--color-text)' }}>
                Sound familiar?
              </p>
              <ul className="space-y-3">
                {CHECKLIST.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: '#f0fffe', border: '1px solid rgba(0,79,81,0.2)' }}
                    >
                      <span style={{ fontSize: 10, color: 'var(--color-primary)', fontWeight: 700 }}>✓</span>
                    </span>
                    <span style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--color-text)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Truth callout */}
          <motion.div
            className="mt-10 p-8 rounded-3xl text-center"
            style={{ background: 'linear-gradient(135deg, #004F51 0%, #169E6B 100%)' }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-white mb-3" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 700 }}>
              The truth? Nothing is wrong with you.
            </p>
            <p className="text-white/80 mb-5" style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.7 }}>
              You simply haven't been given a plan that works for your life.
            </p>
            <div
              className="rounded-2xl px-6 py-5 text-left"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <p className="text-white" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75 }}>
                Most diets ignore your hormonal body type, your lifestyle, and your psychology.{' '}
                <span style={{ fontWeight: 600 }}>Flex8 addresses all three</span> — with a real nutritionist by your side.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

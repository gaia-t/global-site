import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const STORIES = [
  {
    name: "Sandra",
    change: null,
    location: "Hong Kong",
    quote: "The nutritionist customized the diet plan to my needs and helped me better understand my daily nutrition intake. This experience has been truly transformative.",
    initial: "S",
    color: "#169E6B",
  },
  {
    name: "Katie Chan",
    change: "70 kg → 66 kg",
    location: "Hong Kong",
    quote: "The programme was mind-blowing for me. I realized my protein needs were much higher than I imagined.",
    initial: "K",
    color: "#004F51",
  },
  {
    name: "Christine Tzeng",
    change: "64.9 kg → 60 kg",
    location: "Taipei",
    quote: "I learned how to build balanced meals, enjoy social gatherings, and feel less guilt around food.",
    initial: "C",
    color: "#00C2E0",
  },
  {
    name: "Gabriel",
    change: "60 kg → 57 kg",
    location: "Taipei",
    quote: "I learned that weight loss doesn't have to be fast. The nutritionists patiently supported me through the journey.",
    initial: "G",
    color: "#FFB46E",
  },
  {
    name: "Lee",
    change: "72.7 kg → 63.7 kg",
    location: "Taipei",
    quote: "For the first time in my life, I lost over 8 kg without painful restriction.",
    initial: "L",
    color: "#7B61FF",
  },
];

const N = STORIES.length;
function wrap(i: number) { return ((i % N) + N) % N; }
function getSlot(i: number, active: number) {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

interface CardProps {
  story: typeof STORIES[number];
  slot: number;
  onClick: () => void;
}

function StoryCard({ story, slot, onClick }: CardProps) {
  const isCenter = slot === 0;
  const isEdge = Math.abs(slot) >= 2;
  const x = slot * 320;
  const scale = isCenter ? 1 : isEdge ? 0.78 : 0.88;
  const opacity = isCenter ? 1 : isEdge ? 0 : 0.45;
  const zIndex = isCenter ? 20 : 10 - Math.abs(slot);
  const blur = isCenter ? 0 : isEdge ? 0 : 1.5;

  return (
    <motion.div
      className="absolute top-0"
      style={{ width: 340, left: '50%', marginLeft: -170, zIndex, cursor: isCenter ? 'default' : 'pointer' }}
      animate={{ x, scale, opacity }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={!isCenter ? onClick : undefined}
    >
      <div
        className="rounded-2xl p-8 flex flex-col justify-between relative select-none"
        style={{
          background: 'white',
          minHeight: 260,
          boxShadow: isCenter ? '0 20px 60px rgba(0,79,81,0.18)' : '0 4px 16px rgba(0,79,81,0.06)',
          border: isCenter ? '1.5px solid rgba(0,79,81,0.15)' : '1.5px solid transparent',
          filter: blur ? `blur(${blur}px)` : 'none',
          transition: 'box-shadow 0.4s, border 0.4s',
        }}
      >
        <div className="absolute top-5 right-7 select-none pointer-events-none"
          style={{ fontSize: '56px', lineHeight: 1, color: 'rgba(0,79,81,0.04)', fontFamily: 'Georgia, serif' }}>"</div>

        <div className="flex gap-[3px] mb-4">
          {[0,1,2,3,4].map(s => (
            <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#F5A623">
              <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.1L8 10.4l-3.7 1.94.7-4.1L2 5.5l4.15-.75z"/>
            </svg>
          ))}
        </div>

        <blockquote className="relative mb-7"
          style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'var(--color-text)', fontStyle: 'italic' }}>
          "{story.quote}"
        </blockquote>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
            style={{ background: story.color }}>
            {story.initial}
          </div>
          <div>
            <p className="font-semibold" style={{ fontSize: '14px', color: 'var(--color-text)' }}>{story.name}</p>
            <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
              📍 {story.location}
              {story.change && (
                <span className="ml-2 font-semibold" style={{ color: story.color }}>{story.change}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mobile single-card view ── */
function MobileCard({ story }: { story: typeof STORIES[number] }) {
  return (
    <div className="rounded-2xl p-7 relative bg-white"
      style={{ boxShadow: '0 8px 32px rgba(0,79,81,0.12)', border: '1.5px solid rgba(0,79,81,0.12)' }}>
      <div className="absolute top-5 right-6 select-none pointer-events-none"
        style={{ fontSize: '48px', lineHeight: 1, color: 'rgba(0,79,81,0.04)', fontFamily: 'Georgia, serif' }}>"</div>
      <div className="flex gap-[3px] mb-4">
        {[0,1,2,3,4].map(s => (
          <svg key={s} width="15" height="15" viewBox="0 0 16 16" fill="#F5A623">
            <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.1L8 10.4l-3.7 1.94.7-4.1L2 5.5l4.15-.75z"/>
          </svg>
        ))}
      </div>
      <blockquote className="mb-6" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, fontStyle: 'italic', color: 'var(--color-text)' }}>
        "{story.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
          style={{ background: story.color }}>
          {story.initial}
        </div>
        <div>
          <p className="font-semibold" style={{ fontSize: '13px', color: 'var(--color-text)' }}>{story.name}</p>
          <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
            📍 {story.location}
            {story.change && <span className="ml-2 font-semibold" style={{ color: story.color }}>{story.change}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => wrap(a + 1)), 5000);
    return () => clearInterval(id);
  }, []);

  function prev() { setActive(a => wrap(a - 1)); }
  function next() { setActive(a => wrap(a + 1)); }

  const controls = (
    <div className="flex gap-2 items-center">
      <button onClick={prev}
        className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-white"
        style={{ borderColor: 'rgba(0,79,81,0.2)', color: 'var(--color-primary)' }}>←</button>
      <div className="flex gap-1.5">
        {STORIES.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === active ? 22 : 7, height: 7, background: i === active ? 'var(--color-primary)' : 'rgba(0,79,81,0.2)' }} />
        ))}
      </div>
      <button onClick={next}
        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
        style={{ background: 'var(--color-primary)' }}>→</button>
    </div>
  );

  return (
    <section className="py-24 bg-[#f7fbf9]" id="results">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-14">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold mb-2 tracking-widest" style={{ color: 'var(--color-secondary)' }}>SUCCESS STORIES</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, lineHeight: 1.2, color: 'var(--color-text)' }}>
              Real Results from Real People
            </h2>
          </div>
          {/* Controls on desktop */}
          <div className="hidden md:flex">{controls}</div>
        </div>
      </div>

      {/* Desktop: 3-up carousel */}
      <div className="hidden md:block relative mx-auto overflow-hidden" style={{ height: 300, maxWidth: 1080 }}>
        {STORIES.map((story, i) => {
          const slot = getSlot(i, active);
          if (Math.abs(slot) > 2) return null;
          return (
            <StoryCard key={story.name} story={story} slot={slot} onClick={() => setActive(i)} />
          );
        })}
      </div>

      {/* Mobile: single animated card */}
      <div className="md:hidden px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <MobileCard story={STORIES[active]} />
          </motion.div>
        </AnimatePresence>

        {/* Mobile controls */}
        <div className="flex justify-center mt-5">{controls}</div>
      </div>
    </section>
  );
}

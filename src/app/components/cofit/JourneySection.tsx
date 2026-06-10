import { motion } from "motion/react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

// Clean stroke-based SVG icons (24×24, strokeWidth 1.5, no fill)
function IconAssessment() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 0 8 4 4 0 0 1 0-8z"/>
      <path d="M12 10v4"/>
      <path d="M8 14h8"/>
      <path d="M9.5 18l-1 3M14.5 18l1 3"/>
      <path d="M6 14c-1.5 1-2 3-2 4h16c0-1-.5-3-2-4"/>
    </svg>
  );
}

function IconDietitian() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/>
      <path d="M5 21v-2a7 7 0 0 1 14 0v2"/>
      <path d="M16 11l1.5 1.5L20 10"/>
    </svg>
  );
}

function IconMealLog() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <circle cx="12" cy="12" r="3.5"/>
      <circle cx="12" cy="12" r="1"/>
      <path d="M7 5V3M17 5V3"/>
    </svg>
  );
}

function IconVideoCall() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14"/>
      <rect x="3" y="7" width="12" height="10" rx="2"/>
    </svg>
  );
}

function IconGoal() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="5"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

const STEPS = [
  {
    num: "01",
    Icon: IconAssessment,
    title: "Hormone Assessment",
    description: "Complete our clinical hormone body-type quiz to identify your personal obesity pattern.",
    color: "#169E6B",
    bg: "#e8f8f2",
  },
  {
    num: "02",
    Icon: IconDietitian,
    title: "Meet Your Dietitian",
    description: "Your registered dietitian reviews your profile and customizes your 8-week plan.",
    color: "#004F51",
    bg: "#e6f0f0",
  },
  {
    num: "03",
    Icon: IconMealLog,
    title: "Daily Meal Check-in",
    description: "Log meals via photo. Your dietitian responds every day with personalized guidance.",
    color: "#00C2E0",
    bg: "#e0f7fb",
  },
  {
    num: "04",
    Icon: IconVideoCall,
    title: "Video Consultations",
    description: "1-on-1 video calls to adjust strategy and answer your questions in depth.",
    color: "#e8810a",
    bg: "#fff5e9",
  },
  {
    num: "05",
    Icon: IconGoal,
    title: "Reach Your Goal",
    description: "Track results, claim your cash reward, and build habits that last well beyond 8 weeks.",
    color: "#169E6B",
    bg: "#e8f8f2",
  },
];

const TAGS = [
  "Identify your hormonal imbalance pattern",
  "Meal plan tailored to your body type",
  "Address root causes — not just calories",
  "Clinically developed by obesity researchers",
  "Daily check-in responses from your dietitian",
];

export default function JourneySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#f7fbf9] overflow-hidden" id="journey">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          eyebrow="PROGRAM FEATURES"
          heading="Your 8-week journey, step by step"
          headingSize={48}
          subheadingMaxWidth="max-w-2xl"
          className="mb-8"
        />

        {/* Feature tags — centered */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {TAGS.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: '#f0fffe', color: 'var(--color-primary)', border: '1px solid rgba(0,79,81,0.15)' }}
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </span>
          ))}
        </motion.div>

        {/* Horizontal steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-[35px] left-[14%] right-[14%] h-px max-md:hidden pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,79,81,0.12) 10%, rgba(22,158,107,0.25) 50%, rgba(0,79,81,0.12) 90%, transparent)' }}
          />
          {/* Connector arrow dots */}
          {[0,1,2,3].map(i => (
            <div
              key={i}
              className="absolute max-md:hidden pointer-events-none"
              style={{
                top: 29,
                left: `${20.5 + i * 19.8}%`,
                width: 12, height: 12,
                borderRadius: '50%',
                background: hovered !== null && (hovered === i || hovered === i + 1)
                  ? STEPS[i].color
                  : 'rgba(22,158,107,0.3)',
                transform: 'translateX(-50%)',
                transition: 'background 0.3s',
                boxShadow: hovered !== null && (hovered === i || hovered === i + 1)
                  ? `0 0 8px ${STEPS[i].color}60`
                  : 'none',
              }}
            />
          ))}

          <div className="grid grid-cols-5 gap-4 max-md:grid-cols-1 max-md:max-w-sm max-md:mx-auto">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
              >
                {/* Icon circle */}
                <div
                  className="relative z-10 flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    width: 72, height: 72,
                    borderRadius: 24,
                    background: hovered === i ? step.color : step.bg,
                    border: `1.5px solid ${step.color}${hovered === i ? '55' : '22'}`,
                    boxShadow: hovered === i
                      ? `0 10px 28px ${step.color}40`
                      : `0 4px 16px ${step.color}18`,
                    color: hovered === i ? 'white' : step.color,
                    transform: hovered === i ? 'scale(1.1) translateY(-4px)' : 'scale(1) translateY(0)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <step.Icon />
                </div>

                {/* Step number */}
                <div
                  className="text-xs font-bold tracking-widest mb-2 transition-all duration-200"
                  style={{
                    color: hovered === i ? step.color : 'rgba(0,79,81,0.38)',
                    fontFamily: '"DM Serif Display", serif',
                    transform: hovered === i ? 'scale(1.1)' : 'scale(1)',
                    display: 'inline-block',
                  }}
                >
                  {step.num}
                </div>

                {/* Card */}
                <motion.div
                  className="w-full rounded-2xl bg-white p-5"
                  style={{
                    boxShadow: hovered === i
                      ? `0 12px 40px ${step.color}22, 0 2px 6px rgba(15,31,26,0.06)`
                      : '0 1px 2px rgba(15,31,26,0.04), 0 8px 20px -6px rgba(15,31,26,0.08)',
                    border: hovered === i ? `1px solid ${step.color}28` : '1px solid transparent',
                    transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                  }}
                >
                  <h3
                    className="mb-2 font-bold"
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: '15px',
                      color: hovered === i ? step.color : 'var(--color-text)',
                      lineHeight: 1.3,
                      transition: 'color 0.22s ease',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

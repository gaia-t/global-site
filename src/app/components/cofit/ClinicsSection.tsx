import { motion } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import SectionHeader from "./SectionHeader";

const CLINICS = [
  {
    region: "Taipei · Renai",
    tagline: "Boutique Premium Experience",
    tags: ["Body Sculpting", "Holistic Wellness", "Refined Experience"],
    name: "Chiayi Medical Beauty Clinic",
    address: "3F, No.66, Sec. 4, Renai Rd., Da'an Dist., Taipei",
    description:
      "Combines premium body-sculpting technology with metabolic health — for those who value both results and discretion.",
    photo: "https://clinic.cofit.me/assets/clinic-taipei-xingtian-DBGI-7Rb.jpg",
    gradient: "linear-gradient(160deg, #169E6B 0%, #004F51 100%)",
  },
  {
    region: "Taipei · Xingtian",
    tagline: "Cofit Flagship Core",
    tags: ["Full Medical Team", "Precision Data Diagnostics", "Clinical Core"],
    name: "Genesis Clinic",
    address: "4F, No.163, Sec. 2, Minsheng E. Rd., Zhongshan Dist., Taipei",
    description:
      "Birthplace of the FLC flexible low-carb method. Our research core team delivers the deepest precision data analysis available.",
    photo: "https://clinic.cofit.me/assets/clinic-taipei-renai-Ckr4a-wv.jpg",
    gradient: "linear-gradient(160deg, #004F51 0%, #169E6B 100%)",
  },
  {
    region: "New Taipei · Tucheng",
    tagline: "Weight Loss × Aesthetics Combined",
    tags: ["Integrated Weight & Aesthetics", "Mind-Body Health", "One-Stop Service"],
    name: "Guangchuan Hospital",
    address: "No.276, Yumin Rd., Tucheng Dist., New Taipei City",
    description:
      "Dr. Lee Yan-Feng specializes in both weight management and medical aesthetics — so you lose weight and look better at the same time.",
    photo: "https://clinic.cofit.me/assets/clinic-xinbei-tucheng-ButxvkyC.jpg",
    gradient: "linear-gradient(160deg, #0d7a5c 0%, #004F51 100%)",
  },
  {
    region: "Hsinchu · Science Park",
    tagline: "Built for the Tech District",
    tags: ["Executive Weight Loss", "Tech Industry Clientele", "Efficient Programs"],
    name: "Genesis Clinic Hsinchu",
    address: "No.16, Zhanmei Rd., East Dist., Hsinchu City",
    description:
      "Designed for high-performing tech professionals. Efficient programs that help you balance work demands with long-term health.",
    photo: "https://clinic.cofit.me/assets/clinic-hsinchu-CXdp8F6y.jpg",
    gradient: "linear-gradient(160deg, #169E6B 0%, #00C2E0 100%)",
  },
  {
    region: "Kaohsiung · Zuoying",
    tagline: "Southern Taiwan Medical Hub",
    tags: ["Local Expert Care", "Near MRT Arena Station"],
    name: "Genesis Clinic Kaohsiung",
    address: "No.220, Ziyou 2nd Rd., Zuoying Dist., Kaohsiung City",
    description:
      "Bringing Cofit's international-standard metabolic programs to southern Taiwan. Walking distance from Kaohsiung MRT Zuoying (Arena) Station.",
    photo: "https://clinic.cofit.me/assets/clinic_kaohsiung-Cle_6yaK.jpg",
    gradient: "linear-gradient(160deg, #004F51 0%, #169E6B 100%)",
  },
  {
    region: "Hong Kong · Kowloon",
    tagline: "First Overseas Location",
    tags: ["Cross-Border Expert Team", "Localized Dietary Guidance", "Direct HQ Branch"],
    name: "Cofit Hong Kong",
    address: "Rm C, 12F, Kowloon Centre, 33 Ashley Rd, Tsim Sha Tsui, Kowloon",
    description:
      "On-site physician consultations paired with cross-border guidance from Taiwan — precision weight management for Hong Kong's fast-paced lifestyle.",
    photo: "https://clinic.cofit.me/assets/clinic_hongkong-9Tnu2jvK.jpg",
    gradient: "linear-gradient(160deg, #004F51 0%, #7B61FF 100%)",
  },
];

const N = CLINICS.length;            // 6
const CARD_W = 340;
const CARD_GAP = 20;
const STEP = CARD_W + CARD_GAP;
const LEFT_PAD = 32;                 // px padding on left of viewport

// Triple-clone array so we can quietly teleport when reaching the outer copies
// Indices 0..N-1 = copy A, N..2N-1 = copy B (start here), 2N..3N-1 = copy C
const LOOP = [...CLINICS, ...CLINICS, ...CLINICS];

function ClinicCard({ clinic }: { clinic: typeof CLINICS[0] }) {
  return (
    <div
      className="bg-white rounded-xl flex flex-col overflow-hidden group"
      style={{ width: CARD_W, flexShrink: 0, border: '1px solid #e5edee' }}
    >
      <div className="h-[160px] relative shrink-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: clinic.gradient }} />
        <img
          loading="lazy"
          alt={clinic.name}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
          src={clinic.photo}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div
          className="absolute left-4 top-4 flex items-center px-[10px] py-[5px] rounded-full"
          style={{ background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(255,255,255,0.18)' }}
        >
          <p className="text-white text-[11px] font-medium whitespace-nowrap">{clinic.region}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[9px] px-5 pt-4 pb-5 flex-1">
        <p className="text-[#004f51] text-[11px] font-semibold tracking-[1px]">{clinic.tagline}</p>
        <div className="flex flex-wrap gap-[5px]">
          {clinic.tags.map((tag, ti) => (
            <span key={ti} className="px-2.5 py-[4px] rounded-full text-[10px] font-medium text-[#004f51] whitespace-nowrap" style={{ background: '#f2f6f6' }}>
              {tag}
            </span>
          ))}
        </div>
        <p className="font-bold text-[#002223] text-[18px] leading-snug">{clinic.name}</p>
        <p className="text-[#4e5969] text-[12px] leading-[1.5]">{clinic.address}</p>
        <p className="text-[#4e5969] text-[13px] leading-[1.7]">{clinic.description}</p>
      </div>
    </div>
  );
}

export default function ClinicsSection() {
  // idx = which index in LOOP is leftmost-visible; start at copy B (idx = N)
  const [idx, setIdx] = useState(N);
  const [animated, setAnimated] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Translate so card at `idx` appears at LEFT_PAD from the viewport
  const translateX = -idx * STEP + LEFT_PAD;

  // After each animated move, quietly teleport if we've drifted into copy A or C
  const onTransitionEnd = useCallback(() => {
    setIdx(i => {
      if (i < N) return i + N;
      if (i >= N * 2) return i - N;
      return i;
    });
    // Disable animation just for the teleport frame, then re-enable
    setAnimated(false);
  }, []);

  useEffect(() => {
    if (!animated) {
      // one rAF to let the no-transition frame paint, then re-enable
      const raf = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [animated]);

  function prev() { setAnimated(true); setIdx(i => i - 1); }
  function next() { setAnimated(true); setIdx(i => i + 1); }

  // Dot indicator — which real clinic is leftmost (modulo N)
  const dotActive = ((idx % N) + N) % N;

  return (
    <section className="py-24 bg-white overflow-hidden" id="clinics">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <SectionHeader
                eyebrow="CLINIC LOCATIONS"
                heading="Visit Us In Person"
                subheading="Cofit operates and partners with licensed medical clinics across Taiwan and Hong Kong — a mark of the clinical rigor and real-world presence behind every program."
                headingSize={44}
                subheadingMaxWidth="max-w-xl"
              />
            </div>

            {/* Prev / Next — no disabled state, always active (infinite) */}
            <div className="flex gap-2 items-center flex-shrink-0 pb-1">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center border transition-all hover:shadow-md"
                style={{ borderColor: 'rgba(0,79,81,0.25)', color: 'var(--color-primary)', background: 'white', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,79,81,0.08)' }}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:shadow-md"
                style={{ background: 'var(--color-primary)', color: 'white', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,79,81,0.25)' }}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Card viewport — overflow hidden to clip */}
      <div className="relative overflow-hidden py-4">
        {/* Sliding track */}
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: CARD_GAP,
            transform: `translateX(${translateX}px)`,
            transition: animated ? 'transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            willChange: 'transform',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {LOOP.map((clinic, i) => (
            <ClinicCard key={i} clinic={clinic} />
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute top-0 left-0 bottom-0 w-16 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-16 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)' }} />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {CLINICS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimated(true); setIdx(N + i); }}
            className="rounded-full transition-all duration-300"
            style={{ width: i === dotActive ? 24 : 8, height: 8, background: i === dotActive ? 'var(--color-primary)' : 'rgba(0,79,81,0.2)', cursor: 'pointer' }}
            aria-label={`Go to ${CLINICS[i].name}`}
          />
        ))}
      </div>
    </section>
  );
}

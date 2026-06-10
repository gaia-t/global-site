import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";
import { Link, useParams, Navigate } from "react-router";
import Header from "../cofit/Header";
import ScrollProgress from "../cofit/ScrollProgress";
import BackToTop from "../cofit/BackToTop";
import MagneticButton from "../cofit/MagneticButton";
import Footer from "../cofit/Footer";
import { PARTNER_PATHS, PARTNER_PATH_LIST } from "../../data/partnerPaths";

export default function PartnerPathPage() {
  const { slug } = useParams();
  const data = slug ? PARTNER_PATHS[slug] : undefined;
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", country: "", goals: "" });

  if (!data) return <Navigate to="/partners" replace />;

  const others = PARTNER_PATH_LIST.filter((p) => p.slug !== data.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-primary)" }}>
      <ScrollProgress />
      <BackToTop />
      <Header />

      {/* Hero — photo + overlay, matching main pages */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, rgba(0,40,38,0.92), rgba(0,40,38,0.7))" }} />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center max-lg:gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", fontSize: 14, fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              ← All partnership paths
            </Link>
            <p
              className="mb-4"
              style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9FE3C7" }}
            >
              {data.pathNum} · {data.name}
            </p>
            <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.08, color: "#ffffff" }} className="mb-6 max-md:text-4xl">
              {data.h1}
            </h1>
            <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.9)" }} className="mb-8 max-w-2xl">
              {data.sub}
            </p>
            <div className="grid grid-cols-3 gap-8 mb-9 max-sm:grid-cols-1 max-sm:gap-5">
              {data.miniStats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", lineHeight: 1 }} className="mb-2">{s.num}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <MagneticButton href="#contact" className="text-white" style={{ backgroundColor: "var(--color-secondary)", fontSize: "17px" }}>
              {data.primaryCta}
            </MagneticButton>
          </motion.div>

          {/* Side card — white, on-brand */}
          <motion.div
            className="rounded-3xl p-8 bg-white"
            style={{ boxShadow: '0 30px 70px -30px rgba(15,31,26,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-primary)" }} className="mb-4">
              {data.sideCard.label}
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text)", lineHeight: 1.25 }} className="mb-5">
              {data.sideCard.title}
            </h3>
            <ul className="space-y-0">
              {data.sideCard.items.map((item, i) => (
                <li key={i} className="flex gap-3 py-3.5" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(15,31,26,0.1)", fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--color-secondary)", strokeWidth: 3 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 01 — Why this works */}
      <section className="py-28 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionLabel num="01" label="Why this works" />
          <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--color-text)", lineHeight: 1.15 }} className="mb-16 max-w-3xl max-md:text-3xl">
            {data.reasons.title}
          </h2>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {data.reasons.cards.map((c, i) => (
              <motion.div
                key={i}
                style={{ borderTop: "2px solid var(--color-secondary)" }}
                className="pt-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p style={{ fontSize: 15, fontStyle: "italic", color: "var(--color-secondary)" }} className="mb-3">{["i.", "ii.", "iii."][i]}</p>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text)", lineHeight: 1.25 }} className="mb-3">{c.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02 — What you get */}
      <section className="py-28 px-8" style={{ backgroundColor: "#f7f8f8" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel num="02" label="What you get" />
          <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--color-text)", lineHeight: 1.15 }} className="mb-12 max-md:text-3xl">
            {data.deliverables.title}
          </h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 max-md:grid-cols-1">
            {data.deliverables.items.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              >
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-secondary)" }} className="block mb-3">{d.label}</span>
                <h4 style={{ fontSize: 19, fontWeight: 700, color: "var(--color-text)" }} className="mb-2">{d.title}</h4>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 — Outcomes (optional) */}
      {data.outcomes && (
        <section className="py-28 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionLabel num="03" label="The numbers" />
            <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--color-text)", lineHeight: 1.15 }} className="mb-6 max-w-3xl max-md:text-3xl">
              {data.outcomes.title}
            </h2>
            {data.outcomes.intro && (
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.6 }} className="mb-12 max-w-2xl">{data.outcomes.intro}</p>
            )}
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 mt-4">
              {data.outcomes.items.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--color-secondary)", lineHeight: 1 }} className="mb-4">{o.num}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: "var(--color-text)" }} className="mb-2">{o.label}</div>
                  <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{o.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 04 — Case study (dark) */}
      <section className="py-28 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionLabel num="04" label="Case study" />
          <motion.div
            className="rounded-3xl p-14 max-md:p-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #004F51 0%, #00322f 100%)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }} className="mb-5">{data.caseStudy.mono}</p>
            <h3 style={{ fontSize: 28, fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }} className="mb-8 max-w-2xl max-md:text-2xl">{data.caseStudy.title}</h3>
            <div className="grid grid-cols-3 gap-8 mb-8 pb-8 max-md:grid-cols-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              {data.caseStudy.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "#ffffff", lineHeight: 1 }} className="mb-2">{s.num}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 20, fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.95)", lineHeight: 1.5 }} className="mb-4 max-w-3xl">
              "{data.caseStudy.quote}"
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{data.caseStudy.attr}</p>
          </motion.div>
        </div>
      </section>

      {/* Section 05 — FAQ */}
      <section className="py-28 px-8" style={{ backgroundColor: "#f7f8f8" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel num="05" label="Common questions" />
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "var(--color-text)", lineHeight: 1.15 }} className="mb-10 max-md:text-3xl">
            What partners ask first.
          </h2>
          <div>
            {data.faq.map((f, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(15,31,26,0.12)" }}>
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text)" }}>{f.q}</span>
                  <span style={{ fontSize: 22, color: "var(--color-secondary)", flexShrink: 0, lineHeight: 1 }}>{openFAQ === i ? "−" : "+"}</span>
                </button>
                {openFAQ === i && (
                  <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }} className="pb-6 -mt-1 max-w-3xl">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="contact" className="py-28 px-8 bg-gradient-to-b from-white to-[#f0fffe]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", color: "var(--color-primary)" }} className="mb-3">START THE CONVERSATION</p>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--color-text)" }} className="max-md:text-3xl">Tell us what you're looking to build</h2>
          </div>
          <motion.form
            className="bg-white rounded-3xl p-10 max-md:p-6"
            style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch within 5 business days."); }}
          >
            <div className="mb-6 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "rgba(22,158,107,0.06)", border: "1px solid var(--color-secondary)", fontSize: 14, color: "var(--color-primary)" }}>
              <span>Inquiry type: <strong>{data.name}</strong> (pre-selected)</span>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1">
              <Field label="First name *" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} required />
              <Field label="Last name *" value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} required />
            </div>
            <div className="mb-5">
              <Field label="Work email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1">
              <Field label="Company *" value={form.company} onChange={(v) => setForm({ ...form, company: v })} required />
              <div>
                <label className="block mb-2 font-medium" style={{ color: "var(--color-text)", fontSize: 14 }}>Country / Region *</label>
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                  style={{ fontSize: 16 }}
                >
                  <option value="">Select...</option>
                  <option>North America</option><option>Europe</option><option>Japan</option><option>Greater China (TW / HK / CN)</option><option>Singapore</option><option>Malaysia</option><option>Other Southeast Asia</option><option>Multi-market</option><option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-8">
              <label className="block mb-2 font-medium" style={{ color: "var(--color-text)", fontSize: 14 }}>Tell us about your goals *</label>
              <textarea
                required
                rows={5}
                value={form.goals}
                onChange={(e) => setForm({ ...form, goals: e.target.value })}
                placeholder="What outcome are you hoping for? Any timeline, scope, or budget constraints?"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors resize-none"
                style={{ fontSize: 16 }}
              />
            </div>
            <MagneticButton type="submit" className="w-full text-center text-white" style={{ backgroundColor: "var(--color-secondary)", fontSize: "18px" }}>
              Send inquiry
            </MagneticButton>
          </motion.form>
        </div>
      </section>

      {/* Other paths */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", color: "var(--color-text-secondary)" }} className="text-center mb-8">EXPLORE OTHER PARTNERSHIP PATHS</p>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/partners/${p.slug}`}
                className="block p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_28px_-8px_rgba(15,31,26,0.12)] hover:shadow-[0_24px_50px_-18px_rgba(15,31,26,0.16)]"
              >
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "var(--color-secondary)" }} className="mb-2">{p.pathNum}</p>
                <h4 style={{ fontSize: 17, fontWeight: 700, color: "var(--color-primary)" }}>{p.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer
        columns={[
          { heading: "Pages", links: [
            { label: "Flex8 Program", href: "/" },
            { label: "Consultation",  href: "/consultation" },
          ]},
        ]}
        copyright="© 2026 Cofit · Headquartered in Taipei. Trusted by Novo Nordisk and clinical leaders worldwide."
      />
    </div>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <span style={{ fontSize: 18, fontWeight: 700, color: "var(--color-secondary)" }}>{num}</span>
      <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{label}</span>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block mb-2 font-medium" style={{ color: "var(--color-text)", fontSize: 14 }}>{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
        style={{ fontSize: 16 }}
      />
    </div>
  );
}

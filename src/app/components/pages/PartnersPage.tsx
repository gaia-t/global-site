import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { TrendingUp, Award, Lightbulb, Check } from "lucide-react";
import Header from "../cofit/Header";
import ScrollProgress from "../cofit/ScrollProgress";
import BackToTop from "../cofit/BackToTop";
import MagneticButton from "../cofit/MagneticButton";
import AnimatedCounter from "../cofit/AnimatedCounter";
import SectionHeader from "../cofit/SectionHeader";
import Footer from "../cofit/Footer";
import AmbientGlow from "../cofit/AmbientGlow";

export default function PartnersPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [formData, setFormData] = useState({
    partnership: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyName: "",
    companyWebsite: "",
    role: "",
    teamSize: "",
    budget: "",
    timeline: "",
    goals: "",
  });

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <ScrollProgress />
      <BackToTop />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <motion.div
            className="max-w-3xl"
            style={{ opacity: heroOpacity }}
          >
            <motion.p
              style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}
              className="mb-5 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Partnerships — Now open globally
            </motion.p>
            <motion.h1
              style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.08 }}
              className="mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              The world's largest nutritionist-led metabolic health platform — now open to partners.
            </motion.h1>
            <motion.p
              style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.7 }}
              className="mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              1,000+ registered nutritionists. Proprietary multi-language AI. Peer-reviewed clinical evidence at population scale. Trusted by Novo Nordisk. Eight ways to partner — pick the one that fits who you are.
            </motion.p>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagneticButton
                href="#paths"
                className="text-white"
                style={{ backgroundColor: 'var(--color-secondary)', fontSize: '18px' }}
              >
                Find your partnership path
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="text-white backdrop-blur-sm border border-white/70"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', fontSize: '18px' }}
              >
                Book a call
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-white relative overflow-hidden">
        <AmbientGlow />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="rounded-3xl p-12 max-md:p-8"
            style={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px) saturate(130%)',
              WebkitBackdropFilter: 'blur(20px) saturate(130%)',
              boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              {[
                { value: 1000000, suffix: "+", label: "Members across TW, SG, MY, US", color: "#169E6B", format: (n: number) => (n >= 1000000 ? `${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M` : n.toLocaleString()) },
                { value: 1000, suffix: "+", label: "Registered nutritionists on platform", color: "#004F51" },
                { value: 10297, suffix: "", label: "Subjects in our Nutrients (2024) study", color: "#00C2E0" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                    className="mb-1"
                    style={{ fontSize: '36px', fontWeight: 700, color: stat.color }}
                  />
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Cofit */}
      <section className="py-32 px-8 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-16 gap-y-10 max-lg:grid-cols-1 mb-20 items-start">
            {/* Left — sticky section header */}
            <div className="col-span-5 max-lg:col-span-1">
              <SectionHeader
                align="left"
                eyebrow="WHY COFIT"
                heading="Why partners choose Cofit"
                subheading="Not another wellness app — a peer-reviewed, nutritionist-led platform partners can stand behind."
                subheadingMaxWidth="max-w-md"
                className="lg:sticky lg:top-28"
              />
            </div>

            {/* Right — reasons as an editorial divided list */}
            <div className="col-span-7 max-lg:col-span-1">
              {[
                {
                  title: "Peer-reviewed at scale",
                  description: "Published in Nutrients, 2024 — a 10,297-participant trial in collaboration with Taipei Medical University.",
                  Icon: Award,
                  color: "#169E6B",
                },
                {
                  title: "Pharma-partnered",
                  description: "Strategic collaboration with Novo Nordisk, maker of Ozempic®, Wegovy®, and Saxenda®, on lifestyle-led obesity care.",
                  Icon: Lightbulb,
                  color: "#00C2E0",
                },
                {
                  title: "Multi-language ready",
                  description: "English consultations with AI in your members' language. Active across TW, SG, MY, and US — expanding.",
                  Icon: TrendingUp,
                  color: "#FFB46E",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-5 items-start py-7 border-t border-[#eef2f1] first:border-t-0 first:pt-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}14` }}
                  >
                    <item.Icon className="w-7 h-7" style={{ color: item.color, strokeWidth: 1.5 }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-2">
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Story Image Section */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{ height: '500px' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Partner success"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="max-w-2xl p-16 max-md:p-8">
                <p
                  className="mb-6 text-white/90"
                  style={{
                    fontSize: '28px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                  }}
                >
                  "We built the platform we wished existed — the nutritionist workflow, the AI food-recognition engine, the clinical protocols — and now we're opening it up."
                </p>
                <div className="text-white">
                  <p style={{ fontSize: '18px', fontWeight: 600 }}>Build on what we built</p>
                  <p style={{ fontSize: '14px', opacity: 0.8 }}>Or have us run it for you — clinics, employers, insurers, pharma, builders & more</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="OUTCOMES AT SCALE"
            heading="When nutritionists lead, the data moves differently"
            subheading="We ran the largest study of its kind ever published — over 10,000 participants, peer-reviewed, with comparison to international diet benchmarks. The headline: real human guidance dramatically outperforms app-only self-management."
            className="mb-16"
          />

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 mb-16">
            {[
              { value: "5.4×", label: "More weight loss vs. app-only", note: "Nutritionist-guided participants lost 5.42–8% body weight in 8 weeks; the app-only control group lost just 1.54%." },
              { value: "2.7×", label: "More than Mediterranean diet", note: "Flex8 outperformed published outcomes for Mediterranean (2.2 kg), DASH (1.42 kg), and Low-Fat (0.99 kg) protocols." },
              { value: "82%", label: "Drive Flex8 completion", note: "Vs. ~40% industry benchmark for digital health programs — engagement-dependent ROI assumptions hold." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-white"
                style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 24px 50px -18px rgba(15,31,26,0.16)' }}
              >
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--color-secondary)', lineHeight: 1 }} className="mb-4">
                  {item.value}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-3">
                  {item.label}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Study callout */}
          <motion.div
            className="rounded-3xl p-12 max-md:p-8 grid grid-cols-2 gap-12 items-center max-md:grid-cols-1 bg-white"
            style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--color-primary)' }} className="mb-4">
                PUBLISHED RESEARCH
              </p>
              <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }} className="mb-4">
                The largest digital weight-management trial of its kind, ever published.
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Conducted with Taipei Medical University, this 10,297-participant trial showed nutritionist-led digital intervention produces clinically and statistically significant weight loss across an unprecedented sample size. Published in <em>Nutrients</em>, July 2024.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {[
                { num: "10,297", label: "Total participants — 14× the prior largest digital trial" },
                { num: "8 wk", label: "Trial duration with full dietary tracking" },
                { num: "6.24%", label: "Mean weight loss, male participants" },
                { num: "12.5%", label: "Max weight loss in highly engaged participants" },
              ].map((d, i) => (
                <div key={i}>
                  <div style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1 }} className="mb-2">
                    {d.num}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    {d.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Cofit Model — comparison table */}
      <section className="py-32 px-8 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="THE COFIT MODEL"
            heading="Where every other platform has a gap, we have a checkmark"
            subheading="Most digital health programs choose one strength and live with the trade-offs. Cofit was built to refuse the trade-off — combining clinical-grade nutritionist coaching, scalable AI, and multiple deployment models in a single platform."
            className="mb-16"
          />

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden" style={{ minWidth: 820, boxShadow: '0 18px 44px -22px rgba(15,31,26,0.12)' }}>
              <thead>
                <tr>
                  <th className="text-left p-4" style={{ width: '24%', borderBottom: '2px solid rgba(15,31,26,0.1)' }}></th>
                  {["Generic wellness apps", "AI-only chronic platforms", "In-clinic nutritionist consultation"].map((h) => (
                    <th
                      key={h}
                      className="text-left p-4"
                      style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', borderBottom: '2px solid rgba(15,31,26,0.1)' }}
                    >
                      {h}
                    </th>
                  ))}
                  <th
                    className="text-left p-4"
                    style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#ffffff', backgroundColor: 'var(--color-primary)', borderBottom: '2px solid var(--color-primary)' }}
                  >
                    The Cofit Model
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Real licensed nutritionists", cols: ["—", "—", "✓"], cofit: "✓ 1,000+ RDs" },
                  { feature: "Peer-reviewed evidence (10K+ subjects)", cols: ["—", "—", "—"], cofit: "Nutrients, 2024" },
                  { feature: "Multi-language member experience", cols: ["limited", "limited", "per clinic"], cofit: "✓ AI + nutritionists" },
                  { feature: "AI food recognition", cols: ["Western database", "Western database", "—"], cofit: "3.5M+, global cuisines" },
                  { feature: "GLP-1 companion care", cols: ["—", "limited", "—"], cofit: "Full program" },
                  { feature: "Pharma partnership track record", cols: ["—", "—", "—"], cofit: "Novo Nordisk & others" },
                  { feature: "SaaS / API / White-label", cols: ["—", "—", "—"], cofit: "✓" },
                  { feature: "Reseller / distribution programmes", cols: ["—", "—", "—"], cofit: "✓" },
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderTop: '1px solid rgba(15,31,26,0.08)' }}>
                    <td className="p-4" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text)' }}>
                      {row.feature}
                    </td>
                    {row.cols.map((c, ci) => {
                      const soft = c === "limited" || c === "per clinic";
                      return (
                        <td
                          key={ci}
                          className="p-4"
                          style={{
                            fontSize: soft ? '13px' : '14px',
                            fontStyle: soft ? 'italic' : 'normal',
                            color: c === "—" ? 'var(--color-text-secondary)' : soft ? 'var(--color-accent-orange)' : 'var(--color-text-secondary)',
                          }}
                        >
                          {c === "✓" ? <Check className="w-5 h-5" style={{ color: 'var(--color-secondary)', strokeWidth: 2.5 }} /> : c}
                        </td>
                      );
                    })}
                    <td
                      className="p-4"
                      style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', backgroundColor: 'rgba(22,158,107,0.06)' }}
                    >
                      {row.cofit.startsWith("✓") ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Check className="w-4 h-4 flex-shrink-0" style={{ strokeWidth: 2.5 }} />
                          {row.cofit.replace(/^✓\s*/, "")}
                        </span>
                      ) : row.cofit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="paths" className="relative overflow-hidden py-32 px-8" style={{ background: 'linear-gradient(180deg, #f6fcfb 0%, #ffffff 55%)' }}>
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            eyebrow="FIND YOUR PARTNERSHIP PATH"
            heading="Pick the role that sounds like you"
            subheading="Eight tailored paths so you don't have to translate from vendor-speak. Find the role that sounds like you below — each is written specifically for your world."
            className="mb-16"
          />

          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              { slug: "clinics", cta: "See how clinics use Cofit", path: "BETWEEN-VISIT CARE", title: "For Clinics & Hospitals", description: "1,000+ registered nutritionists as your between-visit care layer. EHR-ready. Live in 4 weeks." },
              { slug: "hr", cta: "Get an engagement benchmark", path: "EMPLOYEE BENEFIT", title: "For HR & Benefits Leaders", description: "Engagement 3–5× industry norm. Multi-language. A benefit you can defend at budget review." },
              { slug: "payers", cta: "Request the evidence dossier", path: "CLAIMS & OUTCOMES", title: "For Insurers & Payers", description: "Peer-reviewed at 10,297 subjects. Outcomes-based contracts. Reimbursement active in select markets." },
              { slug: "pharma", cta: "Talk to pharma partnerships", path: "LIFE SCIENCES", title: "For Pharma & Life Sciences", description: "Trusted by Novo Nordisk since 2025. Real-world evidence, direct-to-employer, white-label options." },
              { slug: "platform", cta: "Request a platform demo", path: "PLATFORM LICENSING", title: "For Digital Health Builders", description: "SaaS, API, or full white-label. Multi-language AI. From contract to live in 8–12 weeks." },
              { slug: "resellers", cta: "Become a Cofit reseller", path: "RESELL FLEX8", title: "For Resellers & Distributors", description: "Resell Flex8, our peer-reviewed 8-week program. You bring the customers; we bring the program." },
              { slug: "providers", cta: "Join the referral network", path: "REFERRAL NETWORK", title: "For Healthcare Professionals", description: "Refer your patients to nutritionist-led care. Free to join. Patients stay yours." },
              { slug: "creators", cta: "Start a collab conversation", path: "CREATOR PARTNERSHIPS", title: "For Creators & Media", description: "1.03M YouTube subscribers, peer-reviewed evidence. Sponsored, ambassador, or affiliate options." },
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 50px -18px rgba(15,31,26,0.16)',
                }}
                className="rounded-3xl"
              >
                <Link
                  to={`/partners/${type.slug}`}
                  className="p-7 rounded-3xl cursor-pointer relative overflow-hidden group flex flex-col h-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(16px) saturate(130%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(130%)',
                    boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)',
                  }}
                >
                  <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: 'var(--color-text-secondary)' }} className="mb-3">
                    {type.path}
                  </p>
                  <h3
                    style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.25 }}
                    className="mb-3"
                  >
                    {type.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }} className="flex-1">
                    {type.description}
                  </p>
                  <span
                    style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-secondary)' }}
                    className="mt-5 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    {type.cta}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence & Trust */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="EVIDENCE & TRUST"
            heading="Earned credibility, independently validated"
            className="mb-16"
          />

          <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
            {/* Clinical & research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-6">
                Clinical & research
              </h3>
              <ul className="space-y-0">
                {[
                  <><strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>Peer-reviewed publication</strong> — 10,297-participant weight management trial, <em>Nutrients</em>, July 2024</>,
                  <><strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>Joint research</strong> with Taipei Medical University Nutrition Institute</>,
                  <><strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>Strategic collaboration</strong> with Novo Nordisk on lifestyle-led obesity care, 2025</>,
                  <><strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>Medical Advisory Board</strong> spanning endocrinology, OB-GYN, and obesity specialists from leading institutions</>,
                  <><strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>9 years of operation</strong>, 4.8★ user rating, and major media coverage across Asia</>,
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 py-4"
                    style={{ borderTop: '1px solid rgba(15,31,26,0.08)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
                  >
                    <span className="flex-shrink-0 rounded-full" style={{ width: 6, height: 6, marginTop: 8, backgroundColor: 'var(--color-secondary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Logo wall */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-6">
                Trusted across the partner spectrum
              </h3>
              <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(15,31,26,0.08)', border: '1px solid rgba(15,31,26,0.08)' }}>
                {[
                  { name: "Novo Nordisk", named: true },
                  { name: "Taipei Medical University", named: true },
                  { name: "Major Endo Clinic Group", named: false },
                  { name: "Global 500 Employer", named: false },
                  { name: "University Hospital", named: false },
                  { name: "Regional Health Insurer", named: false },
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="bg-white flex items-center justify-center text-center p-4"
                    style={{ aspectRatio: '16/9' }}
                  >
                    <span
                      style={{
                        fontSize: logo.named ? '14px' : '13px',
                        fontWeight: logo.named ? 600 : 400,
                        fontStyle: logo.named ? 'normal' : 'italic',
                        color: logo.named ? 'var(--color-text)' : 'var(--color-text-secondary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }} className="mt-5">
                A Big Pharma metabolic care leader, leading academic medical centers, Fortune Global 500 employers, university hospitals, and regional health insurers — with active programs expanding across additional markets in 2026.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / Lead form — pitch left, form right */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-b from-white to-[#f0fffe]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start max-lg:gap-10">
          {/* Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)' }} className="mb-4">
              General inquiry
            </p>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.15 }} className="mb-5 max-md:text-3xl">
              Not sure which path fits? Start here.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }} className="mb-8">
              If your situation doesn't fit neatly into one of the eight paths, tell us about it. Our partnerships team will route you to the right person within 5 business days — or come back with a proposal to do something new.
            </p>
            <ul className="space-y-0">
              {[
                "20-minute intro with a real partnerships lead (not a BDR)",
                "Sample outcomes data relevant to your use case",
                "Pricing range provided up front, not after three calls",
                "NDA available for sensitive use cases on request",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 py-3.5"
                  style={{ borderTop: '1px solid rgba(15,31,26,0.1)', fontSize: '15px', color: 'var(--color-text)', lineHeight: 1.5 }}
                >
                  <span style={{ color: 'var(--color-secondary)', flexShrink: 0, fontWeight: 700 }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            className="bg-white rounded-3xl p-10 max-md:p-6"
            style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch within 5 business days.");
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-6">
              Tell us about your project.
            </h3>

            <div className="grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1">
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>First name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} style={{ fontSize: '16px' }} />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Last name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} style={{ fontSize: '16px' }} />
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Work email *</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ fontSize: '16px' }} />
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1">
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Job title *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} style={{ fontSize: '16px' }} />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Company *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} style={{ fontSize: '16px' }} />
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Country / Region *</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} style={{ fontSize: '16px' }}>
                <option value="">Select...</option>
                <option>North America</option><option>Europe</option><option>Japan</option><option>Korea</option><option>Greater China (TW / HK / CN)</option><option>Singapore</option><option>Malaysia</option><option>Other Southeast Asia</option><option>Multi-market</option><option>Other</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Which path describes you best? *</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors" value={formData.partnership} onChange={(e) => setFormData({ ...formData, partnership: e.target.value })} style={{ fontSize: '16px' }}>
                <option value="">Select...</option>
                <option value="clinic">Clinic / Hospital</option>
                <option value="hr">HR / Benefits leader</option>
                <option value="payer">Insurer / Payer</option>
                <option value="pharma">Pharma / Life sciences</option>
                <option value="platform">Digital health builder / Platform</option>
                <option value="reseller">Reseller / Distributor</option>
                <option value="provider">Healthcare professional (individual)</option>
                <option value="creator">Creator / Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block mb-2 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>Tell us about your goals *</label>
              <textarea rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors resize-none" placeholder="What outcome are you hoping for? Any timeline, scope, or budget constraints?" value={formData.goals} onChange={(e) => setFormData({ ...formData, goals: e.target.value })} style={{ fontSize: '16px' }} />
            </div>

            <MagneticButton type="submit" className="w-full text-center text-white" style={{ backgroundColor: 'var(--color-secondary)', fontSize: '18px' }}>
              Send inquiry
            </MagneticButton>
            <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }} className="mt-4 text-center whitespace-nowrap">
              By submitting, you agree to Cofit's Privacy Policy and Terms of Use.
            </p>
          </motion.form>
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

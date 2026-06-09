import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { MessageCircle, Users, Target, Heart } from "lucide-react";
import Header from "../cofit/Header";
import ScrollProgress from "../cofit/ScrollProgress";
import BackToTop from "../cofit/BackToTop";
import MagneticButton from "../cofit/MagneticButton";
import AnimatedCounter from "../cofit/AnimatedCounter";
import SectionHeader from "../cofit/SectionHeader";
import Footer from "../cofit/Footer";
import AmbientGlow from "../cofit/AmbientGlow";

export default function ConsultationPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const experts = [
    { name: "張宜婷 Y.T. Chang", specialty: "Chief Dietitian · CTSSN Certified", initials: "YT", tint: "var(--color-primary)" },
    { name: "方晴誼 C.Y. Fang", specialty: "Head Nutritionist · Obesity Prevention", initials: "CY", tint: "var(--color-secondary)" },
    { name: "張益堯 Y.Y. Chang", specialty: "Family Health Consultant · 20yr Exp.", initials: "YY", tint: "var(--color-accent-blue)" },
    { name: "蓡宗真 C.C. Tsai", specialty: "Clinical Nutritionist", initials: "CC", tint: "var(--color-accent-orange)" },
    { name: "黃靖淳 J.C. Huang", specialty: "Sports Dietitian", initials: "JC", tint: "var(--color-secondary)" },
    { name: "郭環棻 H.F. Kuo", specialty: "Hormone Health Specialist", initials: "HF", tint: "var(--color-primary)" },
  ];

  const faqs = [
    { question: "How long is each consultation session?", answer: "Each consultation is a 30-minute video session with your assigned nutritionist." },
    { question: "What do I need to prepare before my session?", answer: "Have your height, weight, and body fat data ready, and schedule your call at least 48 hours in advance." },
    { question: "What payment methods are accepted?", answer: "We accept credit card and Apple Pay, available worldwide." },
    { question: "Can I reschedule my appointment?", answer: "Yes, you can reschedule through your account as long as you do so before your session begins." },
    { question: "What is the refund policy?", answer: "Full refund is available if you cancel before the program starts." },
    { question: "Who is not eligible for this program?", answer: "The program is not designed for pregnant women or individuals with medical conditions requiring clinical supervision." },
    { question: "Are the nutritionists certified?", answer: "Yes — every Cofit nutritionist is nationally certified, clinically experienced, and personally vetted." },
  ];

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
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Consultation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <motion.div
            className="max-w-2xl"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1
              style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.1 }}
              className="mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              1-on-1 Consultation
            </motion.h1>
            <motion.p
              style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1.4 }}
              className="mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Your personal nutritionist, one session away
            </motion.p>
            <motion.p
              style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.7 }}
              className="mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A 30-minute video consultation with a board-certified dietitian. Get your hormone type assessed and a personalized Flexi-Carb plan built around your life.
            </motion.p>
            <div className="flex gap-4 flex-wrap">
              <MagneticButton
                href="#plans"
                className="text-white"
                style={{ backgroundColor: 'var(--color-secondary)', fontSize: '18px' }}
              >
                Book a Consultation
              </MagneticButton>
              <MagneticButton
                href="#plans"
                className="text-white backdrop-blur-sm border border-white/70"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', fontSize: '18px' }}
              >
                View Packages
              </MagneticButton>
            </div>
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
            <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2">
              {[
                { value: 40000, suffix: "+", label: "Clients Served", color: "#169E6B" },
                { value: 93, suffix: "%", label: "Satisfaction Rate", color: "#004F51" },
                { value: 4.8, suffix: "★", label: "App Store · 1M+ Downloads", color: "#00C2E0" },
                { value: 100, suffix: "+", label: "Board-Certified Dietitians", color: "#FFB46E" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
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

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-8 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="HOW IT WORKS" heading="From booking to results in 3 steps" className="mb-16" />

          <div className="space-y-24">
            {[
              {
                step: "1",
                title: "Choose Your Package",
                description: "Select the Standard (2 sessions) or Premium (3 sessions) plan. Pay securely by credit card or Apple Pay — available worldwide.",
                image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                step: "2",
                title: "Book Your Video Call",
                description: "Schedule your 30-minute consultation at least 48 hours in advance. Nutritionists are available 9 AM – 11 PM (Taiwan Time). Bring your height, weight, and body fat data.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                step: "3",
                title: "Get Your Personalized Plan",
                description: "Your nutritionist assesses your hormone type and builds a custom Flexi-Carb plan. Ongoing daily support and weekly diet adjustments are included.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-2 gap-12 items-center max-md:grid-cols-1 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      {item.step}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-4">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                    {item.description}
                  </p>
                </div>
                <motion.div
                  className={`relative rounded-3xl overflow-hidden group ${
                    index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                  }`}
                  style={{ height: '400px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-[#169E6B] to-[#00C2E0] rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#004F51]/20 to-transparent" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="relative overflow-hidden py-32 px-8" style={{ background: 'linear-gradient(180deg, #f6fcfb 0%, #ffffff 55%)' }}>
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            eyebrow="PRICING"
            heading="Choose your plan"
            subheading="All plans include personalized meal planning, daily support, and access to our full learning library."
            className="mb-16"
          />

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[
              {
                name: "Flex8 Slim Program",
                price: "$649",
                per: "",
                features: [
                  "2 × 30-min video consultations",
                  "Hormone type assessment",
                  "Customized Flexi-Carb meal plan",
                  "Daily nutritionist support (9AM–11PM TWN)",
                  "Weekend diet analysis every Monday",
                  "Online materials in English & Chinese",
                ],
                cta: "Get Started",
              },
              {
                name: "Flex8 Slim Premium",
                price: "$729",
                per: "",
                features: [
                  "3 × 30-min video consultations",
                  "Hormone type assessment",
                  "Customized Flexi-Carb meal plan",
                  "Daily nutritionist support (9AM–11PM TWN)",
                  "Weekend diet analysis every Monday",
                  "Online materials in English & Chinese",
                  "Priority scheduling",
                ],
                cta: "Get Premium",
                popular: true,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="rounded-3xl p-8 relative flex flex-col"
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, rgba(22, 158, 107, 0.05), rgba(255,255,255,1))'
                    : 'white',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, boxShadow: '0 24px 50px -18px rgba(15,31,26,0.16)' }}
              >
                {plan.popular && (
                  <div
                    className="absolute top-0 right-8 px-4 py-1 rounded-b-lg text-white text-sm font-medium"
                    style={{ backgroundColor: 'var(--color-secondary)' }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  {plan.popular ? (
                    <>
                      <div>
                        <span style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-primary)' }}>$729 USD</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '16px', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>Was $1,100</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <span style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-primary)' }}>$649 USD</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '16px', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>Was $950</span>
                      </div>
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary)' }} />
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="#book"
                  className={`w-full text-center ${plan.popular ? 'text-white' : 'text-[#169E6B]'}`}
                  style={{
                    backgroundColor: plan.popular ? 'var(--color-secondary)' : 'transparent',
                    border: plan.popular ? '1.5px solid transparent' : '1.5px solid #169E6B',
                  }}
                >
                  {plan.cta}
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="YOUR NUTRITIONISTS"
            heading="Meet the experts behind your plan"
            subheading="Every Cofit nutritionist is nationally certified, clinically experienced, and personally vetted."
            className="mb-16"
          />

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 24px 50px -18px rgba(15,31,26,0.16)' }}
              >
                <motion.div
                  className="relative h-64 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: expert.tint }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  aria-label={expert.name}
                >
                  <span style={{ fontSize: '72px', fontWeight: 700, color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.02em' }}>
                    {expert.initials}
                  </span>
                </motion.div>
                <div className="p-6">
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-2">
                    {expert.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    {expert.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-32 px-8 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader heading="What to Expect" subheading="Your 30-minute session" className="mb-16" />

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[
              {
                title: "Video or Phone",
                description: "Conducted online via video call or phone. Available worldwide, no travel needed.",
                Icon: Target,
                color: "#169E6B",
              },
              {
                title: "Hormone Type Assessment",
                description: "Your nutritionist identifies your fat-gain pattern from 6 clinical hormone types.",
                Icon: Users,
                color: "#00C2E0",
              },
              {
                title: "Customized Meal Plan",
                description: "A personalized Flexi-Carb plan tailored to your lifestyle, culture, and food preferences.",
                Icon: Heart,
                color: "#FFB46E",
              },
              {
                title: "Daily Support Included",
                description: "Message your nutritionist from 9 AM to 11 PM (Taiwan Time) for ongoing guidance.",
                Icon: MessageCircle,
                color: "#004F51",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl relative overflow-hidden group bg-white"
                style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 50px -18px rgba(15,31,26,0.16)',
                }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ background: `radial-gradient(circle, ${item.color}15, transparent)` }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden transition-colors duration-300"
                    style={{
                      backgroundColor: `${item.color}03`
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${item.color}0D`}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${item.color}03`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${item.color}20, transparent 70%)`
                      }}
                    />
                    <item.Icon
                      className="w-9 h-9 relative z-10"
                      style={{
                        color: item.color,
                        strokeWidth: 1.5
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-3">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-white to-[#f0fffe]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text)' }}>
                    {faq.question}
                  </span>
                  <span style={{ fontSize: '24px', color: 'var(--color-secondary)' }}>
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <motion.div
                    className="px-8 pb-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to meet your nutritionist?
          </motion.h2>
          <motion.p
            style={{ fontSize: '20px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Book your first 30-minute session today. Full refund available before your program starts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MagneticButton
              href="#plans"
              className="text-white"
              style={{ backgroundColor: 'var(--color-secondary)', fontSize: '18px' }}
            >
              Book a Consultation Now
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer
        columns={[
          { heading: "Consultation", items: ["How It Works", "Pricing", "Our Nutritionists", "FAQ"] },
          { heading: "Company", items: ["Flex8 Program", "Contact via Facebook"] },
          { heading: "Legal", items: ["Terms of Service", "Privacy Policy", "Refund Policy", "Medical Disclaimer"] },
        ]}
        copyright="© 2026 Cofit Healthcare Inc. All Rights Reserved."
      />
    </div>
  );
}

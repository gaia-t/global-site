import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const FAQS = [
  {
    q: "Who is the Flex8 Slim Program for?",
    a: "Flex8 is designed for anyone who wants a smarter, more personalized approach to weight loss — especially those who have tried dieting before without lasting results. If you've been told to 'just eat less and move more' but it hasn't worked, this program was built for you.",
  },
  {
    q: "How does the hormone body-type assessment work?",
    a: "You'll complete a clinical quiz that analyzes your symptoms, eating patterns, and lifestyle. Based on your answers, we identify which of 6 hormonal body types you are, then build your entire nutrition strategy around your specific root cause.",
  },
  {
    q: "Will I be assigned a real nutritionist?",
    a: "Yes. Every Flex8 member is paired with a certified registered nutritionist (RD) who reviews your profile, customizes your plan, and provides daily personalized feedback throughout the 8-week program.",
  },
  {
    q: "Can I do the program if I'm based outside Taiwan?",
    a: "Absolutely. Flex8 is fully remote and available to clients worldwide. Consultations are conducted via video call, and all daily check-ins are done through the app.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. A refund is available within three days of the program kick-off if you're not satisfied. We want you to start with confidence.",
  },
  {
    q: "How is Flex8 different from other diet programs?",
    a: "Most programs focus only on calories. Flex8 addresses the hormonal root cause of your weight gain — whether it's insulin resistance, cortisol, thyroid, or other imbalances — and builds a plan specifically for your body type. You also get daily support from a real RD, not an algorithm.",
  },
  {
    q: "What if I have a medical condition like diabetes or PCOS?",
    a: "Our nutritionists are experienced with a wide range of conditions including Type 2 diabetes, PCOS, thyroid disorders, and more. Please mention your condition during the initial consultation so we can tailor your plan accordingly.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#f7fbf9]" id="faq">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.2, color: 'var(--color-text)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white overflow-hidden"
              style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04)', border: '1px solid rgba(0,79,81,0.08)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ background: open === i ? 'var(--color-primary)' : '#f0fffe', color: open === i ? 'white' : 'var(--color-primary)', fontSize: '18px', fontWeight: 300 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6" style={{ borderTop: '1px solid rgba(0,79,81,0.06)' }}>
                      <p className="pt-4" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

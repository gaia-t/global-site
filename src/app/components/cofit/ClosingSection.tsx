import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";
import AnimatedText from "./AnimatedText";
import Footer from "./Footer";

export default function ClosingSection() {
  return (
    <>
      <section
        className="relative py-32 overflow-hidden"
        id="contact"
        style={{
          background: 'linear-gradient(135deg, #004F51 0%, #169E6B 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div>
            <AnimatedText
              text="Ready to transform your health?"
              className="mb-8 text-white"
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            />

            <p
              className="mb-12 text-white/90"
              style={{
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Take the first step today. REFUND is available within three days after the program is kicked off.
            </p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <MagneticButton
                href="mailto:partnerships@cofit.me"
                className="text-[#004F51] shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  fontSize: '18px',
                }}
              >
                Join the Program Now
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#00C2E0]/10 rounded-full blur-3xl"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>

      <Footer
        columns={[
          { heading: "PROGRAM", items: ["How it works", "Hormone Types", "Pricing", "Success Stories", "Blog"] },
          { heading: "COMPANY", items: ["About Us", "Careers", "For Dietitians", "Partner with Us", "Contact"] },
          { heading: "LEGAL", items: ["Terms of Service", "Privacy Policy", "Refund Policy", "Medical Disclaimer", "Cookie Preferences"] },
        ]}
        copyright="© 2026 Cofit Healthcare Inc. All rights reserved."
      />
    </>
  );
}

import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import AmbientGlow from "./AmbientGlow";

export default function SolutionsSection() {
  return (
    <section className="relative overflow-hidden py-32" id="solutions" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f6fcfb 100%)' }}>
      <AmbientGlow />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <AnimatedText
            text="What can we help you with today?"
            className="mb-6"
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--color-text)',
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {[
            {
              title: "Sustainable Weight Loss",
              description: "Evidence-based strategies beyond calorie counting.",
              image: "https://images.unsplash.com/photo-1760888548654-b75cced14d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              bgColor: "#f0fffe",
            },
            {
              title: "Hormone Balance",
              description: "PCOS, thyroid, estrogen & cortisol management.",
              image: "https://images.unsplash.com/photo-1675270616422-ae71e8c99db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              bgColor: "#fff3e8",
            },
            {
              title: "Heart & Metabolic Health",
              description: "Manage cholesterol, blood pressure & diabetes.",
              image: "https://images.unsplash.com/photo-1758691463203-cce9d415b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              bgColor: "#e0fbff",
            },
          ].map((solution, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white cursor-pointer relative"
              style={{ boxShadow: '0 1px 2px rgba(15,31,26,0.04), 0 10px 28px -8px rgba(15,31,26,0.12)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 50px -18px rgba(15,31,26,0.16)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${solution.bgColor}, transparent)`,
                }}
              />
              <div className="relative bg-white rounded-2xl h-full flex flex-col">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${solution.bgColor} 100%)`,
                    opacity: 0.3,
                  }}
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="mb-4 md:min-h-[73px]"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  {solution.title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {solution.description}
                </p>

                <span
                  className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto self-start"
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                  }}
                >
                  Learn more
                </span>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import svgPaths from "../../../imports/Fonts/svg-kmbzdfxgz2";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.6)"]
  );
  const logoColor = useTransform(
    scrollY,
    [0, 100],
    ["#ffffff", "#004F51"]
  );
  const linkColor = useTransform(
    scrollY,
    [0, 100],
    ["#ffffff", "#86909c"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 8px 30px rgba(15,31,26,0.06)"]
  );
  const buttonBgColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "#004F51"]
  );
  const buttonBorderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(0, 79, 81, 0)"]
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4 backdrop-blur-xl"
      style={{
        backgroundColor,
        borderBottom: `1px solid`,
        borderColor,
        boxShadow,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-3">
        <motion.div
          className="w-full md:w-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <svg className="h-6 md:h-8 w-auto cursor-pointer" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 143 32">
              <g>
                <motion.path d={svgPaths.p10566100} style={{ fill: logoColor }} />
                <motion.path d={svgPaths.p6ee4480} style={{ fill: logoColor }} />
                <motion.path d={svgPaths.p2a95fb00} style={{ fill: logoColor }} />
                <motion.path d={svgPaths.p19c85800} style={{ fill: logoColor }} />
                <motion.path d={svgPaths.pbb46c80} style={{ fill: logoColor }} />
                <motion.path d={svgPaths.p325f5980} style={{ fill: logoColor }} />
                <motion.path d={svgPaths.pdb5fbf0} style={{ fill: logoColor }} />
              </g>
            </svg>
          </Link>
        </motion.div>

        <motion.nav
          className="w-full md:w-auto flex flex-wrap gap-2 sm:gap-4 md:gap-8 items-center md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-2 sm:gap-4 md:gap-8 items-center">
            <Link to="/">
              <motion.span
                className="text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer inline-block"
                style={{ color: linkColor }}
                onMouseEnter={(e) => {
                  const scroll = window.scrollY;
                  e.currentTarget.style.color = scroll > 50 ? '#004F51' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  const scroll = window.scrollY;
                  e.currentTarget.style.color = scroll > 50 ? '#86909c' : '#ffffff';
                }}
              >
                Flex8 Program
              </motion.span>
            </Link>
            <Link to="/consultation">
              <motion.span
                className="text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer inline-block"
                style={{ color: linkColor }}
                onMouseEnter={(e) => {
                  const scroll = window.scrollY;
                  e.currentTarget.style.color = scroll > 50 ? '#004F51' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  const scroll = window.scrollY;
                  e.currentTarget.style.color = scroll > 50 ? '#86909c' : '#ffffff';
                }}
              >
                1-on-1 Consultation
              </motion.span>
            </Link>
            <Link to="/partners">
              <motion.span
                className="text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer inline-block"
                style={{ color: linkColor }}
                onMouseEnter={(e) => {
                  const scroll = window.scrollY;
                  e.currentTarget.style.color = scroll > 50 ? '#004F51' : 'rgba(255, 255, 255, 0.7)';
                }}
                onMouseLeave={(e) => {
                  const scroll = window.scrollY;
                  e.currentTarget.style.color = scroll > 50 ? '#86909c' : '#ffffff';
                }}
              >
                Partners
              </motion.span>
            </Link>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <motion.a
              href="/#pricing"
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-sm text-white text-xs sm:text-sm font-medium whitespace-nowrap"
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{
                opacity: isScrolled ? 1 : 0,
                width: isScrolled ? 'auto' : 0,
                marginLeft: isScrolled ? '0.5rem' : 0,
              }}
              transition={{
                duration: 0,
                opacity: { duration: 0 }
              }}
              style={{
                backgroundColor: '#169E6B',
                overflow: 'hidden',
                transition: 'background-color 0.3s',
                color: '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0f6f4b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#169E6B';
              }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}

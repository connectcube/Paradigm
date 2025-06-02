import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

const HeroSection = ({ onExploreClick = () => {} }: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#030303] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#030303] opacity-40"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#c9a96e]/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c9a96e]/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#c9a96e]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#030303] to-transparent"></div>
      </div>

      {/* Background image with parallax effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[#030303] opacity-30 mix-blend-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=90"
          alt="Luxury Investment Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-[#030303]/60 to-[#030303]/95"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </motion.div>

      {/* Golden accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/80 to-transparent z-10"></div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 md:px-16 py-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center"
        >
          <div className="h-10 w-10 mr-4 relative">
            <div className="absolute inset-0 border border-[#c9a96e] rotate-45"></div>
            <div className="absolute inset-1 border border-[#c9a96e]/50 rotate-45"></div>
          </div>
          <div className="text-white text-2xl font-light tracking-[0.2em]">
            PARADIGM <span className="font-medium text-[#c9a96e]">GROUP</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden md:flex space-x-10 text-white/90 text-sm tracking-[0.15em]"
        >
          {[
            { label: "HOME", href: "/" },
            { label: "PORTFOLIO", href: "#portfolio" },
            { label: "SECTORS", href: "#sectors" },
            { label: "INVESTORS", href: "/investors" },
            { label: "CONTACT", href: "/contact" },
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              className="relative group"
            >
              <span className="text-white/80 hover:text-[#c9a96e] transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c9a96e] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mb-6 relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent"></div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[#c9a96e]/80 text-xs tracking-[0.3em]">
            ESTABLISHED 2005
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.15em] mb-2">
            <span className="inline-block relative">
              <span className="relative z-10">EXCEPTIONAL</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent"></span>
            </span>{" "}
            <span className="font-medium text-[#c9a96e] relative inline-block">
              <span className="relative z-10">INVESTMENTS</span>
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#c9a96e]/50"></span>
            </span>
          </h1>
          <div className="w-20 h-[3px] mx-auto mt-8 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 tracking-wide leading-relaxed font-light"
        >
          A distinguished multi-sector family office with strategic investments
          across
          <span className="text-[#c9a96e]/90"> Real Estate</span>,
          <span className="text-[#c9a96e]/90"> Commodities</span>,
          <span className="text-[#c9a96e]/90"> Creative Media</span>,
          <span className="text-[#c9a96e]/90"> Green Energy</span>, and
          <span className="text-[#c9a96e]/90"> Technology</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="relative"
        >
          <Button
            onClick={onExploreClick}
            className="bg-transparent hover:bg-[#c9a96e]/10 text-white border border-[#c9a96e]/50 hover:border-[#c9a96e] rounded-none px-10 py-7 text-sm tracking-[0.2em] transition-all duration-500 relative group overflow-hidden"
          >
            <span className="relative z-10">EXPLORE OUR PORTFOLIO</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#c9a96e]/20 group-hover:h-full transition-all duration-500 ease-out"></span>
          </Button>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <p className="text-[#c9a96e]/70 text-xs tracking-[0.3em] mb-2">
          SCROLL
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[1px] h-4 bg-gradient-to-b from-[#c9a96e]/50 to-transparent"></div>
          <ChevronDown className="text-[#c9a96e]/70 h-5 w-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

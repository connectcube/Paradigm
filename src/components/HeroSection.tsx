import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  // Default implementation for onExploreClick if not provided
  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      // Scroll to portfolio section
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsLoaded(true);

    // Rotate through background images
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=1800&q=90",
    "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=1800&q=80",
    "https://images.unsplash.com/photo-1545071559-8a9f4b5d3dcb?w=1800&q=80",
  ];

  return (
    <div className="relative h-screen w-full bg-[#030303] overflow-hidden">
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#030303] opacity-40"></div>

        {/* Diagonal lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent"
              style={{
                width: "200%",
                left: "-50%",
                top: `${i * 10}%`,
                transform: "rotate(35deg) translateX(0px)",
              }}
              animate={{
                translateX: [0, 100, 0],
              }}
              transition={{
                duration: 20 + i * 2,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Golden accent gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#c9a96e]/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c9a96e]/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#c9a96e]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#030303] to-transparent"></div>
      </div>

      {/* Background image carousel with parallax effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {backgroundImages.map(
            (img, index) =>
              index === activeIndex && (
                <motion.div
                  key={img}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  style={{ y: backgroundY }}
                >
                  <div className="absolute inset-0 bg-[#030303] opacity-30 mix-blend-overlay"></div>
                  <img
                    src={img}
                    alt={`Luxury Investment Background ${index + 1}`}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-[#030303]/60 to-[#030303]/95"></div>

                  {/* Textured overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent z-10"></div>

      {/* Vertical golden lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-[#c9a96e]/10 via-[#c9a96e]/5 to-transparent z-10"></div>
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-gradient-to-b from-[#c9a96e]/10 via-[#c9a96e]/5 to-transparent z-10"></div>

      {/* Navigation */}
      <nav className="relative z-20 px-8 md:px-16 py-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center"
        >
          <div className="h-12 w-12 mr-4 relative group">
            <motion.div
              className="absolute inset-0 border border-[#c9a96e] rotate-45"
              animate={{ rotate: [45, 135, 225, 315, 405] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="absolute inset-2 border border-[#c9a96e]/50 rotate-45"
              animate={{ rotate: [45, -45, -135, -225, -315, -405] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            ></motion.div>
            <div className="absolute inset-4 bg-[#c9a96e]/20 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          <div className="text-white text-2xl font-light tracking-[0.2em] relative">
            <span className="relative inline-block">
              PARADIGM
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/30"
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </span>{" "}
            <span className="font-medium text-[#c9a96e] relative inline-block">
              GROUP
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a96e]/50"
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.3, ease: "easeInOut" }}
              />
            </span>
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
              className="relative group py-2"
            >
              <span className="text-white/80 hover:text-[#c9a96e] transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c9a96e] group-hover:w-full transition-all duration-300"></span>
              <span className="absolute -bottom-2 right-0 w-0 h-[1px] bg-[#c9a96e]/30 group-hover:w-full transition-all duration-700"></span>
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-16 lg:px-24"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center text-left w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mb-2 relative"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-wider mb-6 w-full">
                <div className="overflow-hidden w-full">
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="w-full"
                  >
                    <span className="inline-block relative w-full">
                      <span className="relative z-10 whitespace-normal break-words">
                        EXCEPTIONAL
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#c9a96e]/30 via-[#c9a96e]/60 to-[#c9a96e]/30"></span>
                    </span>
                  </motion.div>
                </div>
                <div className="overflow-hidden w-full">
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="w-full"
                  >
                    <span className="font-medium text-[#c9a96e] relative inline-block w-full">
                      <span className="relative z-10 whitespace-normal break-words">
                        INVESTMENTS
                      </span>
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#c9a96e]/50"></span>
                    </span>
                  </motion.div>
                </div>
              </h1>

              <div className="w-24 h-[3px] bg-gradient-to-r from-[#c9a96e]/70 via-[#c9a96e] to-[#c9a96e]/70 mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="text-white/80 text-lg max-w-xl mb-8 tracking-wide leading-relaxed font-light"
            >
              A distinguished multi-sector family office with strategic
              investments across{" "}
              <span className="text-[#c9a96e] font-normal">Real Estate</span>,{" "}
              <span className="text-[#c9a96e] font-normal">Commodities</span>,{" "}
              <span className="text-[#c9a96e] font-normal">Creative Media</span>
              , <span className="text-[#c9a96e] font-normal">Green Energy</span>
              , and{" "}
              <span className="text-[#c9a96e] font-normal">Technology</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
              className="max-w-xl mb-12"
            >
              <div className="pl-4 border-l-2 border-[#c9a96e]/40">
                <p className="text-white/90 text-lg italic font-light tracking-wide leading-relaxed">
                  "At Paradigm, we believe true wealth is defined by what
                  endures. Our mission is to build and protect capital that
                  transcends markets and moments."
                </p>
                <p className="text-[#c9a96e] text-sm mt-2 tracking-wider">
                  — CEO, Paradigm Group
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="relative"
            >
              <Button
                onClick={handleExploreClick}
                className="bg-transparent hover:bg-[#c9a96e]/10 text-white border border-[#c9a96e]/50 hover:border-[#c9a96e] rounded-none px-10 py-7 text-sm tracking-[0.2em] transition-all duration-500 relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  EXPLORE OUR PORTFOLIO
                  <motion.div
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-[#c9a96e]/20 group-hover:h-full transition-all duration-500 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a96e] group-hover:w-full transition-all duration-700 ease-out delay-100"></span>
                <span className="absolute top-0 right-0 w-0 h-[1px] bg-[#c9a96e] group-hover:w-full transition-all duration-700 ease-out delay-100"></span>
              </Button>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            {/* Decorative geometric elements */}
            <div className="absolute w-64 h-64 border border-[#c9a96e]/20 rounded-full"></div>
            <motion.div
              className="absolute w-80 h-80 border border-[#c9a96e]/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute w-96 h-96 border border-[#c9a96e]/5 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Sector indicators */}
            {[
              { name: "Real Estate", angle: 0, delay: 0.2 },
              { name: "Commodities", angle: 72, delay: 0.4 },
              { name: "Creative Media", angle: 144, delay: 0.6 },
              { name: "Green Energy", angle: 216, delay: 0.8 },
              { name: "Technology", angle: 288, delay: 1.0 },
            ].map((sector, index) => (
              <motion.div
                key={sector.name}
                className="absolute"
                style={{
                  transform: `rotate(${sector.angle}deg) translateX(150px) rotate(-${sector.angle}deg)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + sector.delay,
                  ease: "easeOut",
                }}
              >
                <div className="bg-[#0a0a0a] border border-[#c9a96e]/30 px-4 py-2 rounded-sm">
                  <p className="text-[#c9a96e] text-sm">{sector.name}</p>
                </div>
              </motion.div>
            ))}

            {/* Center emblem */}
            <motion.div
              className="relative z-10 h-24 w-24 bg-[#0a0a0a] border border-[#c9a96e]/50 rounded-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              <div className="h-16 w-16 relative">
                <div className="absolute inset-0 border border-[#c9a96e] rotate-45"></div>
                <div className="absolute inset-3 border border-[#c9a96e]/70 rotate-45"></div>
                <div className="absolute inset-6 bg-[#c9a96e]/20 rotate-45"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => {
          // Scroll to the next section
          const nextSection = document.getElementById("sectors");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
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

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#c9a96e]/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import PortfolioShowcase from "./PortfolioShowcase";
import SectorHighlight from "./SectorHighlight";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
            PARADIGM <span className="text-[#c9a96e]">GROUP</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            A distinguished multi-sector family office with strategic
            investments across Real Estate, Commodities, Creative Media, Green
            Energy, and Technology. We cultivate exceptional opportunities that
            deliver both impact and returns.
          </p>
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <Card className="bg-[#111111] border-[#222222] flex-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4 text-[#c9a96e]">
                  Strategic Investment Advisory
                </h3>
                <p className="text-gray-300">
                  Bespoke investment strategies tailored to preserve and grow
                  wealth across generations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#222222] flex-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4 text-[#c9a96e]">
                  Venture Development
                </h3>
                <p className="text-gray-300">
                  Identifying and nurturing high-potential ventures with
                  hands-on guidance and resources.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#111111] border-[#222222] flex-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4 text-[#c9a96e]">
                  Alternative Investments
                </h3>
                <p className="text-gray-300">
                  Access to exclusive opportunities beyond traditional markets
                  for portfolio diversification.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Sector Highlight */}
      <section
        id="sectors"
        className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Ensure SectorHighlight is rendered with default props */}
          <SectorHighlight
            sectors={undefined}
            onSectorClick={(id) => console.log(`Sector clicked: ${id}`)}
          />
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section
        id="portfolio"
        className="py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider text-center">
              FEATURED <span className="text-[#c9a96e]">PORTFOLIO</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
              Explore our curated selection of investments that exemplify our
              approach to value creation and long-term growth.
            </p>
          </motion.div>
          <PortfolioShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
            CONNECT <span className="text-[#c9a96e]">WITH US</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            For qualified investors and strategic partners interested in
            exploring opportunities with Paradigm Group Global.
          </p>
          <Button
            className="bg-[#c9a96e] hover:bg-[#b89355] text-black px-8 py-6 text-lg rounded-none"
            size="lg"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Our Team
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-24 bg-[#080808] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-light tracking-wider mb-2">
                PARADIGM <span className="text-[#c9a96e]">GROUP</span>
              </h3>
              <p className="text-gray-400">
                Excellence in Multi-Sector Investments
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="text-sm text-gray-400 mb-4">NAVIGATION</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      Sectors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/investors"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      Investors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-4">CONTACT</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">London, United Kingdom</li>
                  <li>
                    <a
                      href="mailto:info@paradigmgroup.global"
                      className="text-gray-300 hover:text-[#c9a96e] transition-colors"
                    >
                      info@paradigmgroup.global
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="bg-[#222222] mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Paradigm Group Global. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a96e] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a96e] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Sector {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface SectorHighlightProps {
  sectors?: Sector[];
  onSectorClick?: (sectorId: string) => void;
}

const defaultSectors: Sector[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    description:
      "Premium properties and development opportunities across global markets.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "commodities",
    name: "Commodities",
    description:
      "Strategic investments in rare earth minerals and precious resources.",
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=800&q=80",
  },
  {
    id: "creative-media",
    name: "Creative Media",
    description: "Innovative content creation and distribution platforms.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
  {
    id: "green-energy",
    name: "Green Energy",
    description: "Sustainable energy solutions for a cleaner future.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    id: "technology",
    name: "Technology",
    description:
      "Cutting-edge innovations and digital transformation ventures.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
];

const SectorHighlight: React.FC<SectorHighlightProps> = ({
  sectors = defaultSectors,
  onSectorClick = () => {},
}) => {
  // Ensure sectors has a default value before using it in useState
  const safeDefaultSectors =
    sectors && sectors.length > 0 ? sectors : defaultSectors;
  const [activeSector, setActiveSector] = useState<string>(
    safeDefaultSectors[0].id,
  );
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSectorClick = (sectorId: string) => {
    setActiveSector(sectorId);
    onSectorClick(sectorId);
  };

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("sector-container");
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div
      className="w-full py-20"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #050505)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wider text-center">
            INVESTMENT <span className="text-[#c9a96e]">SECTORS</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gray-700"></div>
            <div className="h-px w-12 bg-[#c9a96e] mx-2"></div>
            <div className="h-px w-12 bg-gray-700"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center font-light">
            Our diverse portfolio spans multiple sectors, each carefully
            selected for growth potential and alignment with our values.
          </p>
        </motion.div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-[#c9a96e]/20 rounded-full backdrop-blur-sm bg-black/30"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div
            id="sector-container"
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 py-12 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {safeDefaultSectors.map((sector) => (
              <motion.div
                key={sector.id}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="snap-center"
              >
                <Card
                  className={`w-[350px] h-[450px] flex-shrink-0 overflow-hidden cursor-pointer relative ${activeSector === sector.id ? "ring-1 ring-[#c9a96e]" : ""}`}
                  style={{
                    boxShadow:
                      activeSector === sector.id
                        ? "0 0 20px rgba(201, 169, 110, 0.3)"
                        : "0 10px 30px rgba(0, 0, 0, 0.5)",
                    background: "linear-gradient(145deg, #111111, #0a0a0a)",
                  }}
                  onClick={() => handleSectorClick(sector.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  <motion.img
                    src={sector.image}
                    alt={sector.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <CardContent className="relative z-20 flex flex-col justify-end h-full p-8">
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#c9a96e]/10 backdrop-blur-sm flex items-center justify-center border border-[#c9a96e]/30">
                      <div className="w-2 h-2 rounded-full bg-[#c9a96e]"></div>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-gray-200 font-light leading-relaxed">
                      {sector.description}
                    </p>
                    <motion.div
                      className="mt-6 h-[1px] w-16 bg-[#c9a96e]"
                      whileHover={{ width: 80 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-[#c9a96e]/20 rounded-full backdrop-blur-sm bg-black/30"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 px-8 py-6 text-lg rounded-none"
            onClick={() => onSectorClick("all")}
          >
            Explore All Sectors
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectorHighlight;

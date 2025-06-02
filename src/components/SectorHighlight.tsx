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
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
  },
  {
    id: "commodities",
    name: "Commodities",
    description:
      "Strategic investments in rare earth minerals and precious resources.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
  },
  {
    id: "creative-media",
    name: "Creative Media",
    description: "Innovative content creation and distribution platforms.",
    image:
      "https://images.unsplash.com/photo-1533750516278-4555680898ba?w=800&q=80",
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
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
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
      className="w-full py-20 bg-background"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            Investment Sectors
          </h2>
          <div className="w-20 h-0.5 bg-amber-400 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Paradigm Group Global strategically invests across diverse sectors,
            leveraging expertise to identify exceptional opportunities with
            significant growth potential.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-black/30 rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div
            id="sector-container"
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 py-8 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {safeDefaultSectors.map((sector) => (
              <motion.div
                key={sector.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="snap-center"
              >
                <Card
                  className={`w-[300px] h-[400px] flex-shrink-0 overflow-hidden cursor-pointer relative ${activeSector === sector.id ? "ring-2 ring-amber-400" : ""}`}
                  onClick={() => handleSectorClick(sector.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <CardContent className="relative z-20 flex flex-col justify-end h-full p-6">
                    <h3 className="text-xl font-medium text-white mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {sector.description}
                    </p>
                    <div className="mt-4 h-0.5 w-12 bg-amber-400"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-black/30 rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
            onClick={() => onSectorClick("all")}
          >
            View All Sectors
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectorHighlight;

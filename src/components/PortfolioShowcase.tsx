import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import InvestmentCard from "./InvestmentCard";

interface Investment {
  id: string;
  title: string;
  sector: string;
  description: string;
  image: string;
  location?: string;
  year?: number;
}

interface PortfolioShowcaseProps {
  investments?: Investment[];
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  investments = defaultInvestments,
}) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredInvestments =
    activeTab === "all"
      ? investments
      : investments.filter(
          (investment) =>
            investment.sector.toLowerCase() === activeTab.toLowerCase(),
        );

  const sectors = [
    "All",
    "Real Estate",
    "Commodities",
    "Creative Media",
    "Green Energy",
    "Technology",
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Our Investment Portfolio
          </h2>
          <div className="w-24 h-0.5 bg-[#c9a96e] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our diverse range of premium investments across multiple
            sectors, each carefully selected for exceptional quality and growth
            potential.
          </p>
        </motion.div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="flex flex-wrap justify-center mb-12 bg-transparent">
            {sectors.map((sector) => (
              <TabsTrigger
                key={sector.toLowerCase().replace(" ", "-")}
                value={
                  sector.toLowerCase() === "all" ? "all" : sector.toLowerCase()
                }
                className="px-6 py-3 text-sm font-medium transition-all border-b-2 border-transparent data-[state=active]:border-[#c9a96e] data-[state=active]:text-[#c9a96e] text-gray-400 hover:text-white"
              >
                {sector}
              </TabsTrigger>
            ))}
          </TabsList>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInvestments.map((investment) => (
              <motion.div
                key={investment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <InvestmentCard investment={investment} />
              </motion.div>
            ))}
          </motion.div>

          {filteredInvestments.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 mb-6">
                No investments found in this category.
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveTab("all")}
                className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10"
              >
                View All Investments
              </Button>
            </div>
          )}
        </Tabs>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 px-8 py-6 text-sm tracking-wider"
          >
            EXPLORE MORE OPPORTUNITIES
          </Button>
        </div>
      </div>
    </section>
  );
};

const defaultInvestments: Investment[] = [
  {
    id: "1",
    title: "Luxury Residential Complex",
    sector: "Real Estate",
    description:
      "Premium residential development in the heart of London featuring state-of-the-art amenities and sustainable design.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    location: "London, UK",
    year: 2023,
  },
  {
    id: "2",
    title: "Rare Earth Mining Operation",
    sector: "Commodities",
    description:
      "Strategic investment in sustainable rare earth mineral extraction with advanced processing facilities.",
    image:
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=800&q=80",
    location: "Western Australia",
    year: 2022,
  },
  {
    id: "3",
    title: "Independent Film Studio",
    sector: "Creative Media",
    description:
      "Award-winning production house specializing in thought-provoking documentaries and independent features.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    location: "Los Angeles, USA",
    year: 2021,
  },
  {
    id: "4",
    title: "Solar Energy Farm",
    sector: "Green Energy",
    description:
      "Large-scale solar installation providing clean energy to over 50,000 homes with innovative storage solutions.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    location: "Andalusia, Spain",
    year: 2023,
  },
  {
    id: "5",
    title: "AI Healthcare Platform",
    sector: "Technology",
    description:
      "Revolutionary artificial intelligence system improving diagnostic accuracy and treatment planning in oncology.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    location: "Boston, USA",
    year: 2022,
  },
  {
    id: "6",
    title: "Boutique Hotel Collection",
    sector: "Real Estate",
    description:
      "Portfolio of exclusive boutique hotels in prime locations, each with unique character and exceptional service.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    location: "Multiple Locations",
    year: 2020,
  },
  {
    id: "7",
    title: "Precious Metals Fund",
    sector: "Commodities",
    description:
      "Diversified investment in gold, silver, and platinum with secure storage and flexible trading options.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
    location: "Zurich, Switzerland",
    year: 2021,
  },
  {
    id: "8",
    title: "Wind Farm Development",
    sector: "Green Energy",
    description:
      "Offshore wind energy project utilizing cutting-edge turbine technology and advanced grid integration.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    location: "North Sea",
    year: 2023,
  },
  {
    id: "9",
    title: "Quantum Computing Startup",
    sector: "Technology",
    description:
      "Early-stage investment in quantum computing applications for financial modeling and cryptography.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    location: "Zurich, Switzerland",
    year: 2022,
  },
];

export default PortfolioShowcase;

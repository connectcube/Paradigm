import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface InvestmentCardProps {
  id?: string;
  title?: string;
  sector?: string;
  description?: string;
  imageUrl?: string;
  returnRate?: string;
  investmentPeriod?: string;
  onClick?: () => void;
}

const InvestmentCard = ({
  id = "1",
  title = "Premium Real Estate Development",
  sector = "Real Estate",
  description = "Exclusive luxury residential development in prime metropolitan location with exceptional ROI potential.",
  imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  returnRate = "12-15%",
  investmentPeriod = "36-48 months",
  onClick = () => {},
}: InvestmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-background"
    >
      <Card className="overflow-hidden border border-[#222222] bg-[#111111] text-white h-full transition-all duration-300 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-[#c9a96e]/80 text-black hover:bg-[#c9a96e]"
            >
              {sector}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

          <p className="text-sm text-gray-300 line-clamp-2">{description}</p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="space-y-1">
              <p className="text-xs text-gray-400">Target Return</p>
              <p className="text-sm font-medium text-[#c9a96e]">{returnRate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-400">Investment Period</p>
              <p className="text-sm font-medium text-white">
                {investmentPeriod}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="ghost"
              className="w-full justify-between hover:bg-[#1a1a1a] text-[#c9a96e] group"
              onClick={onClick}
            >
              <span>View Details</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InvestmentCard;

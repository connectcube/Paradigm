import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronRight, FileText, Lock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const InvestorsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="relative z-20 px-8 md:px-16 py-8 flex justify-between items-center bg-[#030303]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center">
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
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden md:flex space-x-10 text-white/90 text-sm tracking-[0.15em]"
        >
          {[
            { label: "HOME", href: "/" },
            { label: "PORTFOLIO", href: "/#portfolio" },
            { label: "SECTORS", href: "/#sectors" },
            { label: "INVESTORS", href: "/investors" },
            { label: "CONTACT", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              className="relative group py-2"
            >
              <Link
                to={item.href}
                className="text-white/80 hover:text-[#c9a96e] transition-colors duration-300"
              >
                {item.label}
              </Link>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c9a96e] group-hover:w-full transition-all duration-300"></span>
              <span className="absolute -bottom-2 right-0 w-0 h-[1px] bg-[#c9a96e]/30 group-hover:w-full transition-all duration-700"></span>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#030303] opacity-40 mix-blend-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1620778340859-be5f1a4d6e1b?w=1800&q=80"
            alt="Investors Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-[#030303]/60 to-[#030303]/95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-[0.15em] mb-6">
              <span className="font-medium text-[#c9a96e]">INVESTOR</span>{" "}
              <span>RELATIONS</span>
            </h1>
            <div className="w-20 h-[3px] mx-auto mt-8 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 tracking-wide leading-relaxed font-light"
          >
            Exclusive information and resources for qualified investors and
            strategic partners of Paradigm Group Global.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
              INVESTOR <span className="text-[#c9a96e]">RESOURCES</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Access comprehensive information, performance reports, and
              exclusive investment opportunities available to our qualified
              investors.
            </p>
          </motion.div>

          <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-12 bg-[#111111]">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#c9a96e]"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-[#c9a96e]"
              >
                Documents
              </TabsTrigger>
              <TabsTrigger
                value="portal"
                className="data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#c9a96e]"
              >
                Investor Portal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#111111] border-[#222222] h-full">
                    <CardHeader>
                      <CardTitle className="text-[#c9a96e]">
                        Investment Philosophy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        Our investment approach is guided by a commitment to
                        long-term value creation, strategic diversification, and
                        responsible stewardship of capital.
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#c9a96e] mr-2 shrink-0" />
                          <span>Multi-sector diversification strategy</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#c9a96e] mr-2 shrink-0" />
                          <span>
                            Focus on premium assets with growth potential
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#c9a96e] mr-2 shrink-0" />
                          <span>
                            Sustainable and ethical investment practices
                          </span>
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="mt-4 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-[#111111] border-[#222222] h-full">
                    <CardHeader>
                      <CardTitle className="text-[#c9a96e]">
                        Performance Highlights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        Paradigm Group Global has consistently delivered strong
                        returns across our diverse investment portfolio.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Real Estate</span>
                            <span className="text-[#c9a96e]">+14.2% (3Y)</span>
                          </div>
                          <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
                            <div className="h-full bg-[#c9a96e] w-[70%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Green Energy</span>
                            <span className="text-[#c9a96e]">+18.7% (3Y)</span>
                          </div>
                          <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
                            <div className="h-full bg-[#c9a96e] w-[85%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Technology</span>
                            <span className="text-[#c9a96e]">+22.3% (3Y)</span>
                          </div>
                          <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
                            <div className="h-full bg-[#c9a96e] w-[90%]"></div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="mt-4 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10"
                      >
                        View Full Report
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#111111] border-[#222222]">
                  <CardHeader>
                    <CardTitle className="text-[#c9a96e]">
                      Investor Eligibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Paradigm Group Global works exclusively with qualified
                      investors who meet specific criteria. Our investment
                      opportunities are available to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="p-6 bg-[#1a1a1a] rounded-lg">
                        <Shield className="h-10 w-10 text-[#c9a96e] mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Accredited Investors
                        </h3>
                        <p className="text-sm text-gray-400">
                          Individuals with net worth exceeding $1M or annual
                          income over $200K.
                        </p>
                      </div>
                      <div className="p-6 bg-[#1a1a1a] rounded-lg">
                        <Lock className="h-10 w-10 text-[#c9a96e] mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Institutional Investors
                        </h3>
                        <p className="text-sm text-gray-400">
                          Financial institutions, pension funds, and endowments
                          with significant capital.
                        </p>
                      </div>
                      <div className="p-6 bg-[#1a1a1a] rounded-lg">
                        <FileText className="h-10 w-10 text-[#c9a96e] mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Strategic Partners
                        </h3>
                        <p className="text-sm text-gray-400">
                          Organizations and individuals with strategic alignment
                          to our investment sectors.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-black">
                        Apply for Investor Status
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card className="bg-[#111111] border-[#222222]">
                <CardHeader>
                  <CardTitle className="text-[#c9a96e]">
                    Investor Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    Access our comprehensive library of investor documents,
                    reports, and presentations. Please note that some documents
                    require secure login credentials.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Annual Investment Report 2023",
                        type: "PDF",
                        size: "4.2 MB",
                        restricted: true,
                      },
                      {
                        title: "Q2 2023 Performance Summary",
                        type: "PDF",
                        size: "2.8 MB",
                        restricted: true,
                      },
                      {
                        title: "Investment Strategy Overview",
                        type: "PDF",
                        size: "1.5 MB",
                        restricted: false,
                      },
                      {
                        title: "ESG Investment Framework",
                        type: "PDF",
                        size: "3.1 MB",
                        restricted: false,
                      },
                      {
                        title: "Sector Analysis: Green Energy",
                        type: "PDF",
                        size: "5.7 MB",
                        restricted: true,
                      },
                    ].map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-[#222222] rounded-lg hover:bg-[#1a1a1a] transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="mr-4 p-2 bg-[#1a1a1a] rounded">
                            <FileText className="h-6 w-6 text-[#c9a96e]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                              {doc.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {doc.type} · {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className={
                            doc.restricted ? "text-gray-400" : "text-[#c9a96e]"
                          }
                          disabled={doc.restricted}
                        >
                          {doc.restricted ? (
                            <>
                              <Lock className="h-4 w-4 mr-2" /> Restricted
                            </>
                          ) : (
                            "Download"
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button
                      variant="outline"
                      className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10"
                    >
                      Request Access to Restricted Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="portal" className="space-y-6">
              <Card className="bg-[#111111] border-[#222222]">
                <CardHeader>
                  <CardTitle className="text-[#c9a96e]">
                    Investor Portal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Lock className="h-16 w-16 text-[#c9a96e] mx-auto mb-6" />
                    <h3 className="text-xl font-medium mb-4">
                      Secure Investor Access
                    </h3>
                    <p className="text-gray-300 max-w-md mx-auto mb-8">
                      Our secure investor portal provides real-time access to
                      your investment portfolio, performance metrics, and
                      exclusive opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-black">
                        Login to Portal
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10"
                      >
                        Request Access
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
            BECOME AN <span className="text-[#c9a96e]">INVESTOR</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Join our exclusive network of sophisticated investors and gain
            access to premium investment opportunities across multiple sectors.
          </p>
          <Button
            className="bg-[#c9a96e] hover:bg-[#b89355] text-black px-8 py-6 text-lg rounded-none"
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default InvestorsPage;

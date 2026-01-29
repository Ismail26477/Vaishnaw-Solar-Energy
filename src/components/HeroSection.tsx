import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Shield, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const slides = [
  {
    badge: "Chhattisgarh's Trusted Solar Partner",
    title: "Power Your Future with",
    highlight: "Clean Solar Energy",
    description: "Premium solar solutions for homes, businesses, and agriculture. Save up to 90% on electricity bills with our high-efficiency solar systems.",
    cta: "Explore Products",
    stats: [
      { value: "500+", label: "Installations" },
      { value: "10MW+", label: "Capacity Installed" },
      { value: "25Yr", label: "Warranty" },
    ],
  },
  {
    badge: "PM Surya Ghar Yojana",
    title: "Get Up to ₹78,000",
    highlight: "Government Subsidy",
    description: "Take advantage of government subsidies under PM Surya Ghar scheme. We handle all documentation and approvals for you.",
    cta: "Apply Now",
    stats: [
      { value: "40%", label: "Max Subsidy" },
      { value: "₹78K", label: "For 3KW System" },
      { value: "Free", label: "Documentation" },
    ],
  },
  {
    badge: "For Farmers & Agriculture",
    title: "Solar Water Pumps for",
    highlight: "Smart Farming",
    description: "Eliminate diesel costs with solar-powered irrigation. PM KUSUM scheme offers up to 90% subsidy for farmers in Chhattisgarh.",
    cta: "Learn More",
    stats: [
      { value: "90%", label: "Subsidy Available" },
      { value: "0", label: "Electricity Cost" },
      { value: "5Yr", label: "Warranty" },
    ],
  },
];

const floatingIcons = [
  { Icon: Zap, delay: 0, x: "10%", y: "20%" },
  { Icon: Shield, delay: 0.2, x: "85%", y: "30%" },
  { Icon: Leaf, delay: 0.4, x: "15%", y: "70%" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Solar installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="absolute hidden lg:block z-10"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
          >
            <Icon className="w-16 h-16 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Slider */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  {slides[current].badge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                  {slides[current].title}{" "}
                  <span className="text-gradient-solar">{slides[current].highlight}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-muted-foreground mb-8 max-w-lg"
                >
                  {slides[current].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button variant="solar" size="lg" className="group">
                    {slides[current].cta}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Free Consultation
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
                >
                  {slides[current].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="font-display text-2xl md:text-3xl font-bold text-gradient-sun">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Card & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-solar rounded-3xl opacity-20 blur-3xl" />
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-card z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-sun flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg">Save 90%</div>
                  <div className="text-sm text-muted-foreground">
                    On Electricity Bills
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second Floating Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-card z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-solar flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold">25 Years</div>
                  <div className="text-xs text-muted-foreground">Warranty</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-gradient-solar"
                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setIsAutoPlaying(false);
              nextSlide();
            }}
            className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

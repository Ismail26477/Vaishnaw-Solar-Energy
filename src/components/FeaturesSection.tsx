import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sun, Zap, Shield, Wrench, Clock, Award, Leaf, IndianRupee } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "High Efficiency Panels",
    description: "Premium mono PERC cells with up to 22% efficiency for maximum power generation.",
  },
  {
    icon: Shield,
    title: "25 Year Warranty",
    description: "Comprehensive warranty coverage ensuring long-term peace of mind.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Professional installation by certified technicians across Chhattisgarh.",
  },
  {
    icon: IndianRupee,
    title: "Government Subsidy",
    description: "Up to 40% subsidy available under PM Surya Ghar scheme.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support and maintenance services.",
  },
  {
    icon: Award,
    title: "BIS Certified",
    description: "All products are BIS certified and meet highest quality standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce carbon footprint and contribute to a greener planet.",
  },
  {
    icon: Zap,
    title: "Quick ROI",
    description: "Recover your investment in just 3-5 years with electricity savings.",
  },
];

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="features" ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient-sun">Vaishnaw</span> Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium solar solutions backed by years of expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Features Grid - Updated styling based on reference */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-glow cursor-pointer"
            >
              {/* Icon Container - Matching reference style */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center mb-5 shadow-solar group-hover:shadow-glow transition-shadow"
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>

              <h3 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Animated Bottom Border */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-solar origin-left"
              />

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-solar opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

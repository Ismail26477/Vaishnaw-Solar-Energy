import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Government Approved Vendor for Solar Installations",
  "Experienced Team with 500+ Successful Projects",
  "Free Site Survey & Custom Solar Design",
  "Net Metering Assistance & Subsidy Help",
  "Annual Maintenance Contract Available",
  "Pan Chhattisgarh Service Network",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              About Us
            </motion.span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Leading Solar Energy Provider in{" "}
              <span className="text-gradient-solar">Chhattisgarh</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Vaishnaw Solar Energy is a premier solar solutions provider serving Chhattisgarh since 2016. 
              We are committed to making clean, renewable energy accessible to every home and business 
              in the region through high-quality products and exceptional service.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to accelerate the transition to sustainable energy by providing reliable, 
              efficient, and affordable solar power systems tailored to Indian conditions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-solar flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="solar" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="h-40 rounded-2xl bg-gradient-solar flex items-center justify-center shadow-solar">
                  <div className="text-center text-primary-foreground">
                    <div className="font-display text-4xl font-bold">8+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                </div>
                <div className="h-52 rounded-2xl bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-4xl">☀️</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4 pt-8"
              >
                <div className="h-52 rounded-2xl bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <span className="text-4xl">🌱</span>
                  </div>
                </div>
                <div className="h-40 rounded-2xl bg-gradient-sun flex items-center justify-center shadow-glow">
                  <div className="text-center text-secondary-foreground">
                    <div className="font-display text-4xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full shadow-card"
            >
              <span className="text-sm font-medium text-foreground">
                🏆 Trusted by 500+ Families
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

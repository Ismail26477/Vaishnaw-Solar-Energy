import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar Sharma",
    location: "Raipur, Chhattisgarh",
    rating: 5,
    image: "👨‍💼",
    text: "Excellent service and quality products! Our electricity bill has reduced by 85% after installing the 5KW solar system. The team was professional and completed the installation in just 2 days. Highly recommended!",
    system: "5KW Residential System",
  },
  {
    name: "Sunita Patel",
    location: "Bilaspur, Chhattisgarh",
    rating: 5,
    image: "👩‍🏫",
    text: "Vaishnaw Solar helped us with the complete subsidy process under PM Surya Ghar scheme. We got ₹78,000 subsidy directly in our account. Their after-sales support is outstanding. Best solar company in Chhattisgarh!",
    system: "3KW Residential System",
  },
  {
    name: "Mohan Industries Pvt Ltd",
    location: "Korba, Chhattisgarh",
    rating: 5,
    image: "🏭",
    text: "We installed a 50KW commercial solar plant for our factory. The ROI has been exceptional - payback period of just 3.5 years. Professional team, quality equipment, and reliable service. Thank you Vaishnaw Solar!",
    system: "50KW Commercial Plant",
  },
  {
    name: "Dr. Priya Agarwal",
    location: "Durg, Chhattisgarh",
    rating: 5,
    image: "👩‍⚕️",
    text: "Running a hospital requires reliable power. Vaishnaw Solar installed a hybrid system with battery backup that ensures uninterrupted power supply. Their 24/7 support gives us peace of mind.",
    system: "10KW Hybrid System",
  },
  {
    name: "Kishan Verma",
    location: "Jagdalpur, Chhattisgarh",
    rating: 5,
    image: "👨‍🌾",
    text: "The solar water pump they installed for my farm has transformed my irrigation system. No more diesel costs! The pump works great even on cloudy days. Very happy with my investment.",
    system: "5HP Solar Pump",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient-sun">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join 500+ happy customers who've made the switch to solar with Vaishnaw Solar Energy.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-6 left-8 z-10"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-solar flex items-center justify-center shadow-solar">
              <Quote className="w-8 h-8 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Slider Container */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="min-h-[280px] flex flex-col justify-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-secondary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-solar flex items-center justify-center text-2xl">
                    {testimonials[current].image}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].location}
                    </p>
                    <p className="text-xs text-primary font-medium mt-0.5">
                      {testimonials[current].system}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-gradient-solar"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

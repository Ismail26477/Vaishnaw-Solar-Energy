import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the cost of installing solar panels for my home?",
    answer: "The cost depends on your energy consumption and roof size. A typical 3KW residential system costs around ₹1.8-2.2 lakhs before subsidy. With PM Surya Ghar scheme, you can get up to 40% subsidy, reducing your net cost significantly. We offer free site surveys to provide accurate quotes.",
  },
  {
    question: "How much subsidy is available under PM Surya Ghar Yojana?",
    answer: "Under PM Surya Ghar scheme, residential consumers can avail: ₹30,000/KW for systems up to 2KW (max ₹60,000), ₹18,000/KW for 2-3KW capacity (additional ₹18,000), totaling up to ₹78,000 for 3KW systems. The subsidy is directly credited to your bank account.",
  },
  {
    question: "How long do solar panels last?",
    answer: "High-quality solar panels like ours come with a 25-year performance warranty and can last 30-35 years with minimal maintenance. Panels typically retain 80-85% efficiency even after 25 years. Inverters usually need replacement after 10-15 years.",
  },
  {
    question: "Will solar panels work during monsoon or cloudy days?",
    answer: "Yes! Solar panels work on daylight, not direct sunlight. While output reduces by 10-25% on cloudy days, they still generate power. In Chhattisgarh, we receive ample sunlight year-round, making it ideal for solar installations.",
  },
  {
    question: "What is net metering and how does it benefit me?",
    answer: "Net metering allows you to export excess solar power to the grid and receive credits. Your electricity bill only reflects the 'net' consumption. If you generate more than you consume, credits carry forward. This maximizes your savings and ROI.",
  },
  {
    question: "How much roof space do I need for solar panels?",
    answer: "Approximately 100 sq. ft. per KW is needed. For a 3KW system, you'll need around 300 sq. ft. of shadow-free rooftop. We conduct site surveys to assess your roof's suitability and design the optimal system layout.",
  },
  {
    question: "What maintenance is required for solar systems?",
    answer: "Solar panels require minimal maintenance - just periodic cleaning (2-3 times per year) to remove dust. We offer Annual Maintenance Contracts (AMC) that include regular cleaning, performance monitoring, and quick resolution of any issues.",
  },
  {
    question: "How long does the installation take?",
    answer: "Residential installations typically take 1-2 days after all approvals. The complete process including documentation, DISCOM approval, and net meter installation takes 4-6 weeks. We handle all paperwork and liaison work for you.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Got <span className="text-gradient-solar">Questions?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about solar energy, installation, subsidies, and more.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 overflow-hidden shadow-card hover:shadow-solar transition-shadow data-[state=open]:shadow-solar"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-solar text-primary-foreground font-medium shadow-solar hover:shadow-glow transition-shadow"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

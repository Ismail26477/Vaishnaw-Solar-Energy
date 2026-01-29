import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 83191 86128",
    link: "tel:+918319186128",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@vaishnawsolar.com",
    link: "mailto:info@vaishnawsolar.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Chhattisgarh, India",
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9AM - 7PM",
    link: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Start Your <span className="text-gradient-solar">Solar Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to switch to solar? Contact us for a free consultation and customized quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl shadow-card"
          >
            <h3 className="font-display text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">
                    Your Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+91 98765 43210"
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">
                  Property Type
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="agricultural">Agricultural</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">
                  Your Message
                </label>
                <Textarea
                  placeholder="Tell us about your solar requirements..."
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="solar" size="lg" className="w-full group">
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all shadow-card hover:shadow-solar group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center mb-4 shadow-solar group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Serving all districts of Chhattisgarh
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

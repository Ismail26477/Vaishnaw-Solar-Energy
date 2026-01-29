import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import productPanel from "@/assets/product-panel.jpg";
import productInverter from "@/assets/product-inverter.jpg";
import productBattery from "@/assets/product-battery.jpg";
import productLight from "@/assets/product-light.jpg";
import productPump from "@/assets/product-pump.jpg";
import productKit from "@/assets/product-kit.jpg";
import productController from "@/assets/product-controller.jpg";
import productMounting from "@/assets/product-mounting.jpg";
import productGenerator from "@/assets/product-generator.jpg";
import productHeater from "@/assets/product-heater.jpg";

const products = [
  {
    name: "Mono PERC Solar Panel 540W",
    category: "Solar Panels",
    price: "₹18,500",
    originalPrice: "₹22,000",
    image: productPanel,
    rating: 5,
  },
  {
    name: "Hybrid Solar Inverter 5KW",
    category: "Inverters",
    price: "₹65,000",
    image: productInverter,
    rating: 5,
  },
  {
    name: "Lithium Battery 100Ah",
    category: "Batteries",
    price: "₹45,000",
    originalPrice: "₹52,000",
    image: productBattery,
    rating: 4,
  },
  {
    name: "Solar Street Light 60W",
    category: "Solar Lights",
    price: "₹8,500",
    image: productLight,
    rating: 5,
  },
  {
    name: "Solar Water Pump 3HP",
    category: "Solar Pumps",
    price: "₹1,25,000",
    image: productPump,
    rating: 5,
  },
  {
    name: "Complete Solar Kit 3KW",
    category: "Solar Kits",
    price: "₹1,80,000",
    originalPrice: "₹2,10,000",
    image: productKit,
    rating: 4,
  },
  {
    name: "MPPT Charge Controller 60A",
    category: "Controllers",
    price: "₹12,500",
    image: productController,
    rating: 5,
  },
  {
    name: "Solar Mounting Structure",
    category: "Accessories",
    price: "₹8,000",
    originalPrice: "₹10,000",
    image: productMounting,
    rating: 4,
  },
  {
    name: "Portable Solar Generator 1KW",
    category: "Generators",
    price: "₹85,000",
    image: productGenerator,
    rating: 5,
  },
  {
    name: "Solar Water Heater 200L",
    category: "Water Heaters",
    price: "₹32,000",
    originalPrice: "₹38,000",
    image: productHeater,
    rating: 5,
  },
];

const categories = [
  "All Products",
  "Solar Panels",
  "Inverters",
  "Batteries",
  "Solar Lights",
  "Solar Pumps",
  "Controllers",
  "Accessories",
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = activeCategory === "All Products"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <section id="products" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Products
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Premium Solar <span className="text-gradient-solar">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-quality solar products designed for Indian conditions. 
            From residential to industrial, we have the perfect solution for you.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-solar text-primary-foreground shadow-solar"
                  : "bg-card hover:bg-primary/10 text-foreground shadow-card"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        {filteredProducts.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="solar"
              size="lg"
              className="group"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Products"}
              <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${showAll ? "rotate-180" : "group-hover:translate-x-1"}`} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

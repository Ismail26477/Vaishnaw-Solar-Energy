import { motion } from "framer-motion";
import { ShoppingCart, Eye, Star, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  index: number;
}

const ProductCard = ({
  name,
  category,
  price,
  originalPrice,
  image,
  rating,
  index,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
          >
            <Eye className="w-5 h-5 text-foreground" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-gradient-solar flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart className="w-6 h-6 text-primary-foreground" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
          >
            <Heart className="w-5 h-5 text-foreground" />
          </motion.button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {originalPrice && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shadow-lg"
            >
              SALE
            </motion.div>
          )}
          {rating === 5 && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg"
            >
              TOP RATED
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1"
        >
          {category}
        </motion.p>
        <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Star
                className={`w-4 h-4 ${
                  i < rating ? "text-secondary fill-secondary" : "text-muted"
                }`}
              />
            </motion.div>
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-primary">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          
          {/* Add to Cart Mini Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Hover Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-solar transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />
    </motion.div>
  );
};

export default ProductCard;

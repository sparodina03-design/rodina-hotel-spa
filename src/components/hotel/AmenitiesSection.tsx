"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Wine,
  ShieldCheck,
  Car,
  ConciergeBell,
  Sparkles,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description:
      "Dive into crystal-clear waters with breathtaking panoramic views. Our heated infinity pool offers a serene escape, complemented by poolside service and private cabanas.",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description:
      "Rejuvenate body and mind at our world-class spa. Expert therapists deliver bespoke treatments using premium organic products in tranquil, candlelit treatment rooms.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description:
      "State-of-the-art equipment and personal trainers await in our modern fitness center. Open 24/7 with yoga studio, steam rooms, and nutritional guidance.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description:
      "Savor exquisite cuisine crafted by Michelin-starred chefs across our three signature restaurants. From modern European to authentic Asian flavors.",
  },
  {
    icon: Wine,
    title: "Rooftop Bar",
    description:
      "Sip handcrafted cocktails under the stars at our rooftop bar. Featuring live jazz, panoramic city views, and an award-winning mixology program.",
  },
  {
    icon: ConciergeBell,
    title: "24/7 Concierge",
    description:
      "Our dedicated concierge team anticipates your every need. From restaurant reservations to private tours, we ensure every moment is extraordinary.",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description:
      "Complimentary valet service ensures seamless arrivals and departures. Our secure underground facility accommodates vehicles of all sizes.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Security",
    description:
      "Your safety is paramount. We employ round-the-clock security, smart room locks, and discreet surveillance throughout the property.",
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-sm mb-4 font-[var(--font-lato)]">
            World-Class Services
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold mb-4 text-foreground">
            Hotel <span className="gold-text">Amenities</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-lato)] text-lg">
            Every detail is designed to elevate your stay. From wellness to
            gastronomy, discover a world of exclusive amenities at MH Hotel.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-all duration-500 hover:luxury-shadow cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <amenity.icon className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-lg font-[var(--font-playfair)] font-bold text-foreground mb-3">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-[var(--font-lato)]">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

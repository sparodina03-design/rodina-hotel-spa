"use client";

import { motion } from "framer-motion";
import { Star, Award, Users, Globe } from "lucide-react";
import { useSiteSettings } from "./SettingsProvider";

const stats = [
  { icon: Star, value: "5-Star", label: "Luxury Rating" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "50,000+", label: "Happy Guests" },
  { icon: Globe, value: "120+", label: "Countries Served" },
];

export default function AboutSection() {
  const { settings } = useSiteSettings();
  const content = settings.content;
  const hotel = settings.hotel;
  const images = settings.images;

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={images?.aboutMain || "/images/lobby.png"}
                alt={hotel?.name || "RODINA Hotel & SPA"}
                className="w-full h-[500px] object-cover rounded-2xl luxury-shadow"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background luxury-shadow hidden sm:block">
                <img
                  src={images?.aboutInset || "/images/room-classic.png"}
                  alt={`${hotel?.name || "RODINA Hotel & SPA"} elegant room`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gold tracking-[0.4em] uppercase text-sm mb-4 font-[var(--font-lato)]">
              {content?.aboutLabel || "Notre Histoire"}
            </p>
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold mb-6 text-foreground">
              {content?.aboutTitle1 || "Un Héritage de"} <span className="gold-text">{content?.aboutTitle2 || "Luxe"}</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6 font-[var(--font-lato)] text-lg">
              {content?.aboutP1 || "Depuis sa création, RODINA Hotel & SPA est un phare de sophistication et de chaleur au cœur de la ville. Notre engagement envers l'excellence transcende l'hospitalité ordinaire, offrant à chaque invité une expérience sur mesure qui mêle élégance intemporelle et confort contemporain."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-[var(--font-lato)]">
              {content?.aboutP2 || "Chaque détail au RODINA Hotel & SPA a été pensé avec soin, des mobiliers sélectionnés avec goût dans nos suites aux ingrédients locaux de nos restaurants. Nous croyons que le véritable luxe réside dans l'art de l'anticipation, où chaque besoin est comblé avant même d'être exprimé, et chaque instant devient un souvenir précieux."}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground font-[var(--font-playfair)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase font-[var(--font-lato)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    avatar: "SM",
    rating: 5,
    title: "An Unforgettable Stay",
    text: "From the moment we arrived, the staff made us feel like royalty. The Presidential Suite exceeded all expectations, and the spa treatment was the most rejuvenating experience I have ever had. RODINA Hotel & SPA truly sets the gold standard for luxury hospitality.",
  },
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    avatar: "AR",
    rating: 5,
    title: "Simply Magnificent",
    text: "I have stayed at luxury hotels around the world, and RODINA Hotel & SPA stands among the very best. The attention to detail is remarkable, from the hand-pressed linens to the personalized welcome amenities. The restaurant alone is worth the visit.",
  },
  {
    name: "Elena Vasiliev",
    location: "Moscow, Russia",
    avatar: "EV",
    rating: 5,
    title: "A Dream Wedding Venue",
    text: "Our wedding at RODINA Hotel & SPA was nothing short of magical. The events team coordinated every detail flawlessly, from the floral arrangements to the five-course dinner. Our guests are still talking about it months later. We could not have asked for more.",
  },
  {
    name: "James Crawford",
    location: "London, UK",
    avatar: "JC",
    rating: 5,
    title: "Corporate Excellence",
    text: "We hosted our annual leadership summit at RODINA Hotel & SPA and the experience was impeccable. The conference facilities are state-of-the-art, the catering was exceptional, and the concierge team went above and beyond to accommodate our every need.",
  },
  {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    avatar: "YT",
    rating: 5,
    title: "A Sanctuary of Calm",
    text: "In the midst of a bustling city, RODINA Hotel & SPA offers an oasis of tranquility. The spa treatments, the serene pool area, and the beautifully appointed rooms create a sense of peace that is truly rare. I return every chance I get.",
  },
  {
    name: "Maria Fernandez",
    location: "Barcelona, Spain",
    avatar: "MF",
    rating: 5,
    title: "Perfection in Every Detail",
    text: "What impressed me most was the genuine warmth of the staff. They remembered our preferences from the first day and anticipated our needs throughout the stay. The rooftop bar at sunset is an experience not to be missed.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goNext = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const goPrev = () => {
    setAutoPlay(false);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-secondary/30">
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
            Guest Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold mb-4 text-foreground">
            What Our <span className="gold-text">Guests</span> Say
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border luxury-shadow text-center"
          >
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-gold"
                  />
                )
              )}
            </div>

            <h3 className="text-2xl font-[var(--font-playfair)] font-bold text-foreground mb-4">
              {testimonials[current].title}
            </h3>
            <p className="text-muted-foreground font-[var(--font-lato)] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm font-[var(--font-playfair)]">
                  {testimonials[current].avatar}
                </span>
              </div>
              <div className="text-left">
                <p className="font-[var(--font-playfair)] font-bold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-muted-foreground text-sm font-[var(--font-lato)]">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoPlay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-6"
                      : "bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

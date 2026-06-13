"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Users, ChevronDown, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hotel-exterior.png"
          alt="MH Hotel exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-gold/15 rounded-full animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {/* Top decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[1px] bg-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-gold-light tracking-[0.5em] uppercase text-sm mb-4 font-[var(--font-lato)]"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold text-white mb-4 tracking-wide"
        >
          MH <span className="gold-text">HOTEL</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[1px] bg-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-[var(--font-lato)] font-light leading-relaxed"
        >
          Where timeless elegance meets modern luxury. Experience a world of
          refined comfort, impeccable service, and unforgettable moments.
        </motion.p>

        {/* Play Video Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="group flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300"
          >
            <span className="w-14 h-14 rounded-full border-2 border-gold/50 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
              <Play className="w-5 h-5 ml-0.5" />
            </span>
            <span className="text-sm tracking-[0.3em] uppercase font-[var(--font-lato)]">
              Virtual Tour
            </span>
          </button>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          id="booking"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-charcoal/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gold/20 luxury-shadow max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check In */}
            <div className="space-y-2">
              <label className="text-gold-light text-xs tracking-widest uppercase font-[var(--font-lato)]">
                Check In
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left bg-white/5 border-gold/20 text-white hover:bg-white/10 hover:border-gold/40 font-[var(--font-lato)]",
                      !checkIn && "text-white/50"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                    {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check Out */}
            <div className="space-y-2">
              <label className="text-gold-light text-xs tracking-widest uppercase font-[var(--font-lato)]">
                Check Out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left bg-white/5 border-gold/20 text-white hover:bg-white/10 hover:border-gold/40 font-[var(--font-lato)]",
                      !checkOut && "text-white/50"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                    {checkOut
                      ? format(checkOut, "MMM dd, yyyy")
                      : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) =>
                      date < (checkIn || new Date()) || date < new Date()
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-gold-light text-xs tracking-widest uppercase font-[var(--font-lato)]">
                Guests
              </label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="bg-white/5 border-gold/20 text-white hover:bg-white/10 hover:border-gold/40 font-[var(--font-lato)]">
                  <Users className="mr-2 h-4 w-4 text-gold" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5+">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Room Type */}
            <div className="space-y-2">
              <label className="text-gold-light text-xs tracking-widest uppercase font-[var(--font-lato)]">
                Room Type
              </label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger className="bg-white/5 border-gold/20 text-white hover:bg-white/10 hover:border-gold/40 font-[var(--font-lato)]">
                  <SelectValue placeholder="Room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classique">Chambre Classique</SelectItem>
                  <SelectItem value="superieure">Chambre Supérieure</SelectItem>
                  <SelectItem value="premium">Chambre Premium</SelectItem>
                  <SelectItem value="junior-suite">
                    Suite Junior
                  </SelectItem>
                  <SelectItem value="romantique">
                    Suite Romantique
                  </SelectItem>
                  <SelectItem value="familiale">
                    Chambre Familiale
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button className="gold-gradient text-charcoal font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity h-10 font-[var(--font-lato)]">
              Check Availability
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-[var(--font-lato)]">
            Discover
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

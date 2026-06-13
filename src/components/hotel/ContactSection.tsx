"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Luxury Avenue", "Downtown District", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["reservations@mhhotel.com", "info@mhhotel.com"],
  },
  {
    icon: Clock,
    title: "Front Desk",
    details: ["24/7 Available", "Check-in: 3:00 PM", "Check-out: 12:00 PM"],
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
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
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold mb-4 text-foreground">
            Contact <span className="gold-text">Us</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-lato)] text-lg">
            We would love to hear from you. Whether you have a question about
            reservations, services, or anything else, our team is ready to
            assist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <h4 className="font-[var(--font-playfair)] font-bold text-foreground mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail) => (
                    <p
                      key={detail}
                      className="text-muted-foreground text-sm font-[var(--font-lato)]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 font-[var(--font-lato)] tracking-wider uppercase">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden h-48 bg-secondary border border-border relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm font-[var(--font-lato)]">
                    123 Luxury Avenue, NYC
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="bg-card rounded-2xl p-8 border border-border luxury-shadow space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                    First Name
                  </label>
                  <Input
                    placeholder="Your first name"
                    className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                    Last Name
                  </label>
                  <Input
                    placeholder="Your last name"
                    className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                  Phone
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                  Message
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className="bg-background border-border focus:border-gold font-[var(--font-lato)] resize-none"
                />
              </div>
              <Button className="w-full gold-gradient text-charcoal font-semibold tracking-wider uppercase hover:opacity-90 font-[var(--font-lato)]">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

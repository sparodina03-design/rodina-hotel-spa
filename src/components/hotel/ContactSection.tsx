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
  Youtube,
  MessageCircle,
} from "lucide-react";
import { useSiteSettings } from "./SettingsProvider";

export default function ContactSection() {
  const { settings } = useSiteSettings();
  const contact = settings.contact;
  const social = settings.social;
  const hotel = settings.hotel;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [contact?.address || "City Center, Main Boulevard"],
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [contact?.phone || "+1 (234) 567-890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: [contact?.email || "info@rodinahotel.com"],
    },
    {
      icon: Clock,
      title: "Réception",
      details: ["Disponible 24/7", "Check-in: 15:00", "Check-out: 12:00"],
    },
  ];

  // Build social links from settings
  const socialLinks = [
    ...(social?.facebook ? [{ icon: Facebook, label: "Facebook", href: social.facebook }] : []),
    ...(social?.instagram ? [{ icon: Instagram, label: "Instagram", href: social.instagram }] : []),
    ...(social?.whatsapp ? [{ icon: MessageCircle, label: "WhatsApp", href: social.whatsapp }] : []),
    ...(social?.youtube ? [{ icon: Youtube, label: "YouTube", href: social.youtube }] : []),
  ];

  // Fallback if no social links configured
  const displaySocials = socialLinks.length > 0
    ? socialLinks
    : [
        { icon: Instagram, label: "Instagram", href: "#" },
        { icon: Facebook, label: "Facebook", href: "#" },
      ];

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
            Contactez-nous
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold mb-4 text-foreground">
            Contact <span className="gold-text">Us</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-lato)] text-lg">
            Nous serions ravis de vous entendre. Que vous ayez une question sur
            les réservations, les services ou autre chose, notre équipe est prête
            à vous assister.
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
                Suivez-nous
              </p>
              <div className="flex gap-3">
                {displaySocials.map((socialItem) => (
                  <a
                    key={socialItem.label}
                    href={socialItem.href}
                    className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                    aria-label={socialItem.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <socialItem.icon className="w-4 h-4" />
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
                    {contact?.address || "City Center, Main Boulevard"}
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
                    Prénom
                  </label>
                  <Input
                    placeholder="Votre prénom"
                    className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                    Nom
                  </label>
                  <Input
                    placeholder="Votre nom"
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
                  placeholder="votre@email.com"
                  className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                  Téléphone
                </label>
                <Input
                  type="tel"
                  placeholder={contact?.phone || "+1 (234) 567-890"}
                  className="bg-background border-border focus:border-gold font-[var(--font-lato)]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-[var(--font-lato)] tracking-wider">
                  Message
                </label>
                <Textarea
                  placeholder="Comment pouvons-nous vous aider ?"
                  rows={5}
                  className="bg-background border-border focus:border-gold font-[var(--font-lato)] resize-none"
                />
              </div>
              <Button className="w-full gold-gradient text-charcoal font-semibold tracking-wider uppercase hover:opacity-90 font-[var(--font-lato)]">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Scale,
} from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

interface ContactSectionProps {
  expanded?: boolean;
}

export default function ContactSection({
  expanded = false,
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [highlightSelect, setHighlightSelect] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topicFromUrl = params.get("topic");
    const hasFormHash = window.location.hash === "#contact-form";

    if (topicFromUrl) {
      setSelectedTopic(topicFromUrl);
      setHighlightSelect(true);
      setTimeout(() => setHighlightSelect(false), 2200);
    }

    // Αν ήρθε από κλικ σε υπηρεσία (?topic=...) ή έχει #contact-form,
    // κάνουμε scroll απευθείας πάνω στο κουτί της φόρμας (ιδανικό για mobile)
    if ((topicFromUrl || hasFormHash) && formContainerRef.current) {
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`relative bg-royal-950 text-white overflow-hidden ${
        expanded ? "pt-36 pb-24 lg:pt-44 lg:pb-32" : "py-24 lg:py-32"
      }`}
    >
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10">
        {expanded && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-16 pb-12 border-b border-white/10"
          >
            <motion.span
              variants={fadeUpVariant}
              className="text-xs uppercase tracking-[0.25em] text-royal-400 block mb-3"
            >
              04 // ΕΠΙΚΟΙΝΩΝΙΑ & ΕΔΡΑ
            </motion.span>
            <motion.h1
              variants={fadeUpVariant}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-10"
            >
              {SITE_CONTENT.contact.headline}
            </motion.h1>

            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="p-6 bg-white/[0.03] border border-white/10">
                <MapPin className="w-5 h-5 text-royal-400 mb-3" />
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-1">
                  Διευθυνση Γραφειου
                </p>
                <p className="font-serif text-lg text-white">
                  Κορυδαλλός, Αττική
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/10">
                <Phone className="w-5 h-5 text-royal-400 mb-3" />
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-1">
                  Τηλεφωνικο Κεντρο
                </p>
                <p className="font-serif text-lg text-white">
                  +30 210 000 0000
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/10">
                <Mail className="w-5 h-5 text-royal-400 mb-3" />
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-1">
                  Ηλεκτρονικη Αλληλογραφια
                </p>
                <p className="font-serif text-lg text-white">
                  info@gvlawyers.gr
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/10">
                <Clock className="w-5 h-5 text-royal-400 mb-3" />
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-1">
                  Λειτουργια Γραφειου
                </p>
                <p className="font-serif text-lg text-white">
                  Δευτ – Παρ (Κατόπιν Ραντεβού)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Αριστερή Στήλη */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            {!expanded && (
              <>
                <motion.span
                  variants={fadeUpVariant}
                  className="text-xs uppercase tracking-[0.25em] text-royal-400 block mb-3"
                >
                  ΕΠΙΚΟΙΝΩΝΙΑ
                </motion.span>

                <motion.h2
                  variants={fadeUpVariant}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
                >
                  {SITE_CONTENT.contact.headline}
                </motion.h2>
              </>
            )}

            <motion.div
              variants={fadeUpVariant}
              className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-light"
            >
              {SITE_CONTENT.contact.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === SITE_CONTENT.contact.paragraphs.length - 1
                      ? "text-white font-serif text-xl italic pt-2"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </motion.div>

            {!expanded && (
              <motion.div
                variants={fadeUpVariant}
                className="space-y-5 pt-8 border-t border-white/10 text-sm"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-royal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Εδρα Γραφειου
                    </p>
                    <p className="text-white mt-0.5">Κορυδαλλός, Αττική</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-royal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Τηλεφωνικο Κεντρο
                    </p>
                    <p className="text-white mt-0.5">+30 210 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-royal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      Ηλεκτρονικη Αλληλογραφια
                    </p>
                    <p className="text-white mt-0.5">info@gvlawyers.gr</p>
                  </div>
                </div>
              </motion.div>
            )}

            {expanded && (
              <motion.div
                variants={fadeUpVariant}
                className="p-6 bg-white/[0.02] border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-3 text-royal-300">
                  <Scale className="w-5 h-5" />
                  <span className="font-serif text-lg font-medium text-white">
                    Εχεμύθεια & Νομικό Απόρρητο
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Κάθε επικοινωνία μέσω της φόρμας ή τηλεφωνικά καλύπτεται από
                  απόλυτη εμπιστευτικότητα και εξετάζεται απευθείας από τους
                  εταίρους του γραφείου.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Δεξιά Στήλη: Κουτί Φόρμας με id="contact-form" και scroll-mt-28 */}
          <motion.div
            ref={formContainerRef}
            id="contact-form"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 scroll-mt-28 bg-white/[0.03] backdrop-blur-xl border border-white/15 p-8 sm:p-10 lg:p-12"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-royal-400 mx-auto" />
                <h3 className="font-serif text-2xl text-white">
                  Το μήνυμά σας καταχωρήθηκε
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό για να
                  συζητήσουμε την υπόθεσή σας με απόλυτη εχεμύθεια.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-serif text-base text-royal-400 underline"
                >
                  Αποστολή νέου μηνύματος
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-slate-300 mb-2">
                      Ονοματεπώνυμο *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="π.χ. Γεώργιος Παπαδόπουλος"
                      className="w-full bg-white/5 border border-white/15 focus:border-royal-400 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-slate-300 mb-2">
                      Τηλέφωνο Επικοινωνίας *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="π.χ. 690 000 0000"
                      className="w-full bg-white/5 border border-white/15 focus:border-royal-400 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.gr"
                      className="w-full bg-white/5 border border-white/15 focus:border-royal-400 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-slate-300 mb-2">
                      Τομέας Υπόθεσης
                    </label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className={`w-full bg-royal-950 border px-4 py-3.5 text-sm text-white outline-none transition-all duration-500 ${
                        highlightSelect
                          ? "border-royal-400 ring-2 ring-royal/60"
                          : "border-white/15 focus:border-royal-400"
                      }`}
                    >
                      <option value="">Επιλέξτε τομέα...</option>
                      {SITE_CONTENT.about.practiceAreas.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-slate-300 mb-2">
                    Σύντομη Περιγραφή Υπόθεσης *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Περιγράψτε συνοπτικά το ζήτημα που σας απασχολεί..."
                    className="w-full bg-white/5 border border-white/15 focus:border-royal-400 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="w-full sm:w-auto btn-primary">
                  <span>Αποστολή Μηνύματος</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Maps Iframe (Μόνο στη σελίδα /contact) */}
        {expanded && (
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="font-serif text-2xl text-white">
                  Χάρτης & Πρόσβαση
                </h3>
                <p className="text-sm text-slate-400">
                  Κορυδαλλός, Αττική (Εύκολη πρόσβαση από τον σταθμό Μετρό
                  Κορυδαλλού)
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Korydallos,+Greece"
                target="_blank"
                rel="noreferrer"
                className="font-serif text-sm text-royal-400 hover:text-royal-200 underline"
              >
                Άνοιγμα στους Χάρτες Google →
              </a>
            </div>

            <div className="relative w-full h-[420px] border border-white/15 overflow-hidden bg-royal-900">
              <iframe
                title="Χάρτης Δικηγορικού Γραφείου GV Law - Κορυδαλλός"
                src="https://www.google.com/maps?q=Korydallos,+Attica,+Greece&hl=el&z=15&output=embed"
                className="w-full h-full border-0 filter grayscale-[25%] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
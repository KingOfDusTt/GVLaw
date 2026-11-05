"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Quote, X, CheckCircle2 } from "lucide-react";
import { SITE_CONTENT, PartnerProfile } from "@/data/content";
import {
  fadeUpVariant,
  staggerContainer,
  modalOverlayVariant,
  drawerSlideVariant,
} from "@/lib/animations";

export default function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(
    null
  );

  useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPartner]);

  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-ivory text-slate-900">
      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200/80"
        >
          <div>
            <motion.span
              variants={fadeUpVariant}
              className="text-xs uppercase tracking-[0.25em] text-royal-700 font-medium block mb-3"
            >
              03 // ΟΙ ΔΙΚΗΓΟΡΟΙ
            </motion.span>
            <motion.h1
              variants={fadeUpVariant}
              className="font-serif text-4xl sm:text-5xl font-semibold text-royal-950 tracking-tight"
            >
              Εταίροι του Γραφείου
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUpVariant}
            className="text-sm sm:text-base text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed"
          >
            Συνδυάζουμε πολυετή δικαστηριακή εμπειρία, ακαδημαϊκή εξειδίκευση
            και πιστοποιημένη διαμεσολάβηση.
          </motion.p>
        </motion.div>

        {/* Partners 2-Column Grid με 4:5 Portrait Aspect Ratio */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {SITE_CONTENT.partners.map((partner, index) => (
            <motion.article
              key={partner.id}
              variants={fadeUpVariant}
              custom={index * 0.15}
              initial="hidden"
              animate="visible"
              onClick={() => setSelectedPartner(partner)}
              className="group cursor-pointer bg-white border border-slate-200/90 hover:border-royal/50 transition-all duration-500 shadow-editorial flex flex-col justify-between"
            >
              <div>
                {/* Φωτογραφία αυστηρά σε 4:5 ώστε να μην κόβεται καθόλου */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 border-b border-slate-200/60">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Subtle Floating Badge Πάνω Δεξιά */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 font-serif text-sm font-medium text-royal-950 flex items-center gap-1.5 border border-slate-200/70 shadow-sm group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                    <span>Πλήρες Βιογραφικό</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Στοιχεία, Highlights & Περίληψη Κάτω από τη Φωτογραφία */}
                <div className="p-6 sm:p-8">
                  <div className="mb-5 pb-5 border-b border-slate-200/70">
                    <p className="text-xs font-medium text-royal-700 mb-1.5">
                      {partner.role}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-royal-950 tracking-wide">
                      {partner.name}
                    </h2>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {partner.highlights.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1 bg-royal-50 text-royal-800 border border-royal-200/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Εισαγωγική Παράγραφος */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-4 mb-6">
                    {partner.paragraphs[0]}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPartner(partner);
                    }}
                    className="inline-flex items-center gap-2.5 font-serif text-[17px] font-medium text-royal-700 group-hover:text-royal transition-colors"
                  >
                    <span>Ανάγνωση ολόκληρου του βιογραφικού</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Quote στο κάτω μέρος της κάρτας */}
              <div className="px-6 sm:px-8 py-6 bg-slate-50/90 border-t border-slate-200/70">
                <Quote className="w-5 h-5 text-royal/30 mb-2" />
                <blockquote className="font-serif italic text-base sm:text-lg text-royal-950 leading-snug">
                  {partner.quote}
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Slide-over Bio Drawer (Modal) */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              variants={modalOverlayVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedPartner(null)}
              className="fixed inset-0 bg-royal-950/60 backdrop-blur-sm"
            />

            <motion.div
              variants={drawerSlideVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl border-l border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <img
                      src="/brand/gv-logo.svg"
                      alt="GV Law"
                      className="w-7 h-7 object-contain"
                    />
                    <span className="font-serif text-base text-slate-600">
                      Βιογραφικό Σημείωμα
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPartner(null)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label="Κλείσιμο παραθύρου"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8 pb-8 border-b border-slate-200/80">
                    <img
                      src={selectedPartner.image}
                      alt={selectedPartner.name}
                      className="w-28 aspect-[4/5] object-cover object-center border border-slate-200 shrink-0"
                    />
                    <div>
                      <p className="text-xs font-medium text-royal-700 mb-1">
                        {selectedPartner.role}
                      </p>
                      <h3 className="font-serif text-3xl font-semibold text-royal-950">
                        {selectedPartner.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedPartner.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2.5 py-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-royal" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 text-slate-700 text-base leading-relaxed">
                    {selectedPartner.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 bg-royal-950 text-white mt-8">
                <Quote className="w-6 h-6 text-royal-400 mb-3" />
                <blockquote className="font-serif italic text-xl sm:text-2xl text-royal-50 leading-relaxed">
                  {selectedPartner.quote}
                </blockquote>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-royal-400">
                  — {selectedPartner.name}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
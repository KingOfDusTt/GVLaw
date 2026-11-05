"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Scale, ShieldCheck } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import {
  fadeUpVariant,
  staggerContainer,
  subtleScaleReveal,
  lineDrawVariant,
} from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] bg-royal-950 text-white overflow-hidden flex items-center pt-28 pb-16 lg:py-24">
      {/* Subtle Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient Royal Blue Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-royal/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-royal-700/15 blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Αριστερή Στήλη */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 lg:pr-10"
          >
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <MapPin className="w-3.5 h-3.5 text-royal-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-slate-300 font-medium">
                GV Law • Κορυδαλλος, Αττικη
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.65rem] leading-[1.08] font-semibold tracking-tight text-white mb-6"
            >
              Η νομική σας υπόθεση{" "}
              <span className="italic font-normal text-royal-200">
                στα σωστά χέρια.
              </span>
            </motion.h1>

            <motion.div
              variants={lineDrawVariant}
              className="h-[1px] w-24 bg-royal mb-8"
            />

            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-4 font-light"
            >
              {SITE_CONTENT.about.leadParagraphs[0]}
            </motion.p>

            <motion.p
              variants={fadeUpVariant}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-10 font-light"
            >
              {SITE_CONTENT.about.leadParagraphs[1]}
            </motion.p>

            {/* CTAs με τη νέα, εναρμονισμένη τυπογραφία */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <a href="#contact" className="group btn-primary">
                <span>Επικοινωνήστε μαζί μας</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link href="/practice-areas" className="group btn-secondary-dark">
                <span>Τομείς Εξειδίκευσης</span>
                <ArrowUpRight className="w-4 h-4 text-royal-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Εταίροι Quick Links */}
            <motion.div
              variants={fadeUpVariant}
              className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl"
            >
              <Link
                href="/partners"
                className="group flex items-start gap-3.5 text-left"
              >
                <div className="mt-1 p-2 rounded-sm bg-white/5 border border-white/10 group-hover:border-royal-400/50 transition-colors">
                  <Scale className="w-4 h-4 text-royal-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Εταιρος
                  </p>
                  <p className="font-serif text-lg font-medium text-white group-hover:text-royal-200 transition-colors">
                    Έλλη Θ. Γκάτζιου
                  </p>
                </div>
              </Link>

              <Link
                href="/partners"
                className="group flex items-start gap-3.5 text-left"
              >
                <div className="mt-1 p-2 rounded-sm bg-white/5 border border-white/10 group-hover:border-royal-400/50 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-royal-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Εταιρος
                  </p>
                  <p className="font-serif text-lg font-medium text-white group-hover:text-royal-200 transition-colors">
                    Ιωάννης Εμ. Βαλαδάκης
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Δεξιά Στήλη: KoridallosCity.jpg */}
          <motion.div
            variants={subtleScaleReveal}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 border border-white/10 pointer-events-none" />

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-royal-900 border border-white/15">
                <img
                  src="/images/KoridallosCity.jpg"
                  alt="Δικηγορικό Γραφείο GV Law - Κορυδαλλός"
                  className="h-full w-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out filter contrast-[1.05] brightness-[0.85]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-900/45 to-transparent" />

                <div className="absolute top-5 right-5 px-3 py-1 bg-royal-950/70 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-widest text-slate-300">
                  Δικηγορικος Συλλογος Πειραιως
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-5 bg-royal-950/75 backdrop-blur-xl border border-white/15 flex items-center gap-4">
                  <img
                    src="/brand/gv-logo-white.png"
                    alt="GV Law Logo"
                    className="w-12 h-12 object-contain shrink-0"
                  />
                  <div className="border-l border-white/15 pl-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-royal-200 font-medium">
                      Γκατζιου & Βαλαδακης
                    </p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Συνέπεια, διακριτικότητα και εξατομικευμένη στρατηγική.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Scale, Shield, BookOpen } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function AboutPractice() {
  return (
    <section className="pt-36 pb-24 lg:pt-44 lg:pb-32 bg-ivory text-slate-900">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-slate-200/90"
        >
          {/* Αριστερή Στήλη */}
          <div className="lg:col-span-4">
            <motion.span
              variants={fadeUpVariant}
              className="text-xs uppercase tracking-[0.25em] text-royal-700 font-medium block mb-3"
            >
              01 // ΤΑΥΤΟΤΗΤΑ ΓΡΑΦΕΙΟΥ
            </motion.span>
            <motion.h1
              variants={fadeUpVariant}
              className="font-serif text-4xl sm:text-5xl font-semibold text-royal-950 tracking-tight mb-6"
            >
              {SITE_CONTENT.about.sectionTitle}
            </motion.h1>
            <motion.div
              variants={fadeUpVariant}
              className="h-[1px] w-16 bg-royal mb-8"
            />
            <motion.div variants={fadeUpVariant} className="hidden lg:block">
              <img
                src="/brand/gv-logo.svg"
                alt="GV Law"
                className="w-28 h-28 object-contain opacity-90"
              />
            </motion.div>
          </div>

          {/* Δεξιά Στήλη: Αυστηρά το κείμενο από το Word doc */}
          <div className="lg:col-span-8 space-y-6">
            <motion.p
              variants={fadeUpVariant}
              className="font-serif text-2xl sm:text-3xl text-royal-950 leading-snug font-medium"
            >
              {SITE_CONTENT.about.leadParagraphs[0]}
            </motion.p>
            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              {SITE_CONTENT.about.leadParagraphs[1]}
            </motion.p>
            <motion.p
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed pt-4 border-t border-slate-200/80"
            >
              {SITE_CONTENT.about.leadParagraphs[2]}
            </motion.p>

            {/* Κουμπιά Πλοήγησης */}
            <motion.div
              variants={fadeUpVariant}
              className="pt-6 flex flex-wrap gap-4"
            >
              <Link href="/practice-areas" className="group btn-primary">
                <span>Δείτε τους Τομείς Εξειδίκευσης</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/partners" className="group btn-secondary-light">
                <span>Γνωρίστε τους Δικηγόρους</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 3 Αρχιτεκτονικοί Πυλώνες */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200/80 shadow-editorial">
            <Scale className="w-6 h-6 text-royal mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-royal-950 mb-2">
              Συνέπεια & Επαγγελματισμός
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Υπεύθυνη και εξατομικευμένη νομική υποστήριξη σε ιδιώτες και
              επαγγελματίες.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200/80 shadow-editorial">
            <Shield className="w-6 h-6 text-royal mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-royal-950 mb-2">
              Ασφαλής Διεκπεραίωση
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Έγκαιρη και ουσιαστική ενημέρωση κάθε εντολέα σε κάθε στάδιο της
              υπόθεσής του.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200/80 shadow-editorial">
            <BookOpen className="w-6 h-6 text-royal mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-royal-950 mb-2">
              Ολοκληρωμένη Κάλυψη
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Αποτελεσματική διαχείριση νομικών ζητημάτων σε ένα ευρύ φάσμα
              υποθέσεων.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
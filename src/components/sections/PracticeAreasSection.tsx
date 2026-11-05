"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function PracticeAreasSection() {
  const router = useRouter();

  const handleSelectArea = (areaTitle: string) => {
    router.push(
      `/contact?topic=${encodeURIComponent(areaTitle)}#contact-form`
    );
  };

  return (
    <section
      id="practice-areas"
      className="py-24 lg:py-32 bg-ivory text-slate-900 scroll-mt-16"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200/90"
        >
          <div>
            <motion.span
              variants={fadeUpVariant}
              className="text-xs uppercase tracking-[0.25em] text-royal-700 font-medium block mb-3"
            >
              02 // ΤΟΜΕΙΣ ΕΞΕΙΔΙΚΕΥΣΗΣ
            </motion.span>
            <motion.h2
              variants={fadeUpVariant}
              className="font-serif text-4xl sm:text-5xl font-semibold text-royal-950 tracking-tight"
            >
              Τομείς Δικαίου & Υπηρεσίες
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUpVariant}
            className="text-sm sm:text-base text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed"
          >
            {SITE_CONTENT.about.leadParagraphs[2]}
          </motion.p>
        </motion.div>

        {/* Grid των 10 Τομέων Δικαίου */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200/90 shadow-editorial">
          {SITE_CONTENT.about.practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              variants={fadeUpVariant}
              custom={(index % 2) * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              onClick={() => handleSelectArea(area.title)}
              className="group relative p-8 sm:p-10 bg-white hover:bg-royal-950 transition-colors duration-500 border-r border-b border-slate-200/90 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-lg text-royal-700 group-hover:text-royal-400 transition-colors">
                  {area.id}.
                </span>
                <span className="inline-flex items-center gap-1.5 font-serif text-sm text-slate-400 group-hover:text-royal-200 transition-colors">
                  <span>Συζητήστε την υπόθεσή σας</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-royal-950 group-hover:text-white transition-colors mb-3">
                  {area.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-8 h-[2px] w-10 bg-royal/30 group-hover:w-full group-hover:bg-royal transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-royal-950 text-slate-400 border-t border-white/10 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3.5">
          <img
            src="/brand/gv-logo-white.png"
            alt="GV Law Logo"
            className="w-8 h-8 object-contain opacity-90"
          />
          <div>
            <p className="font-serif text-base text-white tracking-wider">
              GV LAW — ΓΚΑΤΖΙΟΥ & ΒΑΛΑΔΑΚΗΣ
            </p>
            <p className="text-xs text-slate-500">
              Δικηγορικό Γραφείο • Κορυδαλλός, Αττική
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          <Link href="/about" className="hover:text-white transition-colors">
            Ποιοι Είμαστε
          </Link>
          <Link href="/practice-areas" className="hover:text-white transition-colors">
            Τομείς Εξειδίκευσης
          </Link>
          <Link href="/partners" className="hover:text-white transition-colors">
            Οι Δικηγόροι
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Επικοινωνία
          </Link>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} GV Law (gvlawyers.gr). Με επιφύλαξη παντός
          δικαιώματος.
        </p>
      </div>
    </footer>
  );
}
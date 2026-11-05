"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Ποιοι Είμαστε", href: "/" },
  { label: "Οι Δικηγόροι", href: "/partners" },
  { label: "Επικοινωνία", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-royal-950/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-lg"
          : "bg-transparent py-6 border-b border-white/5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <img
            src="/brand/gv-logo-white.png"
            alt="GV Law Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-wider text-white leading-none">
              GV LAW
            </span>
            <span className="text-[10px] tracking-[0.18em] text-royal-200 mt-1">
              Ε.Θ. Γκάτζιου & Ι.Εμ. Βαλαδάκης
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-royal-400 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white font-medium after:w-full"
                    : "text-slate-300 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact#contact-form"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 font-serif text-base font-medium tracking-wide text-white bg-royal hover:bg-royal-600 border border-royal-400/30 transition-all"
          >
            <span>Κλείστε Ραντεβού</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-200 hover:text-white"
          aria-label="Μενού πλοήγησης"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-royal-950 border-b border-white/10 px-6 py-6 space-y-3">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base py-2 border-b border-white/5 ${
                  isActive ? "text-royal-400 font-medium" : "text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
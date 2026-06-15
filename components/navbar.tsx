"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/portfolio";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-slate-200/5 bg-slate-950/60 backdrop-blur-md transition-all duration-300 shadow-lg md:inset-x-8 light:border-slate-200/50 light:bg-white/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link 
          href="#home" 
          className="font-sans text-sm font-black tracking-widest text-white hover:text-brand-primary transition-colors duration-200 light:text-slate-900"
        >
          ZAIN FARRUKH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-white light:text-slate-600 light:hover:text-slate-900"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-[2px] w-0 bg-brand-primary transition-all duration-200 group-hover:w-[calc(100%-2rem)]" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Availability Status Badge */}
          <div className="hidden items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3.5 py-1 font-sans text-xs font-medium text-brand-primary light:border-brand-secondary/30 light:bg-brand-secondary/10 light:text-brand-secondary md:flex select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
            <span>Available for Hire</span>
          </div>


          
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-350 shadow-sm md:hidden hover:bg-slate-800 light:border-slate-300 light:bg-slate-50 light:text-slate-700"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen ? (
        <div className="border-t border-slate-200/5 bg-slate-950/95 px-6 py-4 md:hidden rounded-b-2xl light:border-slate-200 light:bg-white/95">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center rounded-xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 font-sans text-xs font-bold uppercase tracking-wider text-slate-300 hover:border-brand-primary hover:text-white light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:border-brand-primary light:hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mt-3 flex items-center justify-between rounded-xl border border-brand-primary/20 bg-brand-primary/5 px-4 py-3 font-sans text-xs text-brand-primary light:border-brand-secondary/20 light:bg-brand-secondary/10 light:text-brand-secondary">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span>AVAILABILITY</span>
              </span>
              <span className="font-bold">ACTIVE</span>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

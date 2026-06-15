"use client";

import { Download, Github, Linkedin, Mail, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, stats } from "@/data/portfolio";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Phone: Phone
};

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-x-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8 flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(173,255,47,0.04),transparent_40%),radial-gradient(circle_at_88%_15%,rgba(132,204,22,0.03),transparent_35%)]" />
      
      <div className="mx-auto w-full max-w-7xl grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
        {/* Left Side: Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Professional Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
            <span>AI/ML & Systems Automation Engineer</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-sans text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl light:text-slate-900">
            Muhammad Zain Farrukh
          </h1>
          
          <h2 className="mt-3 font-sans text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary sm:text-3xl pr-2">
            Designing Intelligent Systems & Automation
          </h2>

          <p className="mx-auto lg:mx-0 mt-5 max-w-2xl text-base leading-8 text-slate-400 font-sans light:text-slate-650">
            I specialize in engineering end-to-end AI applications, scaling computer vision (YOLOv8) multi-stream systems, designing local retrieval RAG agents, and developing high-fidelity dashboard control layers.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-primary px-6 py-3 font-sans text-sm font-bold text-slate-950 shadow-lg shadow-brand-primary/25 hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>View Portfolio</span>
              <ChevronRight className="h-4 w-4" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-3 font-sans text-sm font-bold text-slate-200 hover:border-slate-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 light:border-slate-300 light:bg-slate-50 light:text-slate-705 light:hover:border-slate-400 light:hover:text-slate-900"
            >
              <Download className="h-4 w-4 text-brand-primary" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/35 px-4 py-2 font-sans text-xs font-semibold text-slate-400 transition hover:border-brand-primary hover:text-brand-primary hover:-translate-y-0.5 light:border-slate-200 light:bg-white/50 light:text-slate-500 light:hover:border-brand-primary light:hover:text-brand-primary"
                >
                  <Icon className="h-4 w-4 text-brand-primary" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Photo with Elegant Accent Blur */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-full max-w-sm flex flex-col items-center"
        >
          {/* Profile Frame with Soft Accent Glow */}
          <div className="relative aspect-square w-64 sm:w-80 flex items-center justify-center m-4">
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary to-brand-secondary opacity-10 rounded-[2.2rem] blur-2xl dark:opacity-20 pointer-events-none" />

            {/* Photo Container */}
            <div className="relative h-full w-full p-1 bg-slate-900 rounded-[2rem] shadow-2xl dark:bg-slate-900/60 light:bg-slate-200/80">
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Muhammad Zain Farrukh"
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 65vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Elegant Stats Badges */}
          <div className="mt-8 w-full grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="relative flex flex-col justify-center rounded-2xl border border-slate-200/5 bg-slate-900/40 p-4 text-center shadow-card backdrop-blur-md dark:border-slate-800/50 light:border-slate-200 light:bg-white/50 hover:border-brand-primary/10 transition-colors duration-300"
              >
                <div className="font-sans text-lg sm:text-xl font-extrabold text-white light:text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-1 font-sans text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

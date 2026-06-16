"use client";

import { 
  Download, Github, Linkedin, Mail, Phone, ChevronRight,
  Code2, BrainCircuit, Server, Globe2, Eye, Cpu, Terminal, Database, Bot, Sparkles
} from "lucide-react";
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

const innerOrbit = [
  { name: "Python", Icon: Code2 },
  { name: "YOLOv8", Icon: BrainCircuit },
  { name: "FastAPI", Icon: Server },
  { name: "Next.js", Icon: Globe2 },
  { name: "OpenCV", Icon: Eye }
];

const outerOrbit = [
  { name: "PyTorch", Icon: Cpu },
  { name: "Docker", Icon: Terminal },
  { name: "PostgreSQL", Icon: Database },
  { name: "n8n", Icon: Bot },
  { name: "LLMs / RAG", Icon: Sparkles }
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-x-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8 flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(173,255,47,0.04),transparent_40%),radial-gradient(circle_at_88%_15%,rgba(132,204,22,0.03),transparent_35%)]" />
      
      <div className="mx-auto w-full max-w-7xl grid gap-x-12 gap-y-8 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center">
        
        {/* Intro Text Block (Item 1 on mobile, Col 1 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
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

          <p className="mx-auto lg:mx-0 mt-5 max-w-2xl text-base leading-8 text-slate-400 font-sans light:text-slate-600">
            I specialize in engineering end-to-end AI applications, scaling computer vision (YOLOv8) multi-stream systems, designing local retrieval RAG agents, and developing high-fidelity dashboard control layers.
          </p>
        </motion.div>

        {/* Profile Photo Block with Tech Orbits (Item 2 on mobile, Col 2 on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="order-2 lg:order-2 mx-auto w-full flex items-center justify-center overflow-visible"
        >
          {/* Responsive Scaling Wrapper */}
          <div className="relative scale-[0.7] xs:scale-[0.8] sm:scale-90 md:scale-100 w-[420px] h-[420px] flex items-center justify-center select-none overflow-visible">
            
            {/* Ambient Back Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-brand-primary/10 blur-[60px] dark:bg-brand-primary/15 pointer-events-none" />

            {/* Outer Orbit Circle Line */}
            <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-slate-800/40 dark:border-slate-800/20 pointer-events-none" />
            
            {/* Inner Orbit Circle Line */}
            <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-slate-800/60 dark:border-slate-800/30 pointer-events-none" />

            {/* Outer Orbit Items Container (Counter-Clockwise Rotation) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {outerOrbit.map((item, idx) => {
                const angle = (idx / outerOrbit.length) * 2 * Math.PI;
                const r = 190; // Outer radius
                const x = r * Math.cos(angle);
                const y = r * Math.sin(angle);
                return (
                  <div
                    key={item.name}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
                      className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/90 px-3 py-1.5 text-[10px] font-bold text-slate-350 shadow-lg backdrop-blur-md hover:border-brand-primary/45 hover:text-white pointer-events-auto transition-colors duration-200"
                    >
                      <item.Icon className="h-3 w-3 text-brand-primary" />
                      <span>{item.name}</span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Inner Orbit Items Container (Clockwise Rotation) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {innerOrbit.map((item, idx) => {
                const angle = (idx / innerOrbit.length) * 2 * Math.PI;
                const r = 130; // Inner radius
                const x = r * Math.cos(angle);
                const y = r * Math.sin(angle);
                return (
                  <div
                    key={item.name}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                      className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/90 px-3 py-1.5 text-[10px] font-bold text-slate-350 shadow-lg backdrop-blur-md hover:border-brand-primary/45 hover:text-white pointer-events-auto transition-colors duration-200"
                    >
                      <item.Icon className="h-3 w-3 text-brand-primary" />
                      <span>{item.name}</span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Central Avatar Frame */}
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border border-slate-800/80 bg-slate-900/40 dark:bg-slate-900/20 shadow-2xl flex items-center justify-center overflow-visible">
              {/* Inner Circle Ambient Glow */}
              <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_center,rgba(173,255,47,0.14),transparent_65%)] pointer-events-none" />
              
              {/* Profile Image (peeking out) */}
              <div className="relative h-[145%] w-[145%] -bottom-[6%] overflow-visible">
                <Image
                  src="/profile.png"
                  alt="Muhammad Zain Farrukh"
                  fill
                  priority
                  sizes="(min-width: 1024px) 250px, 50vw"
                  className="object-contain object-bottom transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Buttons & Socials Block (Item 3 on mobile, Col 1 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="order-3 lg:order-3 flex flex-col items-center lg:items-start w-full"
        >
          {/* Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start w-full sm:w-auto">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-3 font-sans text-sm font-bold text-slate-200 hover:border-slate-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 light:border-slate-300 light:bg-slate-50 light:text-slate-700 light:hover:border-slate-400 light:hover:text-slate-900"
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

        {/* Stats Block (Item 4 on mobile, Col 2 on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="order-4 lg:order-4 mx-auto w-full max-w-sm"
        >
          {/* Elegant Stats Badges */}
          <div className="grid grid-cols-3 gap-4">
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

import { Download, Eye } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function ResumeSection() {
  return (
    <AnimatedSection id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="Curriculum Vitae."
        description="View or download the direct PDF compilation detailing experience, certifications, and project builds."
      />
      
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
        
        {/* Left Side: Details and Actions */}
        <div className="rounded-2xl border border-slate-200/5 bg-slate-900/40 p-8 shadow-card hover:border-brand-primary/30 transition-all duration-300 dark:bg-slate-900/35 light:border-slate-200 light:bg-white/70">
          <h3 className="font-sans text-xl font-bold tracking-tight text-white light:text-slate-900">
            Muhammad Zain Farrukh
          </h3>
          
          <p className="mt-4 font-sans text-sm leading-6 text-slate-400 light:text-slate-650">
            AI/ML Engineer & Full-Stack Developer specialized in YOLOv8 multi-stream computer vision scaling, automated scraper networks, RAG search pipelines, and backend microservices.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 font-sans text-sm font-bold text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-primary/90 transition-colors duration-200"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 px-5 py-3 font-sans text-sm font-bold text-slate-200 hover:border-slate-500 hover:text-white transition-colors duration-200 light:border-slate-300 light:bg-slate-50 light:text-slate-750 light:hover:border-slate-400 light:hover:text-slate-900"
            >
              <Eye className="h-4 w-4 text-brand-secondary" />
              <span>Preview PDF</span>
            </a>
          </div>
        </div>

        {/* Right Side: PDF Preview */}
        <div className="rounded-2xl border border-slate-200/5 bg-slate-900/40 overflow-hidden shadow-card dark:border-slate-800/50 light:border-slate-200 light:bg-white">
          <div className="h-8 bg-slate-950 border-b border-slate-250/5 px-4 flex items-center justify-between font-sans text-xs text-slate-400 select-none light:bg-slate-100 light:border-slate-200 light:text-slate-600">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="h-2 w-2 rounded-full bg-brand-primary" />
              <span>CV_Zain_Farrukh.pdf</span>
            </span>
          </div>

          <iframe
            title="Resume preview"
            src="/resume.pdf"
            className="w-full h-[400px] border-none bg-white"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional History."
        description="Fulfilling systems automation, ML optimization, and full-stack software development roles."
      />
      
      <div className="mx-auto max-w-4xl relative pl-6 sm:pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800 light:before:bg-slate-200">
        {experience.map((item) => (
          <div key={item.role} className="relative mb-12 last:mb-0 pl-6 sm:pl-8 group">
            
            {/* Timeline Circle */}
            <span className="absolute -left-[14px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border border-slate-800 group-hover:border-brand-primary transition-colors duration-300 light:bg-slate-150 light:border-slate-300">
              <span className="h-2 w-2 rounded-full bg-slate-700 group-hover:bg-brand-primary transition-colors duration-300 light:bg-slate-400" />
            </span>

            {/* Experience Card */}
            <div className="rounded-2xl border border-slate-200/5 bg-slate-900/40 p-6 sm:p-8 shadow-card hover:border-brand-primary/30 transition-all duration-300 dark:bg-slate-900/35 light:border-slate-200 light:bg-white/70">
              
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-sans text-base font-bold tracking-tight text-brand-primary">
                    {item.role}
                  </h3>
                  
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-sans text-xs text-slate-450 light:text-slate-500">
                    <span className="font-semibold text-white light:text-slate-800">
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-secondary" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>
                
                {/* Period Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950 px-3.5 py-1 font-sans text-xs font-semibold text-slate-400 light:border-slate-200 light:bg-slate-50 light:text-slate-505">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-6 space-y-3 font-sans text-sm text-slate-400 light:text-slate-650">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

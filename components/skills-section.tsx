import { skillGroups } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A Practical, Modern Stack."
        description="Fusing model pipelines, real-time automation networks, and scalable backend services."
      />
      
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div 
            key={group.title} 
            className="rounded-2xl border border-slate-200/5 bg-slate-900/40 p-6 shadow-card hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900/35 light:border-slate-200 light:bg-white/70"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary light:bg-brand-primary/10">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white light:text-slate-900">
                {group.title}
              </h3>
            </div>

            {/* Skill badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="rounded-full border border-slate-800/80 bg-slate-950 px-3.5 py-1 font-sans text-xs font-medium text-slate-300 hover:border-brand-primary hover:text-white transition-all duration-200 select-none light:border-slate-200 light:bg-slate-50 light:text-slate-605 light:hover:text-slate-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

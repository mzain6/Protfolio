import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

function ProjectPlaceholder({ title, Icon }: { title: string; Icon: any }) {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center p-4 dark:bg-slate-950 light:bg-slate-100">
      {/* Fine-dot Mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(173,255,47,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(173,255,47,0.012) 1px,transparent 1px)] bg-[size:16px_16px] pointer-events-none" />
      
      {/* Soft gradient backdrop blur */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/5 opacity-30 rounded-full blur-2xl pointer-events-none" />
      
      {/* Browser window frame mockup */}
      <div className="relative w-full h-full rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-md overflow-hidden flex flex-col shadow-xl light:border-slate-200 light:bg-white/80">
        
        {/* Mockup browser chrome bar */}
        <div className="h-7 border-b border-slate-800/80 px-3 flex items-center justify-between bg-slate-950/80 light:bg-slate-100 light:border-slate-200">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700/60" />
          </div>
          <div className="font-mono text-[7px] text-slate-500 tracking-wider light:text-slate-400">
            https://zain.dev/{title.toLowerCase().replace(/ /g, "-")}
          </div>
          <div className="w-8" />
        </div>
        
        {/* Mockup viewport container */}
        <div className="flex-1 flex items-center justify-center p-3">
          <div className="flex items-center gap-3 text-left">
            <div className="h-9 w-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center shadow-brand-glow/5">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-sans text-xs font-black text-white light:text-slate-900 uppercase tracking-widest">
                {title}
              </div>
              <div className="font-mono text-[7px] text-brand-primary mt-0.5 uppercase tracking-widest font-bold">
                system.status: initialized
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Completed Operational Systems."
        description="Fidelity dashboards, multi-device accessibility services, RTSP visual monitors, and asynchronous scraping clusters."
      />
      
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article 
            key={project.title} 
            className="rounded-2xl border border-slate-200/5 bg-slate-900/40 shadow-card hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between dark:bg-slate-900/35 light:border-slate-200 light:bg-white/70 hover:shadow-brand-glow/5"
          >
            {/* Project preview header */}
            <div className="relative aspect-[16/8] w-full border-b border-slate-200/5 overflow-hidden light:border-slate-200">
              <ProjectPlaceholder title={project.title} Icon={project.icon} />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-sans text-lg font-bold tracking-tight text-white light:text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-6 text-slate-400 light:text-slate-600">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded bg-slate-950/80 px-2.5 py-1 font-sans text-[10px] font-semibold text-slate-400 border border-slate-800/80 light:bg-slate-50 light:border-slate-200 light:text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action links */}
              <div className="mt-6 pt-5 border-t border-slate-200/5 flex flex-wrap gap-3 light:border-slate-200">
                <a
                  href={project.codeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-primary px-4 py-2 font-sans text-xs font-bold text-slate-950 hover:bg-brand-primary/95 transition-colors duration-205"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Source Code</span>
                </a>
                
                {project.liveHref !== "#" ? (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/40 px-4 py-2 font-sans text-xs font-bold text-slate-200 hover:border-slate-500 hover:text-white transition-colors duration-200 light:border-slate-300 light:bg-slate-50 light:text-slate-700 light:hover:border-slate-400 light:hover:text-slate-900"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-brand-primary" />
                    <span>Live Demo</span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}

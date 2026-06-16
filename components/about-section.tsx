import { BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const aboutItems = [
  {
    icon: GraduationCap,
    title: "Computer Science",
    text: "Final-semester BS Computer Science student at University of Central Punjab, Lahore, specializing in AI/ML systems."
  },
  {
    icon: BriefcaseBusiness,
    title: "Bitbash Internship",
    text: "Completed an Automation Engineering internship at Bitbash, where I developed advanced scraping loops, robust search RAG pipelines, and full-stack monitoring systems."
  },
  {
    icon: Sparkles,
    title: "Professional Experience",
    text: "~1 year of professional AI/ML engineering experience across computer vision, automated session tools, and backend orchestration."
  },
  {
    icon: MapPin,
    title: "Freelance & Location",
    text: "Active freelancer offering AI/ML modeling and Python backend services. Based in Lahore, Pakistan."
  }
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="relative">
      <SectionHeading
        eyebrow="About"
        title="Engineering Intelligent System Solutions."
        description="Fusing model architectures with functional microservices, automated scraping loops, and responsive frontend dashboards."
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        {aboutItems.map((item) => (
          <div 
            key={item.title} 
            className="rounded-2xl border border-slate-200/5 bg-slate-900/40 p-8 shadow-card hover:border-brand-primary/30 hover:shadow-brand-glow/5 transition-all duration-300 dark:bg-slate-900/35 light:border-slate-200 light:bg-white/70 hover:-translate-y-1"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary light:bg-brand-primary/10">
              <item.icon className="h-5 w-5" />
            </div>
            
            <h3 className="mt-5 font-sans text-lg font-bold tracking-tight text-white light:text-slate-900">
              {item.title}
            </h3>
            
            <p className="mt-3 font-sans text-sm leading-6 text-slate-400 light:text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

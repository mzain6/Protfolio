import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { AnimatedSection } from "./animated-section";
import { SectionHeading } from "./section-heading";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Phone: Phone
};

export function ContactSection() {
  return (
    <AnimatedSection id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Connect With Me."
        description="I am open to new corporate roles, systems engineering contracts, and freelance automation projects."
      />
      
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-slate-200/5 bg-slate-900/40 p-6 sm:p-8 shadow-card hover:border-brand-primary/30 transition-all duration-300 dark:bg-slate-900/35 light:border-slate-200 light:bg-white/70">
          <h3 className="font-sans text-lg font-bold tracking-tight text-white light:text-slate-900 mb-4 text-center sm:text-left">
            Direct Channels
          </h3>
          
          <p className="font-sans text-sm leading-6 text-slate-400 light:text-slate-600 text-center sm:text-left">
            Reach out directly through any of these secure endpoints. I will respond to your inquiry within 24 hours.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? undefined : "noreferrer"}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/20 px-5 py-4 font-sans text-sm font-semibold text-slate-300 hover:border-brand-primary hover:text-brand-primary transition-all duration-200 light:border-slate-200 light:bg-slate-50/50 light:text-slate-600 light:hover:text-brand-primary light:hover:border-brand-primary"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-4 w-4 text-brand-primary" />
                    <span>{link.label}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-brand-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

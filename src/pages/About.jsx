import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Layers, Activity, ShieldCheck, BarChart3 } from 'lucide-react';

function About() {
  return (
    <div className="px-6 pb-24 pt-[120px] sm:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-10 shadow-soft backdrop-blur-xl">
          <SectionHeading
            eyebrow="About NovaMind"
            title="A new category of AI platform that evolves its own capabilities."
            description="We are building infrastructure for AI systems to expand, detect their limitations, and rewrite workflows automatically."
          />
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#09101f]/90 p-8">
              <h3 className="text-xl font-semibold text-white">Our mission</h3>
              <p className="text-base leading-8 text-slate-300">We empower enterprises with AI orchestration that is not only intelligent, but self-improving. The platform monitors itself, allocates tools, and learns from every workflow execution.</p>
            </div>
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#09101f]/90 p-8">
              <h3 className="text-xl font-semibold text-white">Why it matters</h3>
              <p className="text-base leading-8 text-slate-300">Traditional automation fails at scale because it lacks the ability to adapt and improve. We build systems that grow their own capability graph and keep enterprise operations ahead of change.</p>
            </div>
          </motion.div>
        </section>
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Architecture at a glance</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">A modular runtime core routes requests through agent clusters, attaches tool modules on demand, and executes feedback loops to remediate capability gaps.</p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Layers, title: 'Modular Core', detail: 'Composable tool modules allow the system to extend capabilities without refactoring the core.' },
                { icon: Activity, title: 'Smart Orchestration', detail: 'Agents analyze tasks, determine the optimal sequence, and maintain observability across workflows.' },
                { icon: ShieldCheck, title: 'Secure Enterprise', detail: 'Built for governance, auditing, and robust enterprise-scale automation workflows.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <item.icon className="h-7 w-7 text-cyan-300" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Roadmap</h3>
            <div className="mt-8 space-y-6">
              {[
                { label: 'Q3', title: 'Modular tool marketplace', description: 'Open ecosystem for tool integration and partner modules.' },
                { label: 'Q4', title: 'Adaptive learning loops', description: 'Capability gap remediation with automated module discovery.' },
                { label: 'Q1', title: 'Enterprise adoption', description: 'Pilot deployments with automated governance and SLA controls.' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    <span>{item.label}</span>
                    <span className="text-slate-400">Milestone</span>
                  </div>
                  <p className="mt-3 font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-[36px] border border-white/10 bg-[#07101b]/90 p-8 shadow-soft backdrop-blur-xl">
          <SectionHeading
            eyebrow="Scalability"
            title="Built to expand with your enterprise and accelerate AI adoption across teams."
            description="The platform is designed to support multi-domain workflows, distributed data sources, and the next generation of autonomous automation." 
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">Distributed orchestration</h4>
              <p className="mt-3 text-slate-300">Run independent agent clusters and coordinate their outputs through a centralized intelligence layer.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">Enterprise readiness</h4>
              <p className="mt-3 text-slate-300">Compliance, observability, and secure tool integrations are baked into the architecture from day one.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

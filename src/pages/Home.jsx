import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Code2, Database, Layers, ShieldCheck, Server, Zap, Briefcase, Cloud } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import DeveloperCard from '../components/DeveloperCard';
import WorkflowScene from '../components/WorkflowScene';
import EnterpriseDiagram from '../components/EnterpriseDiagram';
import { features } from '../data/features';
import { problems, solutions } from '../data/problems';
import { stats } from '../data/stats';
import { team } from '../data/team';

function Home() {
  return (
    <div className="relative overflow-hidden px-3 sm:px-6 pb-16 sm:pb-24 pt-[100px] sm:pt-[120px] lg:pt-[140px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14 md:gap-16">
        <HeroSection />
        <EnterpriseSection />
        <WorkflowSection />
        <SectionHeading
          eyebrow="The Three Core Pillars"
          title="What makes self-evolution work"
          description="Gap Detection • Human-Verified Autonomy • Continuous Improvement"
        />
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {features.slice(0, 6).map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index + 1} />
          ))}
        </div>
        <ProblemSolutionSection />
        <InvestorSection />
        <TeamSection />
        
        {/* Final CTA Section */}
        <section id="cta" className="rounded-[24px] sm:rounded-[36px] border border-cyan-300/10 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 p-6 sm:p-8 md:p-12 text-center shadow-soft backdrop-blur-xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white mb-3 sm:mb-4">Ready to Build Self-Evolving AI?</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Stop managing static AI capabilities. Let your agent identify gaps and autonomously build solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="inline-flex items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-950 transition hover:brightness-110">
              Scale Your AI's Intelligence Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
              View on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const capabilityGapSteps = [
    {
      number: '1',
      name: 'The Request',
      description: 'A user asks for something outside the agent\'s current scope.'
    },
    {
      number: '2',
      name: 'Gap Identification',
      description: 'Instead of "I can\'t do that," the agent logs a Capability Gap.'
    },
    {
      number: '3',
      name: 'Human Approval',
      description: 'You receive a dashboard notification to review and approve the request.'
    },
    {
      number: '4',
      name: 'Autonomous Factory',
      description: 'Coding, Testing, and Deploy agents collaborate to ship production-ready code.'
    },
    {
      number: '5',
      name: 'Fulfillment',
      description: 'The agent notifies the user: "I can now handle that. Here\'s your result."'
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] border border-white/10 bg-[#08101f]/90 p-4 sm:p-8 md:p-12 shadow-soft backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="w-full space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm text-cyan-300">
              <CheckCircle2 className="h-4 w-4 text-cyan-300 flex-shrink-0" />
              Self-Evolving AI Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] sm:tracking-[-0.05em] text-white">
              The AI Agent that Builds Itself.
            </h1>
            <p className="max-w-3xl text-base sm:text-lg md:text-lg leading-7 sm:leading-8 text-slate-300">
              Stop manually coding features. Your agent identifies its own limitations, triggers an autonomous development lifecycle, and deploys new capabilities—all while you maintain total control.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
              <button onClick={() => setShowModal(true)} className="hover-target inline-flex items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:brightness-110">
                See the Evolution in Action
                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <a href="#workflow" className="hover-target inline-flex items-center justify-center rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                View the Agent Dashboard
              </a>
            </div>
          </div>
          
          {/* Capability Gap Loop Visualization */}
          <div className="mt-6 sm:mt-8 rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#0b1425]/90 p-4 sm:p-6 shadow-soft backdrop-blur-xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-300/80 font-semibold mb-4 sm:mb-6">The Capability Gap Loop</p>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-5">
              {capabilityGapSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#08101f]/95 p-3 sm:p-4 text-center">
                    <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-bold text-sm sm:text-base mb-2">
                      {step.number}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-white mb-1">{step.name}</p>
                    <p className="text-xs text-slate-400 leading-4">{step.description}</p>
                  </div>
                  {idx < capabilityGapSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-2xl mx-4 rounded-[24px] border border-white/10 bg-[#08101f]/95 p-6 shadow-soft backdrop-blur-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
            >
              ✕
            </button>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Watch the Self-Evolution in Action</h3>
            <div className="rounded-xl border border-white/10 bg-[#0a0f1a] p-6 text-center">
              <p className="text-slate-300">Agent Dashboard Preview</p>
              <p className="text-sm text-slate-400 mt-2">A demo showing real-time capability gap detection, human approval workflow, and autonomous feature deployment.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section className="rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border border-white/10 bg-[#07101b]/90 p-3 sm:p-6 md:p-8 shadow-soft backdrop-blur-xl w-full max-w-full overflow-hidden">
      <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-[1fr_1.05fr] w-full">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 min-w-0">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.35em] text-cyan-300/80 font-semibold line-clamp-2 sm:line-clamp-none">The Agentic Factory</p>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.01em] sm:tracking-[-0.02em] md:tracking-[-0.04em] text-white leading-tight sm:leading-normal">
              From Capability Gap to Production Feature
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-slate-300">
              When the system identifies a gap, specialized agents collaborate autonomously to design, build, test, and deploy new capabilities—all with human oversight.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-5 rounded-[16px] sm:rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-3 sm:p-4 md:p-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.28em] text-cyan-300/80 font-semibold">What enterprises really want</p>
            <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-slate-300">
              Companies don&apos;t just want “smart AI.” They want control. We built an AI agent that runs entirely inside your infrastructure, works with your systems, and improves itself over time—without exposing your data outside your firewall.
            </p>
          </div>

          <div className="rounded-[16px] sm:rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-3 sm:p-4 md:p-6">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white">Built to evolve. Not just respond.</p>
            <p className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-slate-300">
              When the system hits a capability gap, it doesn&apos;t say “I don&apos;t know.” It enters a self-improvement workflow.
            </p>
          </div>

          <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 sm:grid-cols-2">
            {[
              'REQUIREMENT GATHERING',
              'HUMAN APPROVAL',
              'AUTOMATED DEVELOPMENT & TESTING',
              'DEPLOYMENT',
            ].map((step) => (
              <div key={step} className="rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-2 sm:p-3 md:p-5 text-xs sm:text-xs md:text-sm text-slate-200">
                <p className="font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.24em] text-cyan-300/90 line-clamp-2">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.28em] text-cyan-300/80 font-semibold">Your AI evolves based on real operational problems inside your business.</p>
        </div>

        <div className="relative rounded-[16px] sm:rounded-[24px] md:rounded-[36px] border border-cyan-300/10 bg-[#06111e]/95 p-3 sm:p-6 md:p-8 shadow-soft w-full min-w-0">
          <div className="absolute inset-x-0 top-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />
          <div className="relative rounded-[12px] sm:rounded-[20px] md:rounded-[32px] border border-white/10 bg-[#081523]/95 p-2 sm:p-4 md:p-8 w-full min-w-0">
            <div className="mb-3 sm:mb-4 md:mb-8 rounded-[12px] sm:rounded-[20px] md:rounded-[28px] border border-white/10 bg-[#091727]/95 p-3 sm:p-4 md:p-6 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.35em] text-cyan-300/80 font-semibold line-clamp-1">AI AGENT</p>
              <h3 className="mt-1 sm:mt-2 md:mt-4 text-base sm:text-xl md:text-2xl font-semibold text-white leading-tight">Runs Inside Your Firewall</h3>
              <p className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm leading-4 sm:leading-5 md:leading-6 text-slate-300">On-premise, private cloud, your infrastructure, your data stays yours.</p>
            </div>

            <div className="grid gap-1 sm:gap-2 md:gap-4 grid-cols-2 sm:grid-cols-2 w-full">
              {[
                { icon: Server, label: 'On-Premise' },
                { icon: Cloud, label: 'Private Cloud' },
                { icon: Briefcase, label: 'Your Infrastructure' },
                { icon: ShieldCheck, label: 'Your Data Stays Yours' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1 sm:gap-2 md:gap-3 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-[#0c1725]/95 p-2 sm:p-3 md:p-4 text-slate-300 min-w-0">
                  <span className="inline-flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl bg-cyan-400/10 text-cyan-300 flex-shrink-0">
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </span>
                  <span className="font-medium text-xs sm:text-xs md:text-sm truncate">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 sm:mt-4 md:mt-8 rounded-[12px] sm:rounded-[20px] md:rounded-[28px] border border-white/10 bg-[#04101b]/95 p-2 sm:p-3 md:p-5 w-full">
              <EnterpriseDiagram />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[20px] sm:rounded-[32px] border border-white/10 bg-[#0b1220]/95 p-4 sm:p-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-rose-300/90 font-semibold">MOST ENTERPRISE AI TODAY IS A COST CENTER.</p>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-slate-300">
            <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-400 flex-shrink-0" />
              Expensive integrations
            </li>
            <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-400 flex-shrink-0" />
              Endless customization
            </li>
            <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-400 flex-shrink-0" />
              High cloud inference costs
            </li>
            <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-400 flex-shrink-0" />
              Poor scalability
            </li>
          </ul>
        </div>
        <div className="rounded-[20px] sm:rounded-[32px] border border-white/10 bg-[#0b1220]/95 p-4 sm:p-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-cyan-300/80 font-semibold">OUR APPROACH IS DIFFERENT.</p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
            A pluggable architecture with specialized tools and smaller local models to handle specific workflows efficiently.
          </p>
          <div className="mt-4 sm:mt-6 grid gap-2 sm:gap-4 sm:grid-cols-2">
            {[
              { icon: Layers, label: 'HR WORKFLOWS' },
              { icon: Database, label: 'FINANCE DATA' },
              { icon: Zap, label: 'LOGISTICS OPERATIONS' },
              { icon: Code2, label: 'IT SYSTEMS' },
              { icon: ShieldCheck, label: 'CUSTOM TOOLS' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-2 sm:p-4 text-slate-300">
                <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-cyan-400/10 text-cyan-300 flex-shrink-0">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="font-medium uppercase tracking-[0.12em] sm:tracking-[0.18em] text-xs">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-cyan-300/80 font-semibold">Right tool. Right model. Right place.</p>
        </div>
      </div>

      <div className="mt-4 sm:mt-10 rounded-[20px] sm:rounded-[32px] border border-cyan-300/10 bg-white/5 p-4 sm:p-6 text-center">
        <p className="text-base sm:text-lg font-semibold text-white">WE&apos;RE NOT BUILDING AN AI THAT KNOWS EVERYTHING TODAY.</p>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-cyan-300">WE&apos;RE BUILDING AN ARCHITECTURE THAT CAN LEARN ANYTHING TOMORROW.</p>
      </div>

      <div className="mt-4 sm:mt-6 rounded-[20px] sm:rounded-[32px] border border-white/10 bg-[#02050c]/95 p-4 sm:p-6 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-cyan-300/80 font-semibold">CURIOUS TO HEAR:</p>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-white">What&apos;s the biggest thing stopping enterprises from fully trusting AI today?</p>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="space-y-6 sm:space-y-8">
      <SectionHeading
        eyebrow="How It Works"
        title="The Self-Evolution Loop: From Gap to Growth"
        description="Watch the agent detect a missing capability, trigger human approval, and autonomously build the solution. This is how AI becomes smarter every day."
      />
      <div className="relative">
        <div className="absolute inset-0 rounded-[24px] sm:rounded-[36px] border border-cyan-300/10" />
        <div className="relative rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#071019]/90 p-3 sm:p-6 shadow-soft backdrop-blur-xl">
          <WorkflowScene />
          <div className="mt-4 sm:mt-8 grid gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'User query enters the system',
              'Agent decides tool set',
              'Data flows between modules',
              'Capability evolution completes',
            ].map((copy) => (
              <div key={copy} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-5 text-xs sm:text-sm text-slate-300 shadow-[0_0_40px_rgba(0,0,0,0.14)]">
                {copy}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="grid gap-6 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#08101f]/90 p-4 sm:p-8 shadow-soft backdrop-blur-xl">
        <SectionHeading
          eyebrow="The Challenge"
          title="Why traditional AI hits a wall"
          description="Most AI systems are static. When users ask for something new, the system fails—and nothing improves."
        />
        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
          {problems.map((item) => (
            <div key={item.title} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] text-cyan-300/80">{item.title}</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#08101f]/90 p-4 sm:p-8 shadow-soft backdrop-blur-xl">
        <SectionHeading
          eyebrow="Our Answer"
          title="Self-evolution through gap detection"
          description="When a capability gap is detected, humans approve it, and agents autonomously build the solution."
        />
        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4">
          {solutions.map((item) => (
            <div key={item.title} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] text-violet-300/80">{item.title}</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorSection() {
  return (
    <section className="rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#07101b]/90 p-4 sm:p-8 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Why it Matters"
        title="The economics of autonomous capability growth"
        description="Every user failure becomes your roadmap. Every gap closed reduces development backlog. The more your agent is used, the smarter it becomes."
      />
      <div className="mt-6 sm:mt-10">
        <h3 className="text-lg font-semibold text-white mb-4">Cost Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-white/10 bg-white/5 rounded-lg">
            <thead>
              <tr>
                <th className="border border-white/10 p-3 text-left text-sm font-semibold text-cyan-300">Metric</th>
                <th className="border border-white/10 p-3 text-left text-sm font-semibold text-cyan-300">Traditional AI</th>
                <th className="border border-white/10 p-3 text-left text-sm font-semibold text-cyan-300">NovaMind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white/10 p-3 text-sm text-slate-300">ROI Payback Period</td>
                <td className="border border-white/10 p-3 text-sm text-slate-300">18 - 24 Months</td>
                <td className="border border-white/10 p-3 text-sm text-slate-300">3 - 5 Months (10x Faster ROI)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-400">Profitability is driven by 78% Gross Margins through On-System execution.</p>
      </div>
      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 lg:grid-cols-3">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#091122]/90 p-4 sm:p-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-cyan-300/80 font-semibold">Market</p>
          <h3 className="mt-2 sm:mt-4 text-base sm:text-xl font-semibold text-white">Enterprise AI orchestration</h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-7 text-slate-300">AI infrastructure spending is accelerating as companies adopt automation at scale.</p>
        </div>
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#091122]/90 p-4 sm:p-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-cyan-300/80 font-semibold">Vision</p>
          <h3 className="mt-2 sm:mt-4 text-base sm:text-xl font-semibold text-white">Autonomous capability growth</h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-7 text-slate-300">Our roadmap includes plug-and-play tool modules and rapid enterprise integration.</p>
        </div>
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#091122]/90 p-4 sm:p-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.28em] text-cyan-300/80 font-semibold">Scale</p>
          <h3 className="mt-2 sm:mt-4 text-base sm:text-xl font-semibold text-white">From prototype to platform</h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-7 text-slate-300">Designed for distributed teams, multi-agent workflows, and mission-critical reliability.</p>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#07101b]/90 p-4 sm:p-8 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Built by"
        title="A lean team blending AI engineering, product, and platform expertise."
        description="Our founding team combines deep infrastructure experience with ambitious AI product vision."
      />
      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <DeveloperCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

export default Home;

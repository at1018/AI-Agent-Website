import { motion } from 'framer-motion';
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
    <div className="relative overflow-hidden px-6 pb-24 pt-[120px] sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <HeroSection />
        <EnterpriseSection />
        <WorkflowSection />
        <SectionHeading
          eyebrow="Why NovaMind"
          title="Infrastructure intelligence built for enterprise evolution."
          description="We transform brittle AI pipelines into a modular, self-healing platform that scales with business complexity."
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {features.slice(0, 6).map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index + 1} />
          ))}
        </div>
        <ProblemSolutionSection />
        <InvestorSection />
        <TeamSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl sm:p-12">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-300">
              <CheckCircle2 className="h-4 w-4 text-cyan-300" />
              AI infrastructure, not a chatbot.
            </span>
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Adaptive AI Infrastructure That Evolves Beyond Traditional Agents
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Modular intelligence, dynamic orchestration, and autonomous improvement workflows for enterprise-grade automation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#workflow" className="hover-target inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
                Explore the network
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="/contact" className="hover-target inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                Talk to our team
              </a>
            </div>
          </div>
          <div className="relative hidden w-full max-w-[420px] lg:block">
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-8 top-24 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="rounded-[36px] border border-white/10 bg-[#0b1425]/90 p-6 shadow-soft backdrop-blur-xl">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Live workflow preview</p>
                <div className="rounded-3xl border border-white/10 bg-[#08101f]/95 p-5">
                  <div className="space-y-4">
                    {['Analyze latest AI startup trends', 'Agent receives query', 'Selects tools dynamically', 'Detects capability gap'].map((step, idx) => (
                      <div key={step} className="flex items-center gap-3 text-slate-200">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">{idx + 1}</span>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section className="rounded-[36px] border border-white/10 bg-[#07101b]/90 p-8 shadow-soft backdrop-blur-xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">ENTERPRISE AI THAT STAYS YOURS.</p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Every company says they want AI.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Until they realize it means sending sensitive company data to someone else&apos;s servers. That&apos;s where most enterprise AI conversations quietly die.
            </p>
          </div>

          <div className="space-y-5 rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">What enterprises really want</p>
            <p className="text-lg leading-8 text-slate-300">
              Companies don&apos;t just want “smart AI.” They want control. We built an AI agent that runs entirely inside your infrastructure, works with your systems, and improves itself over time—without exposing your data outside your firewall.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-6">
            <p className="text-lg font-semibold text-white">Built to evolve. Not just respond.</p>
            <p className="mt-3 text-slate-300">
              When the system hits a capability gap, it doesn&apos;t say “I don&apos;t know.” It enters a self-improvement workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'REQUIREMENT GATHERING',
              'HUMAN APPROVAL',
              'AUTOMATED DEVELOPMENT & TESTING',
              'DEPLOYMENT',
            ].map((step) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                <p className="font-semibold uppercase tracking-[0.24em] text-cyan-300/90">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Your AI evolves based on real operational problems inside your business.</p>
        </div>

        <div className="relative rounded-[36px] border border-cyan-300/10 bg-[#06111e]/95 p-8 shadow-soft">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />
          <div className="relative rounded-[32px] border border-white/10 bg-[#081523]/95 p-8">
            <div className="mb-8 rounded-[28px] border border-white/10 bg-[#091727]/95 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">AI AGENT</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Runs Inside Your Firewall</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">On-premise, private cloud, your infrastructure, your data stays yours.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Server, label: 'On-Premise' },
                { icon: Cloud, label: 'Private Cloud' },
                { icon: Briefcase, label: 'Your Infrastructure' },
                { icon: ShieldCheck, label: 'Your Data Stays Yours' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#0c1725]/95 p-4 text-slate-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-[#04101b]/95 p-5">
              <EnterpriseDiagram />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-white/10 bg-[#0b1220]/95 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-rose-300/90">MOST ENTERPRISE AI TODAY IS A COST CENTER.</p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
              Expensive integrations
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
              Endless customization
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
              High cloud inference costs
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
              Poor scalability
            </li>
          </ul>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#0b1220]/95 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">OUR APPROACH IS DIFFERENT.</p>
          <p className="mt-4 text-slate-300">
            A pluggable architecture with specialized tools and smaller local models to handle specific workflows efficiently.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Layers, label: 'HR WORKFLOWS' },
              { icon: Database, label: 'FINANCE DATA' },
              { icon: Zap, label: 'LOGISTICS OPERATIONS' },
              { icon: Code2, label: 'IT SYSTEMS' },
              { icon: ShieldCheck, label: 'CUSTOM TOOLS' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-medium uppercase tracking-[0.18em] text-xs">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-cyan-300/80">Right tool. Right model. Right place.</p>
        </div>
      </div>

      <div className="mt-10 rounded-[32px] border border-cyan-300/10 bg-white/5 p-6 text-center">
        <p className="text-lg font-semibold text-white">WE&apos;RE NOT BUILDING AN AI THAT KNOWS EVERYTHING TODAY.</p>
        <p className="mt-3 text-lg font-semibold text-cyan-300">WE&apos;RE BUILDING AN ARCHITECTURE THAT CAN LEARN ANYTHING TOMORROW.</p>
      </div>

      <div className="mt-6 rounded-[32px] border border-white/10 bg-[#02050c]/95 p-6 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">CURIOUS TO HEAR:</p>
        <p className="mt-3 text-lg font-semibold text-white">What&apos;s the biggest thing stopping enterprises from fully trusting AI today?</p>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="space-y-8">
      <SectionHeading
        eyebrow="AI workflow prototype"
        title="Visualize how the platform senses, routes, and evolves intelligence in real time."
        description="Watch the agent ingest a query, attach tools, detect gaps, and upgrade itself all within a single infrastructure flow."
      />
      <div className="relative">
        <div className="absolute inset-0 rounded-[36px] border border-cyan-300/10" />
        <div className="relative rounded-[36px] border border-white/10 bg-[#071019]/90 p-6 shadow-soft backdrop-blur-xl">
          <WorkflowScene />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'User query enters the system',
              'Agent decides tool set',
              'Data flows between modules',
              'Capability evolution completes',
            ].map((copy) => (
              <div key={copy} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 shadow-[0_0_40px_rgba(0,0,0,0.14)]">
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
    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl">
        <SectionHeading
          eyebrow="Traditional AI problems"
          title="What blocks modern intelligence stacks today"
          description="Most systems are built for narrow tasks and fail the moment complexity or scale demands flexibility."
        />
        <div className="mt-8 grid gap-4">
          {problems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-8 shadow-soft backdrop-blur-xl">
        <SectionHeading
          eyebrow="Our solution"
          title="A platform designed to expand and improve autonomously"
          description="Instead of static components, NovaMind orchestrates and evolves itself through modular intelligence."
        />
        <div className="mt-8 grid gap-4">
          {solutions.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-violet-300/80">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorSection() {
  return (
    <section className="rounded-[36px] border border-white/10 bg-[#07101b]/90 p-8 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Investor insight"
        title="The future of AI is infrastructure that learns and grows automatically."
        description="Position your investment around scalable orchestration, enterprise automation, and continuously improving capabilities."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-4xl font-semibold text-cyan-300">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-[#091122]/90 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Market</p>
          <h3 className="mt-4 text-xl font-semibold text-white">Enterprise AI orchestration</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">AI infrastructure spending is accelerating as companies adopt automation at scale.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#091122]/90 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Vision</p>
          <h3 className="mt-4 text-xl font-semibold text-white">Autonomous capability growth</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">Our roadmap includes plug-and-play tool modules and rapid enterprise integration.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#091122]/90 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Scale</p>
          <h3 className="mt-4 text-xl font-semibold text-white">From prototype to platform</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">Designed for distributed teams, multi-agent workflows, and mission-critical reliability.</p>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="rounded-[36px] border border-white/10 bg-[#07101b]/90 p-8 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Built by"
        title="A lean team blending AI engineering, product, and platform expertise."
        description="Our founding team combines deep infrastructure experience with ambitious AI product vision."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <DeveloperCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

export default Home;

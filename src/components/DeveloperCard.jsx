import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

function DeveloperCard({ name, role, linkedin, github }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#08101e]/90 p-6 shadow-soft backdrop-blur-2xl"
    >
      <div className="absolute right-6 top-6 h-16 w-16 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-cyan-300 ring-1 ring-white/10">{name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
        <div>
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
      <div className="relative z-10 mt-6 flex items-center gap-3 text-cyan-300">
        <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={github} target="_blank" rel="noreferrer" className="hover:text-white">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
}

export default DeveloperCard;

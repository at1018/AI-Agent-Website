import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'How it Works', href: '#workflow' },
  { label: 'Documentation', href: '#features' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Demo', href: '#cta' },
];

function NavBar({ scrollY }) {
  const [open, setOpen] = useState(false);
  const isScrolled = scrollY > 16;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-[#080b18]/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.24)]' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-500/25 ring-1 ring-white/10 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </span>
          <div>
            <p className="font-semibold tracking-[0.24em] text-sm uppercase text-cyan-300">NovaMind</p>
            <p className="text-xs text-zinc-400">Adaptive AI Infrastructure</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-cyan-300' : 'text-zinc-300 hover:text-white'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#060713]/95 backdrop-blur-xl">
          <div className="space-y-3 px-6 py-6">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;

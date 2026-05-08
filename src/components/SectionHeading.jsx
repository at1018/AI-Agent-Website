function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default SectionHeading;

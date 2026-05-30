function MagicBentoCard({
  title,
  description,
  skills,
  icon,
  className = "",
}) {
  function handleMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(16,185,129,0.18),transparent_35%)]" />
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-2xl">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-zinc-300 transition group-hover:border-emerald-400/30 group-hover:text-emerald-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MagicBentoCard;
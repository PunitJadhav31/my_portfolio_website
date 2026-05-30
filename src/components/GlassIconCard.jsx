function GlassIconCard({ name, shortName, category }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.08]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-gradient-to-br from-emerald-400/20 via-blue-400/10 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 flex min-h-28 flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-lg font-bold text-emerald-300 shadow-lg shadow-emerald-400/5 transition group-hover:scale-110 group-hover:border-emerald-400/40 group-hover:text-white">
          {shortName}
        </div>

        <p className="mt-4 text-sm font-semibold text-white">{name}</p>

        <p className="mt-1 text-xs text-zinc-500">{category}</p>
      </div>
    </div>
  );
}

export default GlassIconCard;
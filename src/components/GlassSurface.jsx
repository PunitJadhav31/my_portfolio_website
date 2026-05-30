function GlassSurface({
  children,
  className = "",
  rounded = "rounded-[2rem]",
}) {
  function handleMouseMove(event) {
    const surface = event.currentTarget;
    const rect = surface.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    surface.style.setProperty("--glass-x", `${x}px`);
    surface.style.setProperty("--glass-y", `${y}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden border border-white/10 bg-white/[0.045] shadow-2xl shadow-emerald-500/10 backdrop-blur-2xl transition duration-300 hover:border-emerald-400/40 hover:bg-white/[0.07] ${rounded} ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${rounded}`}
        style={{
          background:
            "radial-gradient(circle at var(--glass-x, 50%) var(--glass-y, 50%), rgba(16, 185, 129, 0.18), transparent 35%)",
        }}
      />

      <div
        className={`pointer-events-none absolute inset-0 ${rounded}`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 40%, rgba(16,185,129,0.08))",
        }}
      />

      <div className="pointer-events-none absolute inset-px rounded-[inherit] border border-white/10" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GlassSurface;
const dockLinks = [
  { name: "Home", href: "#home", icon: "⌂" },
  { name: "About", href: "#about", icon: "◎" },
  { name: "Projects", href: "#projects", icon: "◇" },
  { name: "Skills", href: "#skills", icon: "✦" },
  { name: "Contact", href: "#contact", icon: "✉" },
];

function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-3 shadow-2xl shadow-emerald-500/10 backdrop-blur-2xl">
        {dockLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-zinc-300 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:bg-emerald-400 hover:text-black"
          >
            {link.icon}

            <span className="pointer-events-none absolute -top-10 rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs text-white opacity-0 shadow-lg backdrop-blur-xl transition group-hover:opacity-100">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dock;
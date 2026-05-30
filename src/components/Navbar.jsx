import { useState } from "react";
import GlassSurface from "./GlassSurface";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4">
      <GlassSurface
        rounded="rounded-full"
        className="mx-auto max-w-7xl px-5 py-3"
      >
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">
            Punit<span className="text-emerald-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400 hover:text-black md:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-zinc-300"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full border border-emerald-400/40 px-4 py-2 text-center text-sm font-medium text-emerald-300"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </GlassSurface>
    </header>
  );
}

export default Navbar;
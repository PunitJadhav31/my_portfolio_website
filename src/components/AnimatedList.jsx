import { motion } from "motion/react";

function AnimatedList({ items = [], title = "Key Points" }) {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
      <p className="mb-4 text-sm font-semibold text-white">{title}</p>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{
              opacity: 0,
              x: -18,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="flex gap-3 text-sm leading-6 text-zinc-400"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default AnimatedList;
import BlurText from "./BlurText";
import ScrollFloat from "./ScrollFloat";

function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
        <BlurText text={label} delay={50} animateBy="words" />
      </p>

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
        <ScrollFloat
          animationDuration={1}
          ease="back.out(1.7)"
          scrollStart="top 85%"
          scrollEnd="bottom 60%"
          stagger={0.015}
        >
          {title}
        </ScrollFloat>
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          <BlurText text={description} delay={18} animateBy="words" />
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
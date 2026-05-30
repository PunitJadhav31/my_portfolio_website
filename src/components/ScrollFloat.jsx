import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollFloat({
  children,
  className = "",
  animationDuration = 1,
  ease = "back.out(1.7)",
  scrollStart = "top 85%",
  scrollEnd = "bottom 60%",
  stagger = 0.025,
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const letters = element.querySelectorAll(".scroll-float-letter");

    const context = gsap.context(() => {
      gsap.fromTo(
        letters,
        {
          yPercent: 120,
          opacity: 0,
          rotateX: -90,
          filter: "blur(8px)",
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: animationDuration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: element,
            start: scrollStart,
            end: scrollEnd,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, element);

    return () => context.revert();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  const text = typeof children === "string" ? children : "";

  return (
    <span
      ref={containerRef}
      className={`inline-block overflow-hidden ${className}`}
      aria-label={text}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split("").map((letter, letterIndex) => (
            <span
              key={`${letter}-${letterIndex}`}
              className="scroll-float-letter inline-block will-change-transform"
              aria-hidden="true"
            >
              {letter}
            </span>
          ))}

          {wordIndex !== text.split(" ").length - 1 && (
            <span className="inline-block" aria-hidden="true">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </span>
  );
}

export default ScrollFloat;
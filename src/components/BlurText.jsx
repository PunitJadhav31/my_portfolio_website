import { motion } from "motion/react";

function BlurText({
  text,
  delay = 80,
  className = "",
  wordClassName = "",
  animateBy = "words",
  once = true,
}) {
  const elements = animateBy === "letters" ? text.split("") : text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={`${element}-${index}`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          viewport={{
            once,
            amount: 0.5,
          }}
          transition={{
            duration: 0.55,
            delay: (index * delay) / 1000,
            ease: "easeOut",
          }}
          className={`inline-block transition duration-300 ${wordClassName}`}
        >
          {element}
          {animateBy === "words" && index !== elements.length - 1
            ? "\u00A0"
            : ""}
        </motion.span>
      ))}
    </span>
  );
}

export default BlurText;
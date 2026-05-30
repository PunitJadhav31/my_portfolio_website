import { useEffect, useRef } from "react";

function SplashCursor() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || reduceMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticle(x, y, isClick = false) {
      const angle = Math.random() * Math.PI * 2;
      const speed = isClick ? Math.random() * 4 + 2 : Math.random() * 1.8 + 0.5;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: isClick ? Math.random() * 18 + 10 : Math.random() * 10 + 5,
        life: 1,
        decay: isClick ? 0.018 : 0.026,
        color:
          Math.random() > 0.5
            ? "rgba(16, 185, 129,"
            : "rgba(56, 189, 248,",
      };
    }

    function addParticles(event, count = 3, isClick = false) {
      const { clientX, clientY } = event;

      for (let i = 0; i < count; i++) {
        particlesRef.current.push(createParticle(clientX, clientY, isClick));
      }

      if (particlesRef.current.length > 120) {
        particlesRef.current.splice(0, particlesRef.current.length - 120);
      }
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.96;
        particle.vy *= 0.96;
        particle.life -= particle.decay;

        if (particle.life <= 0) return false;

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );

        gradient.addColorStop(0, `${particle.color} ${particle.life * 0.55})`);
        gradient.addColorStop(0.45, `${particle.color} ${particle.life * 0.22})`);
        gradient.addColorStop(1, `${particle.color} 0)`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        return true;
      });

      animationRef.current = requestAnimationFrame(draw);
    }

    function handlePointerMove(event) {
      addParticles(event, 2, false);
    }

    function handlePointerDown(event) {
      addParticles(event, 18, true);
    }

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
      aria-hidden="true"
    />
  );
}

export default SplashCursor;
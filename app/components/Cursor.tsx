import { useEffect } from "react";

export default function InsaneCursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const circle = document.querySelector(".cursor-circle");

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let velocity = 0;

    // Track mouse
    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", move);

    // Smooth physics animation
    const animate = () => {
      const dx = mouseX - posX;
      const dy = mouseY - posY;

      posX += dx * 0.15;
      posY += dy * 0.15;

      velocity = Math.sqrt(dx * dx + dy * dy);

      // Move circle
      circle.style.left = posX + "px";
      circle.style.top = posY + "px";

      // Move dot instantly
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";

      // Dynamic scale based on speed
      const scale = Math.min(1 + velocity / 100, 2);
      circle.style.transform = `translate(-50%, -50%) scale(${scale})`;

      requestAnimationFrame(animate);
    };
    animate();

    // Magnetic effect
    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        circle.style.left = rect.left + rect.width / 2 + x * 0.3 + "px";
        circle.style.top = rect.top + rect.height / 2 + y * 0.3 + "px";

        circle.style.transform = "translate(-50%, -50%) scale(2.2)";
        circle.style.background = "rgba(0,140,255,0.2)";
      });

      el.addEventListener("mouseleave", () => {
        circle.style.transform = "translate(-50%, -50%) scale(1)";
        circle.style.background = "rgba(0,140,255,0.08)";
      });
    });

    // Shockwave ripple
    const clickEffect = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "shockwave";

      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";

      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 800);
    };

    document.addEventListener("click", clickEffect);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("click", clickEffect);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>

      <style>{`
        body {
          cursor: auto;
        }

        /* Dot */
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: #1e90ff;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px #1e90ff;
        }

        /* Circle */
        .cursor-circle {
          width: 50px;
          height: 50px;
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          border-radius: 50%;

          background: rgba(0,140,255,0.08);
          border: 1px solid rgba(0,140,255,0.4);

          backdrop-filter: blur(14px);

          transform: translate(-50%, -50%);
          transition: background 0.2s ease;

          box-shadow:
            0 0 15px rgba(0,140,255,0.4),
            0 0 40px rgba(0,140,255,0.2);
        }

        /* Shockwave */
        .shockwave {
          position: fixed;
          width: 60px;
          height: 60px;
          border: 2px solid #1e90ff;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0.5);
          animation: shock 0.8s ease-out;
          z-index: 9997;
        }

        @keyframes shock {
          to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }

        /* Mobile off */
        @media (max-width: 768px) {
          .cursor-dot,
          .cursor-circle,
          .shockwave {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
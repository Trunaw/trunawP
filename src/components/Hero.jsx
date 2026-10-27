import { useEffect, useRef, useState } from "react";

// Echo layers sit behind the coin: [translateZ, translateY, scale]
const ECHOES = [
  [-24, 8, 0.98],
  [-46, 16, 0.96],
  [-68, 24, 0.94],
];
const MAX_TILT = 8; // degrees
const FLOAT_AMPLITUDE = 14; // px
const FLOAT_PERIOD = 4200; // ms

export default function Hero() {
  // Drop your photo at /public/avatar.jpg — falls back to an initial until then
  const [hasPhoto, setHasPhoto] = useState(true);
  const coinRef = useRef(null);
  const echoRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const coin = { x: 0, y: 0 };
    // Echoes follow the coin more lazily the further back they are
    const echoes = ECHOES.map(() => ({ x: 0, y: 0 }));

    const onPointerMove = (e) => {
      target.x = (e.clientY / window.innerHeight - 0.5) * -2 * MAX_TILT;
      target.y = (e.clientX / window.innerWidth - 0.5) * 2 * MAX_TILT;
    };
    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    let frame;
    const tick = (time) => {
      coin.x += (target.x - coin.x) * 0.08;
      coin.y += (target.y - coin.y) * 0.08;
      const floatY = Math.sin((time / FLOAT_PERIOD) * Math.PI * 2) * FLOAT_AMPLITUDE;

      if (coinRef.current) {
        coinRef.current.style.transform =
          `translateY(${floatY.toFixed(1)}px) rotateX(${coin.x.toFixed(2)}deg) rotateY(${coin.y.toFixed(2)}deg)`;
      }

      echoes.forEach((echo, i) => {
        const ease = 0.05 / (i + 1);
        echo.x += (coin.x - echo.x) * ease;
        echo.y += (coin.y - echo.y) * ease;
        const [z, y, scale] = ECHOES[i];
        const el = echoRefs.current[i];
        if (el) {
          el.style.transform =
            `translateZ(${z}px) translateY(${y}px) rotateX(${(echo.x - coin.x).toFixed(2)}deg) rotateY(${(echo.y - coin.y).toFixed(2)}deg) scale(${scale})`;
        }
      });

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__avatar">
          <div className="coin" ref={coinRef}>
            {ECHOES.map(([z, y, scale], i) => (
              <div
                key={i}
                ref={(el) => (echoRefs.current[i] = el)}
                className={`coin__echo coin__echo--${i + 1}`}
                aria-hidden="true"
                style={{ transform: `translateZ(${z}px) translateY(${y}px) scale(${scale})` }}
              />
            ))}
            <div className="coin__face">
              {hasPhoto ? (
                <img src="/avatar.jpg" alt="Trung" onError={() => setHasPhoto(false)} />
              ) : (
                <span className="coin__initial">T</span>
              )}
            </div>
          </div>
        </div>

        <h1 className="hero__headline">
          Mobile developer shipping apps with <span className="accent">Kotlin, Flutter, React &amp; TypeScript</span>
        </h1>

        <p className="hero__sub">
          I'm Trung — a final-year IT student at Deakin University, Melbourne, building
          production-style Android and cross-platform apps.
        </p>

        <a href="#about" className="hero__scroll" aria-label="Scroll down">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor">
            <rect x="1" y="3" width="24" height="3" rx="1.5" />
            <rect x="4" y="9" width="18" height="3" rx="1.5" />
            <rect x="7" y="15" width="12" height="3" rx="1.5" />
            <path d="M9.5 20.5h7L13 25z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

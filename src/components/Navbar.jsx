import { useEffect, useState } from "react";

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <div className="navbar__pill">
          <a href="#top" className="navbar__logo">
            <strong>TRUNG</strong>DEV
          </a>

          <div className="navbar__actions">
            {/* Point this at your resume file, e.g. /resume.pdf placed in /public */}
            <a href="/resume.pdf" className="btn navbar__btn-resume" download>
              Resume
            </a>
            <a href="#work" className="btn btn-primary">
              Work
            </a>
          </div>
        </div>

        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle color theme"
          onClick={onToggleTheme}
        >
          {theme === "dark" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

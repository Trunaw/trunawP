export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono">© {year} Trung. Built with React.</span>
        <a href="#top" className="footer__back">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

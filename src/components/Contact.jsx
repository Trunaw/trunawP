export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact__inner">
        <span className="eyebrow">Contact</span>
        <h2 className="section-heading">Let's work together</h2>
        <p className="section-sub">
          I'm looking for internship and graduate mobile developer roles in Australia.
          Feel free to reach out — happy to chat about Android, Flutter, or anything
          you're building.
        </p>

        <div className="contact__links">
          {/* Replace these placeholders with your real details */}
          <a href="mailto:your.email@example.com" className="btn btn-primary">
            trunghoang13082005@gmail.com
          </a>
          <a href="https://github.com/Trunaw" target="_blank" rel="noreferrer" className="btn btn-ghost">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="btn btn-ghost">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

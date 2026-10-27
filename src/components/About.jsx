const skillGroups = [
  {
    label: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "MVVM", "CameraX", "Flutter"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "Firebase", "Retrofit", "Room"],
  },
  {
    label: "Web",
    items: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git", "Docker", "Azure Fundamentals", "AWS Basics"],
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow">About</span>
        <h2 className="section-heading">Deakin IT graduate, mobile-first.</h2>
        <p className="section-sub">
          I'm completing a Bachelor of IT at Deakin University in Melbourne, with a focus
          on Android and cross-platform mobile development. Alongside coursework I build
          full projects end-to-end — from a Rego/OPA compliance engine to camera-driven
          Android apps — and I'm currently exploring cloud and DevOps fundamentals to
          round out my full-stack skills.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skills-card" key={group.label}>
              <h3 className="skills-card__label mono">{group.label}</h3>
              <ul className="skills-card__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

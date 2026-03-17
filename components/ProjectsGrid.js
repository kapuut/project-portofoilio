const projects = [
  {
    title: "Quiz App",
    desc: "Aplikasi kuis berbasis Android dengan Firebase Authentication dan Firestore.",
    stack: "Kotlin, Firebase",
  },
  {
    title: "Portfolio Website",
    desc: "Website portfolio personal dengan halaman terstruktur dan desain responsif.",
    stack: "Next.js, Bootstrap",
  },
  {
    title: "To-Do Planner",
    desc: "Aplikasi manajemen tugas dengan filter status dan local storage.",
    stack: "React, CSS",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="row g-3">
      {projects.map((project) => (
        <article className="col-12 col-md-6 col-lg-4" key={project.title}>
          <div className="card h-100 border-0 shadow-sm project-card">
            <div className="card-body">
              <h2 className="h5 card-title">{project.title}</h2>
              <p className="card-text text-secondary">{project.desc}</p>
              <span className="badge text-bg-light border">{project.stack}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
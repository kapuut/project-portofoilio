import dynamic from "next/dynamic";

const ProjectsGrid = dynamic(() => import("../../components/ProjectsGrid"), {
  loading: () => <p className="text-muted mt-3">Loading projects...</p>,
});

export default function Projects() {
  return (
    <main className="container py-5">
      <section aria-labelledby="projects-title">
        <h1 id="projects-title" className="mb-2">
          My Projects
        </h1>
        <p className="text-secondary mb-4">Contoh project yang pernah saya kerjakan.</p>
        <ProjectsGrid />
      </section>
    </main>
  );
}

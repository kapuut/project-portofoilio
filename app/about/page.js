import "../../styles/about.css";

export default function About() {
  return (
    <main className="container py-5">
      <section className="about" aria-labelledby="about-title">
        <h1 id="about-title">About Me</h1>
        <article>
          <p>
            Saya adalah mahasiswa IT yang tertarik pada pengembangan web, terutama frontend development.
            Fokus saya adalah membuat antarmuka yang bersih, responsif, dan mudah digunakan.
          </p>
          <p>
            Saat ini saya aktif belajar React dan Next.js sambil membangun project portfolio untuk
            meningkatkan skill UI, state management, dan testing.
          </p>
        </article>
      </section>
    </main>
  );
}

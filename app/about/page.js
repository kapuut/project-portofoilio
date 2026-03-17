import "../../styles/about.css";

export default function About() {
  return (
    <main className="container py-5">
      <section className="about" aria-labelledby="about-title">
        <h1 id="about-title">About Me</h1>
        <article>
          <p>
            Saya adalah mahasiswa di bidang Teknologi Informasi yang memiliki ketertarikan besar dalam pengembangan web,
             khususnya di sisi frontend. Saya berfokus pada pembuatan antarmuka yang tidak hanya menarik secara visual, 
             tetapi juga responsif, intuitif, dan memberikan pengalaman pengguna yang optimal.
          </p>
          <p>
            
            Saat ini, saya terus mengembangkan kemampuan dalam teknologi modern seperti React dan Next.js, 
            sambil aktif membangun berbagai project sebagai sarana eksplorasi dan peningkatan skill, 
            terutama dalam UI development, state management, serta testing aplikasi.
          </p>
        </article>
      </section>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="container py-5">
      <section className="hero-grid" aria-labelledby="hero-title">
        <article>
          <p className="hero-kicker">Frontend Developer</p>
          <h1 id="hero-title">Welcome to My Portfolio</h1>
          <p className="lead hero-text">
            Saya membangun website yang cepat, responsif, dan mudah digunakan. Silakan eksplor halaman
            project untuk melihat karya saya.
          </p>
          <div className="d-flex flex-wrap gap-2 mt-4">
            <a href="/projects" className="btn btn-primary">
              Lihat Projects
            </a>
            <a href="/contact" className="btn btn-outline-primary">
              Hubungi Saya
            </a>
          </div>
        </article>

        <figure className="hero-figure mb-0">
          <Image
            src="/ava 2.jpg"
            alt="Foto profil Putri"
            width={540}
            height={380}
            priority
            className="hero-image"
          />
        </figure>
      </section>

      <section className="mt-5" aria-labelledby="quick-highlight-title">
        <h2 id="quick-highlight-title" className="h4 mb-3">
          Highlight Portfolio
        </h2>
        <div className="row g-3">
          <article className="col-md-4">
            <div className="feature-card h-100">
              <h3 className="h6">Project Siap Tampil</h3>
              <p className="mb-0">Empat halaman utama sudah lengkap: Home, About, Projects, dan Contact.</p>
            </div>
          </article>
          <article className="col-md-4">
            <div className="feature-card h-100">
              <h3 className="h6">Form Contact Aktif</h3>
              <p className="mb-0">Validasi nama, email, dan pesan berjalan sebelum form dikirim.</p>
            </div>
          </article>
          <article className="col-md-4">
            <div className="feature-card h-100">
              <h3 className="h6">Mode Gelap Terpasang</h3>
              <p className="mb-0">Pengunjung bisa ganti tema terang atau gelap sesuai preferensi.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

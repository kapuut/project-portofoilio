import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio Mahasiswa IT",
  description: "Portfolio sederhana dengan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="light">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

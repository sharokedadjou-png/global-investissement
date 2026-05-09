import Image from "next/image";
import styles from "../global.module.css";
import TestimonialSection from "./testimonials";
import Navbar from "../components/Navbar";

const marketData = [
  "BTC +2.45%",
  "ETH +4.12%",
  "GOLD +1.08%",
  "NASDAQ +0.87%",
  "EUR/USD +0.32%",
  "S&P 500 +1.14%",
  "SOL +6.21%",
  "CAC 40 +0.73%",
];

const carouselImages = [
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
];

export default function GlobalInvestissementWebsite() {
  return (
    <div className="min-h-screen bg-[#031B5B] text-white overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Ticker Marché */}
      <div className="bg-[#02154A] border-b border-[#1E3A8A] overflow-hidden py-4">
        <div className={`${styles.ticker} flex gap-16 whitespace-nowrap text-[#D4A63A] font-semibold text-lg px-8 w-max`}>
          {marketData.concat(marketData).map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      {/* Carousel d'Images */}
      <section className="relative overflow-hidden bg-[#02154A] py-8">
        <div className="flex animate-pulse">
          <div className="flex gap-4 carousel-scroll" style={{ width: '200%' }}>
            {carouselImages.concat(carouselImages).map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden border border-[#1E3A8A]">
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  width={320}
                  height={192}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay avec titre */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Investissez dans <span className="text-[#D4A63A]">l'Avenir</span>
            </h2>
            <p className="text-gray-200 text-xl max-w-2xl mx-auto">
              Découvrez nos opportunités d'investissement dans la finance, la technologie et l'immobilier
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Texte */}
        <div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Nous investissons dans
            <span className="text-[#D4A63A] block mt-4">
              l’avenir de l’Afrique.
            </span>
          </h2>

          <p className="text-gray-300 text-xl mt-8 leading-9 max-w-xl">
            GLOBAL INVESTISSEMENT accompagne des projets innovants dans
            la finance, les nouvelles technologies, la crypto,
            l’immobilier et les solutions numériques modernes.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-6 shadow-xl">
              <p className="text-gray-400 text-sm">
                Capital investi
              </p>

              <h3 className="text-4xl font-bold text-[#D4A63A] mt-2">
                $12M+
              </h3>
            </div>

            <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-6 shadow-xl">
              <p className="text-gray-400 text-sm">
                Projets financés
              </p>

              <h3 className="text-4xl font-bold text-[#D4A63A] mt-2">
                250+
              </h3>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://wa.me/33744296599?text=Bonjour%20Global%20Investissement%2C%20je%20souhaite%20investir" target="_blank" rel="noreferrer">
              <button className="bg-[#D4A63A] text-[#031B5B] px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform">
                Découvrir nos investissements
              </button>
            </a>
          </div>
        </div>

        {/* Image principale */}
        <div className="relative">

          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            alt="Investissement"
            width={700}
            height={500}
            className="rounded-[32px] object-cover shadow-2xl border border-[#1E3A8A]"
          />

          <div className="absolute -bottom-8 -left-8 bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-6 shadow-2xl">
            <p className="text-gray-400 text-sm">
              Croissance annuelle
            </p>

            <h3 className="text-4xl font-bold text-[#D4A63A] mt-2">
              +28%
            </h3>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-24 bg-[#02154A]">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Nos <span className="text-[#D4A63A]">Investissements</span>
          </h2>

          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Découvrez les domaines dans lesquels notre entreprise investit.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* Finance */}
            <a href="/pricing#finance" className="block">
              <div className="bg-[#08246D] p-6 rounded-3xl border border-[#1E3A8A] hover:scale-105 transition-transform shadow-xl">

                <Image
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop"
                  alt="Finance"
                  width={500}
                  height={300}
                  className="rounded-2xl h-56 w-full object-cover"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Finance & Trading
                </h3>

                <p className="text-gray-300 mt-4 leading-8">
                  Nous investissons dans les marchés financiers et les solutions de trading moderne.
                </p>

                <div className="mt-6">
                  <button className="bg-[#D4A63A] text-[#031B5B] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                    Voir les tarifs
                  </button>
                </div>
              </div>
            </a>

            {/* Technologie */}
            <a href="/pricing#technologie" className="block">
              <div className="bg-[#08246D] p-6 rounded-3xl border border-[#1E3A8A] hover:scale-105 transition-transform shadow-xl">

                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
                  alt="Technologie"
                  width={500}
                  height={300}
                  className="rounded-2xl h-56 w-full object-cover"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Technologie
                </h3>

                <p className="text-gray-300 mt-4 leading-8">
                  Développement de plateformes numériques et solutions innovantes.
                </p>

                <div className="mt-6">
                  <button className="bg-[#D4A63A] text-[#031B5B] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                    Voir les tarifs
                  </button>
                </div>
              </div>
            </a>

            {/* Immobilier */}
            <a href="/pricing#immobilier" className="block">
              <div className="bg-[#08246D] p-6 rounded-3xl border border-[#1E3A8A] hover:scale-105 transition-transform shadow-xl">

                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                  alt="Immobilier"
                  width={500}
                  height={300}
                  className="rounded-2xl h-56 w-full object-cover"
                />

                <h3 className="text-2xl font-bold mt-6">
                  Immobilier & Crypto
                </h3>

                <p className="text-gray-300 mt-4 leading-8">
                  Investissements stratégiques dans l'immobilier et les actifs numériques.
                </p>

                <div className="mt-6">
                  <button className="bg-[#D4A63A] text-[#031B5B] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                    Voir les tarifs
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-5xl font-bold leading-tight">
            Une entreprise moderne et ambitieuse.
          </h2>

          <p className="text-gray-300 text-xl mt-8 leading-9">
            GLOBAL INVESTISSEMENT accompagne le développement économique à travers des investissements stratégiques et des projets innovants.
          </p>
        </div>

        <div className="bg-[#08246D] rounded-[32px] p-10 border border-[#1E3A8A] shadow-2xl">

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-2xl font-bold">
                ✓
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Sécurité avancée
                </h3>

                <p className="text-gray-400">
                  Protection des données et investissements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-2xl font-bold">
                ⚡
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Innovation
                </h3>

                <p className="text-gray-400">
                  Technologies modernes et solutions digitales.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-2xl font-bold">
                🌍
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Présence internationale
                </h3>

                <p className="text-gray-400">
                  Une vision tournée vers le futur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection isFullPage={false} />

      {/* Footer */}
      <footer id="contact" className="bg-[#02154A] border-t border-[#1E3A8A] py-10 px-8 text-center">

        <div className="flex justify-center mb-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <h3 className="text-3xl font-bold">
          GLOBAL INVESTISSEMENT
        </h3>

        <p className="text-gray-400 mt-4 text-lg">
          Investir aujourd’hui, construire demain.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-gray-300">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Global Investissement. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Navbar from "../components/Navbar";

const investmentDomains = [
  {
    id: 1,
    title: "Finance & Trading",
    description: "Nous investissons dans les marchés financiers traditionnels et modernes, incluant le trading algorithmique, les fonds d'investissement et les solutions fintech innovantes.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Trading haute fréquence",
      "Gestion de portefeuille",
      "Analyse de marché avancée",
      "Solutions fintech"
    ],
    stats: {
      invested: "$5.2M",
      projects: "45",
      growth: "+15.3%"
    }
  },
  {
    id: 2,
    title: "Technologie",
    description: "Développement et investissement dans les technologies de pointe : IA, blockchain, cloud computing, et solutions numériques transformant l'économie africaine.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Intelligence Artificielle",
      "Blockchain & Crypto",
      "Cloud Computing",
      "IoT & Digitalisation"
    ],
    stats: {
      invested: "$4.8M",
      projects: "38",
      growth: "+22.1%"
    }
  },
  {
    id: 3,
    title: "Immobilier & Crypto",
    description: "Investissements stratégiques dans l'immobilier commercial et résidentiel, combinés aux actifs numériques et cryptomonnaies pour une diversification optimale.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Immobilier commercial",
      "Crypto-investissements",
      "NFT & Tokenisation",
      "Real Estate Tech"
    ],
    stats: {
      invested: "$3.5M",
      projects: "32",
      growth: "+18.7%"
    }
  }
];

export default function InvestissementsPage() {
  return (
    <div className="min-h-screen bg-[#031B5B] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Stats Overview */}
      <section className="px-8 py-16 bg-[#02154A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-5xl font-bold text-[#D4A63A]">$13.5M</h3>
              <p className="text-gray-300 mt-4 text-lg">Capital Total Investi</p>
            </div>

            <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-5xl font-bold text-[#D4A63A]">115+</h3>
              <p className="text-gray-300 mt-4 text-lg">Projets Accompagnés</p>
            </div>

            <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-5xl font-bold text-[#D4A63A]">+18.7%</h3>
              <p className="text-gray-300 mt-4 text-lg">Croissance Moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Domains */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="space-y-24">

          {investmentDomains.map((domain, index) => (
            <div key={domain.id} className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-2xl font-bold">
                    {domain.id}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">{domain.title}</h2>
                </div>

                <p className="text-gray-300 text-xl leading-9 mb-8">
                  {domain.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {domain.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-sm font-bold">
                        ✓
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-4 text-center">
                    <p className="text-[#D4A63A] font-bold text-lg">{domain.stats.invested}</p>
                    <p className="text-gray-400 text-sm">Investi</p>
                  </div>

                  <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-4 text-center">
                    <p className="text-[#D4A63A] font-bold text-lg">{domain.stats.projects}</p>
                    <p className="text-gray-400 text-sm">Projets</p>
                  </div>

                  <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-4 text-center">
                    <p className="text-[#D4A63A] font-bold text-lg">{domain.stats.growth}</p>
                    <p className="text-gray-400 text-sm">Croissance</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="relative">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    width={600}
                    height={400}
                    className="rounded-[32px] object-cover shadow-2xl border border-[#1E3A8A] w-full"
                  />

                  <div className="absolute -bottom-6 -right-6 bg-[#D4A63A] text-[#031B5B] px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
                    {domain.stats.growth}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-24 bg-[#02154A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Prêt à <span className="text-[#D4A63A]">Investir</span> avec Nous ?
          </h2>

          <p className="text-gray-300 text-xl mb-12 leading-relaxed">
            Rejoignez notre réseau d'investisseurs et participez au développement
            économique de l'Afrique à travers des opportunités d'investissement exclusives.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#D4A63A] text-[#031B5B] px-10 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition-transform shadow-xl">
              Contactez-nous
            </button>

            <button className="border-2 border-[#D4A63A] text-[#D4A63A] px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-[#D4A63A] hover:text-[#031B5B] transition-all shadow-xl">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02154A] border-t border-[#1E3A8A] py-10 px-8 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <h3 className="text-3xl font-bold">GLOBAL INVESTISSEMENT</h3>

        <p className="text-gray-400 mt-4 text-lg">
          Investir aujourd'hui, construire demain.
        </p>

        <div className="flex justify-center gap-6 mt-8 text-gray-300">
          <a href="#" className="hover:text-[#D4A63A] transition-colors">Facebook</a>
          <a href="#" className="hover:text-[#D4A63A] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#D4A63A] transition-colors">WhatsApp</a>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Global Investissement. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
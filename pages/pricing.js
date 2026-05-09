import Navbar from "../components/Navbar";

const whatsappBase = "https://wa.me/33744296599?text=";
const investmentAmounts = [30, 40, 70, 100, 230, 300, 500, 1000, 2000];

const investmentDomains = [
  {
    id: "finance",
    title: "Finance & Trading",
    description: "Tarifs pour investir dans les marchés financiers, le trading et les opportunités boursières.",
    subtitle: "Tarifs d'investissement précis pour votre stratégie financière.",
  },
  {
    id: "technologie",
    title: "Technologie",
    description: "Tarifs pour investir dans les solutions numériques, l'IA, la blockchain et les start-ups tech.",
    subtitle: "Choisissez un montant pour démarrer votre investissement technologique.",
  },
  {
    id: "immobilier",
    title: "Immobilier & Crypto",
    description: "Tarifs pour les actifs immobiliers et les cryptomonnaies, pour une diversification solide.",
    subtitle: "Investissez dans l'immobilier et les actifs numériques avec un tarif clair.",
  },
];

const formatWhatsAppLink = (domain, amount) => {
  const message = `Bonjour Global Investissement, je souhaite investir ${amount}$ dans ${domain}.`;
  return `${whatsappBase}${encodeURIComponent(message)}`;
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#031B5B] text-white">
      <Navbar />

      <section className="bg-[#02154A] border-b border-[#1E3A8A] py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">
            Tarifs d'<span className="text-[#D4A63A]">Investissement</span>
          </h1>
          <p className="text-gray-300 text-xl">
            Choisissez un montant d'investissement précis et contactez-nous directement sur WhatsApp.
          </p>
        </div>
      </section>

      {investmentDomains.map((domain) => (
        <section key={domain.id} id={domain.id} className="px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">{domain.title}</h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">{domain.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {investmentAmounts.map((amount) => (
                <div key={`${domain.id}-${amount}`} className="rounded-3xl border border-[#1E3A8A] bg-[#08246D] p-8 shadow-xl transition-transform hover:scale-105">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Tarif d'investissement</p>
                  <h3 className="text-5xl font-bold text-[#D4A63A] mb-4">${amount}</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">{domain.subtitle}</p>

                  <a href={formatWhatsAppLink(domain.title, amount)} target="_blank" rel="noreferrer">
                    <button className="w-full bg-[#D4A63A] text-[#031B5B] py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                      Investir
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-8 py-24 bg-[#02154A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Prêt à investir ?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Utilisez le numéro WhatsApp +33744296599 pour démarrer votre investissement aujourd'hui.
          </p>
          <a href="https://wa.me/33744296599?text=Bonjour%20Global%20Investissement%2C%20je%20souhaite%20investir" target="_blank" rel="noreferrer">
            <button className="bg-[#D4A63A] text-[#031B5B] px-12 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl">
              Contacter sur WhatsApp
            </button>
          </a>
        </div>
      </section>

      <footer className="bg-[#02154A] border-t border-[#1E3A8A] py-10 px-8 text-center">
        <p className="text-gray-400">© 2026 Global Investissement. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

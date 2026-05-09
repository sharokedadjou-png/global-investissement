import Image from "next/image";
import Navbar from "../components/Navbar";

const successStories = [
  {
    id: 1,
    title: "De Zéro à 6 Chiffres: L'histoire de Moussa",
    author: "Moussa Diallo",
    country: "Sénégal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    date: "2024-02-15",
    readTime: "5 min",
    excerpt: "Comment j'ai transformé $1,000 en $100,000 en 18 mois grâce à la stratégie d'investissement diversifiée de Global Investissement.",
    content: `Lorsque j'ai découvert Global Investissement, j'avais peu de connaissances en investissement. J'ai commencé modestement avec $1,000, un montant qui me semblait énorme à l'époque.

Les premiers mois ont été difficiles, mais j'ai suivi les recommandations de mon gestionnaire de portefeuille. J'ai misé sur une diversification intelligente : 40% en trading automatisé, 30% en immobilier, 20% en crypto et 10% en obligations.

Au bout de 6 mois, mes gains ont dépassé mon investissement initial. Cela m'a motivé à augmenter mon capital. Aujourd'hui, 18 mois plus tard, je gère un portefeuille de plus de $100,000 avec un rendement moyen de 24% par an.

Global Investissement m'a non seulement enrichi financièrement, mais m'a aussi appris les principes fondamentaux de la gestion de patrimoine.`,
    gains: "$99,000",
    roi: "9,900%",
    duration: "18 mois"
  },
  {
    id: 2,
    title: "Une Mère Célibataire Réalise Son Rêve",
    author: "Fatima Toure",
    country: "Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop",
    date: "2024-02-10",
    readTime: "6 min",
    excerpt: "Comment j'ai économisé pour la scolarité de mes enfants en investissant intelligemment et en générando des revenus passifs.",
    content: `En tant que mère célibataire, j'ai toujours eu du mal à joindre les deux bouts. Mais j'ai réalisé que je devais changer ma mentalité concernant l'argent.

Avec l'aide de Global Investissement, j'ai commencé à investir $500 chaque mois, même si c'était serré. En 2 ans, j'ai accumulé des revenus suffisants non seulement pour payer la scolarité de mes deux enfants, mais aussi pour créer un fonds d'urgence.

Le meilleur, c'est que mes gains continuent de croître sans effort de ma part. Global Investissement gère tout automatiquement.`,
    gains: "$25,000",
    roi: "500%",
    duration: "2 ans"
  },
  {
    id: 3,
    title: "Entrepreneur Prospère: Diversifier Ses Revenus",
    author: "Jean-Pierre Nkomo",
    country: "Cameroun",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    date: "2024-02-05",
    readTime: "7 min",
    excerpt: "Comment un jeune entrepreneur a utilisé Global Investissement pour créer un flux de revenus passifs tout en développant son business.",
    content: `En tant que chef d'entreprise, j'ai toujours su qu'on ne peut pas dépendre d'une seule source de revenus. Global Investissement m'a permis de créer un flux de revenus passifs robuste.

Chaque mois, je réinvestis 30% de mes gains professionnels dans des portefeuilles diversifiés. Après 3 ans, j'ai généré des revenus passifs suffisants pour que je puisse prendre du recul et me concentrer sur la croissance de mon entreprise.

C'est une stratégie gagnante-gagnante: mon business grandit et mon portefeuille aussi.`,
    gains: "$150,000",
    roi: "3,000%",
    duration: "3 ans"
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-[#031B5B] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Success Stories Grid */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <Image
                  src={story.image}
                  alt={story.title}
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-2xl border border-[#1E3A8A] w-full"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] font-bold text-lg">
                    {story.id}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{story.title}</h2>
                    <p className="text-gray-400">{story.author} • {story.country}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">{story.excerpt}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-4 text-center">
                    <p className="text-[#D4A63A] font-bold text-lg">{story.gains}</p>
                    <p className="text-gray-400 text-sm">Gains Totaux</p>
                  </div>

                  <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-4 text-center">
                    <p className="text-[#D4A63A] font-bold text-lg">{story.roi}</p>
                    <p className="text-gray-400 text-sm">ROI</p>
                  </div>

                  <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-4 text-center">
                    <p className="text-[#D4A63A] font-bold text-lg">{story.duration}</p>
                    <p className="text-gray-400 text-sm">Durée</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{story.content}</p>

                <button className="bg-[#D4A63A] text-[#031B5B] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                  Suivre Ce Modèle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-[#02154A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Votre Histoire de <span className="text-[#D4A63A]">Succès</span> Commence Ici
          </h2>

          <p className="text-gray-300 text-xl mb-8">
            Rejoignez des milliers de clients qui ont déjà transformé leurs finances.
            Commencez avec aussi peu que $100.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#D4A63A] text-[#031B5B] px-12 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl">
              Débuter Maintenant
            </button>

            <button className="border-2 border-[#D4A63A] text-[#D4A63A] px-12 py-4 rounded-2xl text-lg font-semibold hover:bg-[#D4A63A] hover:text-[#031B5B] transition-all shadow-xl">
              Consulter un Conseiller
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02154A] border-t border-[#1E3A8A] py-10 px-8 text-center">
        <p className="text-gray-400">© 2026 Global Investissement. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
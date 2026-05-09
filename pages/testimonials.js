import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";

const testimonials = [
  {
    id: 1,
    name: "Moussa Diallo",
    country: "Sénégal",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Investir avec Global Investissement a changé ma vie. Retour sur investissement exceptionnel en 6 mois!",
    amount: "$5,000",
    date: "Il y a 2 mois",
    verified: true
  },
  {
    id: 2,
    name: "Fatima Toure",
    country: "Côte d'Ivoire",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Excellent service, équipe très professionnelle et transparente. Je recommande vivement!",
    amount: "$8,500",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: 3,
    name: "Jean-Pierre Nkomo",
    country: "Cameroun",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Les rendements sont vraiment impressionnants. Plateforme sécurisée et fiable.",
    amount: "$12,000",
    date: "Il y a 3 semaines",
    verified: true
  },
  {
    id: 4,
    name: "Aïcha Diop",
    country: "Mali",
    image: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    text: "Parfait! Reçu mes gains sans problème. Service clientèle réactif 24/7.",
    amount: "$4,200",
    date: "Il y a 1 semaine",
    verified: true
  },
  {
    id: 5,
    name: "Kofi Mensah",
    country: "Ghana",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "Investment incroyable! Meilleure décision financière que j'ai jamais prise.",
    amount: "$15,000",
    date: "Il y a 10 jours",
    verified: true
  },
  {
    id: 6,
    name: "Marie Bouvier",
    country: "Bénin",
    image: "https://i.pravatar.cc/150?img=49",
    rating: 5,
    text: "Très satisfaite des résultats. Équipe compétente et attentive à nos besoins.",
    amount: "$3,800",
    date: "Il y a 5 jours",
    verified: true
  },
  {
    id: 7,
    name: "Ahmed Hassan",
    country: "Burkina Faso",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "Plateforme fiable. J'ai investi et reçu mes rendements en temps et en heure.",
    amount: "$6,500",
    date: "Il y a 2 semaines",
    verified: true
  },
  {
    id: 8,
    name: "Nia Okonkwo",
    country: "Nigeria",
    image: "https://i.pravatar.cc/150?img=50",
    rating: 5,
    text: "Incroyable! Mes revenus passifs ont augmenté significativement. Très recommandé!",
    amount: "$9,000",
    date: "Il y a 3 jours",
    verified: true
  },
  {
    id: 9,
    name: "Pierre Lemoine",
    country: "Togo",
    image: "https://i.pravatar.cc/150?img=22",
    rating: 5,
    text: "Les meilleurs rendements du marché. Sécurité et transparence garanties.",
    amount: "$7,200",
    date: "Il y a 1 semaine",
    verified: true
  },
  {
    id: 10,
    name: "Chloé Martin",
    country: "Guinée",
    image: "https://i.pravatar.cc/150?img=51",
    rating: 5,
    text: "Service exceptionnel, retrait facile et rapide. Je suis conquise!",
    amount: "$11,000",
    date: "Il y a 4 jours",
    verified: true
  },
  {
    id: 11,
    name: "Ibrahim Traore",
    country: "Mauritanie",
    image: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    text: "Bonne plateforme d'investissement. Très intéressant pour démarrer.",
    amount: "$2,500",
    date: "Il y a 9 jours",
    verified: true
  },
  {
    id: 12,
    name: "Sophia Dupont",
    country: "Sénégal",
    image: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    text: "Parfait pour construire sa richesse. Je rejoindrai mes amis bientôt!",
    amount: "$5,700",
    date: "Il y a 6 jours",
    verified: true
  },
];

// Générer plus de témoignages
const generateMoreTestimonials = () => {
  const firstNames = ["Ahmed", "Fatima", "Mohammed", "Aïcha", "Ibrahim", "Mariam", "Kofi", "Amara", "Youssef", "Leila", "Ndlovu", "Zainab"];
  const lastNames = ["Diallo", "Toure", "Diop", "Ba", "Sow", "Kone", "Kamara", "Traore", "Ndiaye", "Sanda", "Okoro", "Hassan"];
  const countries = ["Sénégal", "Mali", "Côte d'Ivoire", "Cameroun", "Ghana", "Nigeria", "Bénin", "Togo", "Burkina Faso", "Guinée", "Niger", "Mauritanie"];
  const messages = [
    "Investissement fantastique! Résultats dépassent mes attentes.",
    "Plateforme fiable et sécurisée. Je recommande sans hésitation.",
    "Les rendements sont exceptionnels. Très satisfait!",
    "Service clientèle impeccable. Équipe très professionnelle.",
    "Retrait rapide et sans complications. Excellent!",
    "Meilleure décision d'investissement de ma vie.",
    "Transparence totale. J'aime cette plateforme!",
    "Gains réguliers et fiables. Parfait!",
    "Très impressionné par les résultats. Continuerai à investir.",
    "Plateforme de confiance. Sûr et rentable!",
    "Augmentation de revenus significative. Merci!",
    "Expérience positive du début à la fin.",
    "Investissement intelligent pour l'avenir.",
    "Confiance et professionnalisme au rendez-vous.",
    "Reçu mes gains sans délai. Très bon service.",
    "Portfolio en croissance constante. Satisfait!",
    "Interface facile d'utilisation. Investissement fluide.",
    "Équipe réactive et à l'écoute. Bravo!",
    "Rendements constants et prévisibles.",
    "Plateforme révolutionnaire. Changement de vie!",
  ];

  const testimonialsList = [];
  for (let i = 13; i < 50; i++) {
    testimonialsList.push({
      id: i,
      name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
      country: countries[i % countries.length],
      image: `https://i.pravatar.cc/150?img=${i}`,
      rating: 4 + Math.floor(Math.random() * 2),
      text: messages[i % messages.length],
      amount: `$${Math.floor(Math.random() * 20000 + 1000)}`,
      date: `Il y a ${Math.floor(Math.random() * 60)} jours`,
      verified: Math.random() > 0.1
    });
  }

  return [...testimonials, ...testimonialsList];
};

const allTestimonials = generateMoreTestimonials();

export default function TestimonialSection({ isFullPage = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    investmentAmount: "",
    message: "",
    rating: 5,
  });

  const [submitted, setSubmitted] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(isFullPage ? allTestimonials.length : 6);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Témoignage soumis:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        investmentAmount: "",
        message: "",
        rating: 5,
      });
      setSubmitted(false);
    }, 2000);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-[#D4A63A]" : "text-gray-600"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      {isFullPage && <Navbar />}

      {!isFullPage && (
        <section className="px-8 py-24 bg-gradient-to-b from-[#031B5B] to-[#02154A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#D4A63A]">+1000 Clients Heureux</span> Nous Font Confiance
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Découvrez les témoignages de nos clients satisfaits qui ont transformé leurs finances avec Global Investissement
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {allTestimonials.slice(0, displayedCount).map((testimonial) => (
                <div key={testimonial.id} className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.country}</p>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        ✓ Vérifié
                      </div>
                    )}
                  </div>

                  {renderStars(testimonial.rating)}

                  <p className="text-gray-300 my-4 italic">"{testimonial.text}"</p>

                  <div className="flex justify-between items-center pt-4 border-t border-[#1E3A8A]">
                    <span className="text-[#D4A63A] font-bold">{testimonial.amount}</span>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {displayedCount < allTestimonials.length && (
              <div className="text-center">
                <button
                  onClick={() => setDisplayedCount(allTestimonials.length)}
                  className="bg-[#D4A63A] text-[#031B5B] px-12 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl"
                >
                  Voir tous les {allTestimonials.length} témoignages
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonial Form Section */}
      <section className="px-8 py-24 bg-[#02154A]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Partagez Votre <span className="text-[#D4A63A]">Expérience</span>
            </h2>
            <p className="text-gray-300 text-xl">
              Votre témoignage aide nos nouveaux investisseurs à prendre confiance. Merci de partager votre histoire!
            </p>
          </div>

          <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Merci!</h3>
                <p className="text-gray-300">Votre témoignage a été reçu avec succès. Notre équipe le vérifiera et le publiera bientôt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="+229 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Pays</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="Votre pays"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Montant investi</label>
                    <input
                      type="text"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="ex: $5,000"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Note (étoiles)</label>
                    <select
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 étoiles)</option>
                      <option value="4">⭐⭐⭐⭐ (4 étoiles)</option>
                      <option value="3">⭐⭐⭐ (3 étoiles)</option>
                      <option value="2">⭐⭐ (2 étoiles)</option>
                      <option value="1">⭐ (1 étoile)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Votre témoignage</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                    placeholder="Décrivez votre expérience avec Global Investissement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A63A] text-[#031B5B] py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                >
                  Envoyer mon témoignage
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
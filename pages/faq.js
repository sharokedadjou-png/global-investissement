import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const faqData = [
  {
    id: 1,
    question: "Comment débuter l'investissement?",
    answer: "C'est simple! Inscrivez-vous sur notre plateforme, vérifiez votre identité, et commencez à investir avec un montant de votre choix. Notre équipe vous guidera à chaque étape."
  },
  {
    id: 2,
    question: "Quel est le montant minimum d'investissement?",
    answer: "Le montant minimum est de $100. Vous pouvez commencer petit et augmenter vos investissements au fur et à mesure."
  },
  {
    id: 3,
    question: "Comment recevoir mes gains?",
    answer: "Vous pouvez retirer vos gains à tout moment via virement bancaire, Mobile Money (MTN, Orange), ou cryptomonnaies."
  },
  {
    id: 4,
    question: "Y a-t-il des frais cachés?",
    answer: "Non! Nous sommes totalement transparents. Tous les frais sont clairement affichés avant chaque transaction."
  },
  {
    id: 5,
    question: "Comment la plateforme est-elle sécurisée?",
    answer: "Nous utilisons le chiffrement SSL 256-bit, l'authentification 2FA, et nos fonds sont assurés. Votre sécurité est notre priorité."
  },
  {
    id: 6,
    question: "Quel est le rendement moyen?",
    answer: "Les rendements varient selon le type d'investissement, mais nos clients gagnent en moyenne 15-28% par an."
  },
  {
    id: 7,
    question: "Puis-je retirer mon investissement à tout moment?",
    answer: "Oui! Vous pouvez retirer votre capital et vos gains quand vous le souhaitez, sans pénalité."
  },
  {
    id: 8,
    question: "Comment fonctionne le trading automatisé?",
    answer: "Notre IA analyse les marchés 24/7 et exécute les meilleurs trades pour maximiser vos rendements."
  },
  {
    id: 9,
    question: "Y a-t-il un support client?",
    answer: "Oui! Nous avons une équipe support disponible 24/7 en français, anglais et d'autres langues."
  },
  {
    id: 10,
    question: "Est-ce que Global Investissement est réglementé?",
    answer: "Oui, nous sommes réglementés par les autorités financières internationales et respectons toutes les normes KYC."
  },
];

const stats = [
  { label: "Clients Actifs", value: "5,240+", icon: "👥" },
  { label: "Capitaux Gérés", value: "$125M+", icon: "💰" },
  { label: "Transactions/jour", value: "1,500+", icon: "📊" },
  { label: "Uptime", value: "99.9%", icon: "⚡" },
];

export default function FaqAndSupport() {
  const [activeId, setActiveId] = useState(1);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Message de contact:", contactForm);
    setSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#031B5B] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Stats */}
      <section className="px-8 py-16 bg-[#02154A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-6 text-center shadow-xl">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-3xl font-bold text-[#D4A63A] mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#0B2C80] transition-colors"
              >
                <span className="text-xl font-semibold text-white text-left">{faq.question}</span>
                <div className={`text-[#D4A63A] text-2xl transform transition-transform ${activeId === faq.id ? "rotate-180" : ""}`}>
                  ▼
                </div>
              </button>

              {activeId === faq.id && (
                <div className="px-8 py-6 bg-[#0B2C80] border-t border-[#1E3A8A]">
                  <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-24 bg-[#02154A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Contactez Notre <span className="text-[#D4A63A]">Support</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">WhatsApp</h3>
                    <a href="https://wa.me/33744296599" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#D4A63A] transition-colors">
                      +33744296599
                    </a>
                    <p className="text-gray-400">24h/24 - 7j/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-xl">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-gray-400">support@globalinv.com</p>
                    <p className="text-gray-400">Réponse en moins de 2h</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Chat en Direct</h3>
                    <p className="text-gray-400">Disponible sur notre plateforme</p>
                    <p className="text-gray-400">Support instantané</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#08246D] border border-[#1E3A8A] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4A63A] flex items-center justify-center text-[#031B5B] text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Adresse</h3>
                    <p className="text-gray-400">Cotonou, Bénin</p>
                    <p className="text-gray-400">Afrique de l'Ouest</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#08246D] border border-[#1E3A8A] rounded-3xl p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Envoyé!</h3>
                  <p className="text-gray-300">Notre équipe vous contactera bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
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
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      required
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                      rows="4"
                      className="w-full bg-[#031B5B] border border-[#1E3A8A] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4A63A]"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4A63A] text-[#031B5B] py-3 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                  >
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
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
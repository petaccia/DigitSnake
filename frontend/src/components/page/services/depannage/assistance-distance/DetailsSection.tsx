"use client";

import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiZap, FiClock, FiDollarSign, FiHeadphones } from "react-icons/fi";

export default function DetailsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Détails de l'Assistance à Distance
          </h2>
          <div className="w-24 h-1 bg-[#1abc9c] mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Carte principale */}
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-[#1abc9c]/30 mb-8 relative overflow-hidden"
          >
            {/* Effet de dégradé */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1abc9c]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-[#1abc9c] flex items-center gap-2">
                  <FiZap className="text-[#1abc9c]" />
                  Assistance à Distance Premium
                </h3>
                <div className="px-4 py-2 bg-[#1abc9c]/80 text-white rounded-full font-bold text-lg">
                  À partir de <span className="text-white">30€ HT/demi-heure</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg max-w-3xl">
                Notre service d'assistance à distance vous permet de résoudre vos problèmes informatiques sans avoir à vous déplacer ou à recevoir un technicien chez vous, grâce à une connexion sécurisée.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#1abc9c] flex items-center gap-2">
                    <FiCheck className="text-[#1abc9c]" />
                    Services inclus
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Diagnostic via connexion sécurisée",
                      "Résolution de problèmes logiciels",
                      "Conseils en direct par chat ou vocal",
                      "Mise à jour de logiciels",
                      "Suppression de virus et malwares",
                      "Configuration de paramètres système"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-[#1abc9c]/10 p-1 rounded-full mr-3 mt-0.5">
                          <FiCheck className="text-[#1abc9c] text-sm" />
                        </div>
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#1abc9c] flex items-center gap-2">
                    <FiPlus className="text-[#1abc9c]" />
                    Options supplémentaires
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { text: "Forfait assistance mensuel (5 interventions)", price: "+120€ HT" },
                      { text: "Support prioritaire (réponse en 1h)", price: "+20€ HT/intervention" },
                      { text: "Formation à distance personnalisée", price: "+40€ HT/heure" },
                      { text: "Configuration avancée de logiciels", price: "+50€ HT" },
                      { text: "Sauvegarde à distance des données", price: "+60€ HT" }
                    ].map((option, index) => (
                      <li key={index} className="flex justify-between items-start">
                        <div className="flex">
                          <div className="bg-[#1abc9c]/10 p-1 rounded-full mr-3 mt-0.5">
                            <FiPlus className="text-[#1abc9c] text-sm" />
                          </div>
                          <span className="text-gray-300">{option.text}</span>
                        </div>
                        <span className="bg-[#1abc9c]/30 px-3 py-1 rounded-full text-white font-medium">
                          {option.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Pourquoi choisir notre service */}
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-[#1abc9c]/30 mb-8 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1abc9c]/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#1abc9c] flex items-center gap-2">
                <FiHeadphones className="text-[#1abc9c]" />
                Pourquoi Choisir Notre Assistance à Distance ?
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg max-w-3xl">
                Nous offrons une solution pratique et immédiate pour résoudre vos problèmes informatiques sans frais de déplacement, directement depuis le confort de votre domicile.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    icon: <FiZap className="text-2xl" />, 
                    title: "Réponse Rapide", 
                    desc: "Intervention immédiate pour résoudre vos problèmes sans attendre." 
                  },
                  { 
                    icon: <FiDollarSign className="text-2xl" />, 
                    title: "Économique", 
                    desc: "Pas de frais de déplacement, des tarifs adaptés à vos besoins." 
                  },
                  { 
                    icon: <FiHeadphones className="text-2xl" />, 
                    title: "Support Personnalisé", 
                    desc: "Accompagnement sur mesure pour répondre à vos questions spécifiques." 
                  },
                  { 
                    icon: <FiClock className="text-2xl" />, 
                    title: "Disponibilité Flexible", 
                    desc: "Assistance planifiée selon vos horaires pour plus de commodité." 
                  },
                  { 
                    icon: <FiCheck className="text-2xl" />, 
                    title: "Sécurité Garantie", 
                    desc: "Connexion sécurisée pour protéger vos données pendant l'intervention." 
                  },
                  { 
                    icon: <FiPlus className="text-2xl" />, 
                    title: "Solutions Durables", 
                    desc: "Conseils pour éviter les problèmes futurs et optimiser votre système." 
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#1abc9c] transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1abc9c]/10 flex items-center justify-center mb-4 text-[#1abc9c]">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Note importante */}
          <motion.div 
            variants={item}
            className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 p-6 rounded-2xl border border-amber-600/50"
          >
            <h3 className="text-xl font-bold mb-3 text-amber-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Note Importante (Travail Solo)
            </h3>
            <p className="text-amber-100">
              En tant que travailleur indépendant, je m'engage à offrir une attention exclusive à chaque projet. Cependant, je travaille uniquement pendant les jours ouvrés, sans disponibilité 24/7 ou pour des urgences soir/week-end. Les délais sont garantis en jours ouvrés uniquement pour assurer une qualité optimale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

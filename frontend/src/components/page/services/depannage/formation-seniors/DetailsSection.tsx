"use client";

import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiZap, FiClock, FiDollarSign, FiUsers } from "react-icons/fi";

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
            Détails de la Formation pour Seniors
          </h2>
          <div className="w-24 h-1 bg-[#9b59b6] mx-auto rounded-full"></div>
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
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-[#9b59b6]/30 mb-8 relative overflow-hidden"
          >
            {/* Effet de dégradé */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b59b6]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-[#9b59b6] flex items-center gap-2">
                  <FiZap className="text-[#9b59b6]" />
                  Formation Personnalisée Seniors
                </h3>
                <div className="px-4 py-2 bg-[#9b59b6]/80 text-white rounded-full font-bold text-lg">
                  <span className="text-white">48€ TTC/heure</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg max-w-3xl">
                Notre service de formation pour seniors est conçu pour vous aider à vous familiariser avec l'informatique et les outils numériques dans un environnement bienveillant et à votre rythme.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#9b59b6] flex items-center gap-2">
                    <FiCheck className="text-[#9b59b6]" />
                    Services inclus
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Initiation à l'informatique de base",
                      "Apprentissage de la navigation internet",
                      "Gestion des emails et messageries",
                      "Utilisation des réseaux sociaux",
                      "Sécurité en ligne et protection des données",
                      "Support patient et adapté à votre rythme"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-[#9b59b6]/10 p-1 rounded-full mr-3 mt-0.5">
                          <FiCheck className="text-[#9b59b6] text-sm" />
                        </div>
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#9b59b6] flex items-center gap-2">
                    <FiPlus className="text-[#9b59b6]" />
                    Options supplémentaires
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { text: "Sessions à domicile", price: "+24€ TTC" },
                      { text: "Formation sur tablette/smartphone", price: "+18€ TTC" },
                      { text: "Cours en petit groupe (2-4 personnes)", price: "-12€ TTC/personne" },
                      { text: "Forfait 10 séances", price: "420€ TTC" },
                      { text: "Support téléphonique post-formation (1 mois)", price: "+36€ TTC" }
                    ].map((option, index) => (
                      <li key={index} className="flex justify-between items-start">
                        <div className="flex">
                          <div className="bg-[#9b59b6]/10 p-1 rounded-full mr-3 mt-0.5">
                            <FiPlus className="text-[#9b59b6] text-sm" />
                          </div>
                          <span className="text-gray-300">{option.text}</span>
                        </div>
                        <span className="bg-[#9b59b6]/30 px-3 py-1 rounded-full text-white font-medium">
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
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-[#9b59b6]/30 mb-8 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9b59b6]/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#9b59b6] flex items-center gap-2">
                <FiUsers className="text-[#9b59b6]" />
                Pourquoi Choisir Notre Formation pour Seniors ?
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg max-w-3xl">
                Nous offrons un accompagnement personnalisé pour vous permettre de maîtriser les outils numériques en toute confiance, avec une approche adaptée à vos besoins et à votre rythme.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    icon: <FiZap className="text-2xl" />, 
                    title: "Approche Patient", 
                    desc: "Explications claires et répétées autant que nécessaire sans pression." 
                  },
                  { 
                    icon: <FiDollarSign className="text-2xl" />, 
                    title: "Tarifs Abordables", 
                    desc: "Formations à prix réduit pour rendre l'apprentissage accessible à tous." 
                  },
                  { 
                    icon: <FiUsers className="text-2xl" />, 
                    title: "Sessions Personnalisées", 
                    desc: "Contenu adapté à vos besoins spécifiques et à votre niveau." 
                  },
                  { 
                    icon: <FiClock className="text-2xl" />, 
                    title: "Horaires Flexibles", 
                    desc: "Cours planifiés selon vos disponibilités pour plus de commodité." 
                  },
                  { 
                    icon: <FiCheck className="text-2xl" />, 
                    title: "Progrès Garantis", 
                    desc: "Suivi de votre progression avec des objectifs clairs à atteindre." 
                  },
                  { 
                    icon: <FiPlus className="text-2xl" />, 
                    title: "Support Continu", 
                    desc: "Assistance disponible même après la fin des sessions de formation." 
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#9b59b6] transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#9b59b6]/10 flex items-center justify-center mb-4 text-[#9b59b6]">
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

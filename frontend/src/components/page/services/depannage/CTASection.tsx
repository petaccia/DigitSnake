"use client";
import { usePathname } from "next/navigation";

export default function CTASection() {
  const pathname = usePathname();

  // Configuration des CTA par service de dépannage
  const ctaConfig = {
    "/services/depannage/installation": {
      title: "Besoin d'une Installation Professionnelle ?",
      description: "Faites installer votre matériel informatique par des experts. Configuration optimale et sécurisée garantie.",
      primaryAction: "Demander une installation",
      primaryHref: "/contact?service=installation",
      bgColor: "bg-quinary-900/30",
      accentColor: "green"
    },
    "/services/depannage/materiel": {
      title: "Problème de Matériel Informatique ?",
      description: "Diagnostic et réparation de votre matériel informatique. De la simple pièce défectueuse au remplacement complet.",
      primaryAction: "Diagnostiquer mon matériel",
      primaryHref: "/contact?service=materiel",
      bgColor: "bg-secondary/30",
      accentColor: "blue"
    },
    "/services/depannage/support-maintenance": {
      title: "Besoin d'un Support & Maintenance ?",
      description: "Souscrivez à un contrat de maintenance pour une assistance continue et proactive de votre système informatique.",
      primaryAction: "Souscrire à la maintenance",
      primaryHref: "/contact?service=maintenance",
      bgColor: "bg-octonary/30",
      accentColor: "orange"
    },
    "/services/depannage/wifi-reseaux": {
      title: "Problème de WiFi ou Réseau ?",
      description: "Optimisez votre connexion réseau et WiFi. Installation, configuration et dépannage de vos équipements réseau.",
      primaryAction: "Résoudre mon problème réseau",
      primaryHref: "/contact?service=wifi",
      bgColor: "bg-redWifi/30",
      accentColor: "red"
    },
    "/services/formation": {
      title: "Envie d'Apprendre l'Informatique ?",
      description: "Inscrivez-vous à nos formations personnalisées pour seniors. Apprenez à utiliser vos appareils en toute sérénité.",
      primaryAction: "Réserver une formation",
      primaryHref: "/contact?service=formation",
      bgColor: "bg-/30",
      accentColor: "orange"
    },
    default: {
      title: "Besoin d'une Assistance Informatique ?",
      description: "Contactez-nous dès maintenant pour une intervention rapide ou un devis personnalisé. Nous sommes là pour résoudre vos problèmes informatiques efficacement.",
      primaryAction: "Demander une intervention",
      primaryHref: "/contact?service=depannage",
      bgColor: "bg-blue-900/30",
      accentColor: "indigo"
    }
  };

  const config = ctaConfig[pathname as keyof typeof ctaConfig] || ctaConfig.default;

  const accentClasses = {
    green: {
      primary: "bg-quinary hover:bg-quinary-600",
      secondary: "border-quinary text-quinary-100 hover:bg-quinary/10 hover:text-quinary-300",
      info: "bg-quinary-800/70 border-quinary-700"
    },
    red: {
      primary: "bg-redWifi hover:bg-redWifi-600",
      secondary: "border-redWifi text-redWifi-100 hover:bg-redWifi/10 hover:text-redWifi-300",
      info: "bg-redWifi-800/70 border-redWifi-700"
    },
    blue: {
      primary: "bg-secondary hover:bg-blue-600",
      secondary: "border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:text-blue-300",
      info: "bg-blue-800/70 border-blue-700"
    },
    purple: {
      primary: "bg-senary hover:bg-senary-600",
      secondary: "border-senary text-senary-100 hover:bg-senary/10 hover:text-senary-300",
      info: "bg-senary-800/70 border-senary-700"
    },
    orange: {
      primary: "bg-octonary hover:bg-octonary-600",
      secondary: "border-octonary text-octonary-100 hover:bg-octonary/10 hover:text-octonary-300",
      info: "bg-octonary-800/70 border-octonary-700"
    },
    indigo: {
      primary: "bg-blue-900 hover:bg-blue-900/90",
      secondary: "border-blue-900 text-blue-900 hover:bg-blue-900/10 hover:text-blue-900",
      info: "bg-blue-900/70 border-blue-900"
    }
  };

  const colors = accentClasses[config.accentColor as keyof typeof accentClasses] || accentClasses.indigo;

  return (
    <section className={`py-16 md:py-24 ${config.bgColor} relative overflow-hidden`} id="contact">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">{config.title}</h2>
          <p className="text-xl mb-8 text-gray-100">
            {config.description}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href={config.primaryHref} 
              className={`${colors.primary} text-white transition-all duration-300 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-lg`}
            >
              {config.primaryAction}
            </a>
            <a 
              href="tel:+33612345678" 
              className={`bg-transparent border-2 ${colors.secondary} transition-all duration-300 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-lg`}
            >
              Appeler : 06 12 34 56 78
            </a>
          </div>
          <div className={`mt-8 ${colors.info} rounded-2xl p-6 border inline-block`}>
            <p className="text-gray-200">
              <strong>Horaires :</strong> Lundi au Vendredi, 9h-18h (hors jours fériés)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { ctaConfig } from "../config/ctaConfig";
import { motion } from "framer-motion";

export default function CTASection() {
  const pathname = usePathname();
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
    <motion.section
      className={`py-16 md:py-24 ${config.bgColor} relative overflow-hidden`}
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {config.title}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {config.description}
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              href={config.primaryHref}
              className={`${colors.primary} text-white transition-all duration-300 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {config.primaryAction}
            </motion.a>
            <motion.a
              href="tel:+33612345678"
              className={`bg-transparent border-2 ${colors.secondary} transition-all duration-300 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Appeler : 06 12 34 56 78
            </motion.a>
          </div>
          <motion.div
            className={`mt-8 ${colors.info} rounded-2xl p-6 border inline-block`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-gray-200">
              <strong>Horaires :</strong> Lundi au Vendredi, 9h-18h (hors jours fériés)
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

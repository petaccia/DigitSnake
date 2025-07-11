import { IconType } from "react-icons";

export interface MenuItem {
  name: string;
  href: string;
  icon: string | IconType;
  children?: MenuItem[];
}

export const webMenuItems: MenuItem[] = [
  { name: "Site Vitrine Express", href: "/services/web/onepage-express", icon: "⚡" },
  { name: "Site Starter", href: "/services/web/pack-starter", icon: "🚀" },
  { name: "Site Standard", href: "/services/web/pack-standard", icon: "⭐" },
  { name: "Site Premium", href: "/services/web/pack-premium", icon: "💎" },
  { name: "Site Sur-Mesure", href: "/services/web/full-stack", icon: "🌐" },
];

export const servicesMenuItems: MenuItem[] = [
  { name: "Installation Logiciels", href: "/services/depannage/installation", icon: "💿" },
  { name: "Achat Ordinateur", href: "/services/depannage/materiel", icon: "💻" },
  { name: "Assistance & Dépannage", href: "/services/depannage/support-maintenance", icon: "🔧" },
  { name: "Internet & Wi-Fi", href: "/services/depannage/wifi-reseaux", icon: "📡" }
];

export const menuItems: MenuItem[] = [
  { name: "Accueil", href: "/", icon: "🏠" },
  { 
    name: "Développement Web", 
    href: "/services/web", 
    icon: "💻",
    children: [...webMenuItems]
  },
  { 
    name: "Services Informatiques", 
    href: "/services", 
    icon: "🖥️",
    children: [...servicesMenuItems] 
  },
  { name: "Formation Senior", href: "/services/formation", icon: "👨‍🏫" },
  { name: "Portfolio", href: "/portfolio", icon: "🗂️" },
  { name: "À propos", href: "/about", icon: "🙋" },
  { name: "Contact", href: "/contact", icon: "✉️" }
];
import { 
  BsHouse, 
  BsCodeSlash, 
  BsTools, 
  BsBriefcase, 
  BsPerson, 
  BsEnvelope 
} from "react-icons/bs";
import { IconType } from "react-icons";

export interface MenuItem {
  name: string;
  href: string;
  icon: IconType;
}

export const menuItems: MenuItem[] = [
  { name: "Accueil", href: "/", icon: BsHouse  },
  { name: "Développement Web", href: "/services/web", icon: BsCodeSlash  },
  { name: "Dépannage IT", href: "/services/depannage", icon: BsTools  },
  { name: "Portfolio", href: "/portfolio", icon: BsBriefcase  },
  { name: "À propos", href: "/about", icon: BsPerson },
  { name: "Contact", href: "/contact", icon: BsEnvelope  }
];
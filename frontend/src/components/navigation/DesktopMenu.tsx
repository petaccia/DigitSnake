"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo, useState } from "react";
import { IconType } from "react-icons";
import { BsChevronDown } from "react-icons/bs";

interface MenuItem {
  name: string;
  href: string;
  icon: string | IconType; // Accepte emojis et icônes React
  children?: MenuItem[];
}

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fonction pour rendre l'icône/emoji
  const renderIcon = (icon: string | IconType, className: string = "w-5 h-5") => {
    if (typeof icon === 'string') {
      // Emoji : on force la taille, l'alignement et l'espacement
      return (
        <span
          className={`inline-flex items-center justify-center ${className}`}
          style={{ fontSize: "1.25rem", lineHeight: 1, width: "1.25rem", height: "1.25rem" }}
        >
          {icon}
        </span>
      );
    } else {
      // Icône React
      const IconComponent = icon;
      return <IconComponent aria-hidden="true" className={className} />;
    }
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="hidden lg:flex md:justify-between items-center space-x-1">
        {menuItems.map((item, index) => {
          const hasChildren = !!item.children;
          const isActive = pathname === item.href || 
                          (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <li 
              key={`${item.name}-${index}`}
              className="relative"
              onMouseEnter={() => hasChildren && setOpenIndex(index)}
              onMouseLeave={() => hasChildren && setOpenIndex(null)}
            >
              <div className="group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive
                      ? 'text-secondary bg-primary/10' 
                      : 'text-white hover:text-secondary hover:bg-primary/10'}
                    focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-haspopup={hasChildren ? "true" : undefined}
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  {renderIcon(item.icon)}
                  <span className="font-medium text-sm">{item.name}</span>
                  {hasChildren && (
                    <BsChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
                
                {hasChildren && (
                  <div 
                    className={`absolute left-0 top-full z-50 transition-all duration-200 ${
                      openIndex === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenIndex(index)}
                  >
                    <ul
                      className="mt-2 w-56 rounded-lg overflow-hidden shadow-xl bg-primary/95 backdrop-blur-sm border border-white/10"
                      aria-label={`Sous-menu ${item.name}`}
                    >
                      {item.children?.map((child, childIndex) => {
                        const childIsActive = pathname.startsWith(child.href);
                        return (
                          <li key={`${child.name}-${childIndex}`}>
                            <Link
                              href={child.href}
                              className={`flex items-center px-4 py-3 text-sm transition-colors ${
                                childIsActive 
                                  ? 'bg-secondary/20 text-secondary' 
                                  : 'hover:bg-white/10 hover:text-secondary'
                              }`}
                              aria-current={childIsActive ? 'page' : undefined}
                            >
                              {renderIcon(child.icon, "w-4 h-4 mr-3")}
                              {child.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(DesktopMenu);
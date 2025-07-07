"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./data/menuItems";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center space-x-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 group
              ${pathname === item.href 
                ? 'text-secondary' 
                : 'text-white hover:text-octonary'
              }`}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            <span className="transition-transform duration-200 group-hover:scale-110">
              <Icon />
            </span>
            <span className="font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopMenu;
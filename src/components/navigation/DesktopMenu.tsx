"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface DesktopMenuProps {
  menuItems: Array<{
    name: string;
    href: string;
    icon: React.ElementType;
  }>;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center space-x-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 group
                ${isActive ? 'text-secondary' : 'text-white hover:text-octonary'}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="transition-transform duration-200 group-hover:scale-110">
                <Icon />
              </span>
              <span className="font-medium">{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;

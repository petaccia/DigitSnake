"use client";

import Link from "next/link";

const DesktopButton = () => {
  return (
    <div className="hidden lg:flex items-center">
      <Link
        href="/devis"
        className="btn-primary flex items-center space-x-2 hover:scale-105 transform transition-all duration-200 px-6 py-2.5"
      >
        <span>Devis Gratuit</span>
      </Link>
    </div>
  );
};

export default DesktopButton;
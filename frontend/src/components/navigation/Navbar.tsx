"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import LogoNavbar from "../logo/LogoNavbar";
import DesktopMenu from "./DesktopMenu";
import DesktopButton from "./utils/buttons/DesktopButton";
import { menuItems } from "./data/menuItems";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const navbarVariants: Variants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        duration: 0.8,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.6
      }
    })
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-primary/80 py-2 shadow-md" : "bg-primary/50 py-4"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate={controls}
      layout
    >
      <div className="px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            custom={1}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            layout
            role="banner"
          >
            <LogoNavbar isScrolled={isScrolled} />
          </motion.div>

          {/* Menu Desktop */}
          <motion.div
            className="hidden lg:flex items-center space-x-2"
            custom={2}
            variants={itemVariants}
            layout
          >
            <DesktopMenu menuItems={menuItems} />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            custom={3}
            variants={itemVariants}
            whileHover={{
              scale: 1.07,
              transition: { type: "spring", stiffness: 300, damping: 12 }
            }}
            layout
          >
            <DesktopButton />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

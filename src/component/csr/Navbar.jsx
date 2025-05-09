"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Car Accident", href: "/car-accident" },
  { label: "Personal Injury", href: "/personal-injury" },
  { label: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 sticky top-0 z-50">
      <div className="xl:container xl:mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={80} />
          </Link>
        </div>

        {/* Menu Items (visible on md+, hidden if a mobile menu is open) */}
        <ul className="hidden md:flex space-x-8 text-gray-700  uppercase font-bold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={
                "hover:text-[#E6AE47] transition-colors duration-400 ease-in-out cursor-pointer"
              }
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden text-[#E6AE47] border-1 border-[#E6AE47] flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className={"cursor-pointer"}
          >
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when menuOpen) */}
      <div
        className={`${menuOpen ? "block" : "hidden"} md:hidden bg-white px-4 pb-4`}
      >
        <ul className="space-y-2 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

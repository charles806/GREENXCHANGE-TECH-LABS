"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@mui/material/Button";

import Logo from "@/public/logo.png";
import { links } from "@/app/libs/constant/link";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} width={40} height={40} alt="GreenXchange Logo" />
          <h1 className="text-lg font-semibold tracking-wide md:text-md">
            GREENXCHANGE TECH LABS
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            {links.slice(0, 4).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-semibold text-black transition hover:text-green-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <li>
              <Button
                variant="contained"
                className="rounded-lg! bg-green-600! px-6! py-2.5! text-sm! font-bold! hover:bg-green-700! shadow-md!"
              >
                <Link href={links[4].href}>{links[4].name}</Link>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <Button
          aria-label="Toggle menu"
          className="md:hidden! p-2! hover:bg-gray-100! rounded-lg! transition! text-black!"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileHeader isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
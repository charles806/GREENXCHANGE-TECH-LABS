import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { ServiceLinks, links } from "@/app/libs/constant/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#e5e9e8] dark:border-[#1e3a30] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary transition-transform duration-300 hover:scale-110">
                <Image src={logo} alt="Logo" width={70} height={70} />
              </div>
              <h2 className="text-[#111816] text-lg font-bold leading-tight">
                GREENXCHANGE TECH LABS
              </h2>
            </div>
            <p className="text-[#61897c] text-sm leading-relaxed mb-8">
              Innovating for a smarter, greener digital future. Your partner in
              digital transformation.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href={"/"}
                className="text-green-700 hover:text-green-800 hover:scale-110 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href={"/"}
                className="text-green-700 hover:text-green-800 hover:scale-110 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={"/"}
                className="text-green-700 hover:text-green-800 hover:scale-110 transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold mb-6 text-[#111816] uppercase tracking-wider text-xs">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#4b5e58] dark:text-gray-400">
              {ServiceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="inline-block relative group transition-colors duration-300 hover:text-green-700"
                  >
                    <span className="relative">
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-6 text-[#111816] uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#4b5e58] dark:text-gray-400">
              <li>
                <Link
                  href={links[1].href}
                  className="inline-block relative group transition-colors duration-300 hover:text-green-700"
                >
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={links[2].href}
                  className="inline-block relative group transition-colors duration-300 hover:text-green-700"
                >
                  <span className="relative">
                    Our Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={links[3].href}
                  className="inline-block relative group transition-colors duration-300 hover:text-green-700"
                >
                  <span className="relative">
                    Portfolio
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={links[4].href}
                  className="inline-block relative group transition-colors duration-300 hover:text-green-700"
                >
                  <span className="relative">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold mb-6 text-[#111816] uppercase tracking-wider text-xs">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#4b5e58] dark:text-gray-400">
              <li className="flex gap-3 items-start group hover:text-green-700 transition-colors duration-300">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3 items-start group hover:text-green-700 transition-colors duration-300">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span>+234 703 235 5643</span>
              </li>
              <li className="flex gap-3 items-start group hover:text-green-700 transition-colors duration-300">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="break-all">
                  greensxchangetechnologies@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-10 border-t border-[#e5e9e8] gap-4">
          <p className="text-sm text-[#61897c]">
            © 2026 Greenxchange Tech Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

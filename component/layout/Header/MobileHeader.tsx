"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import { links } from "@/app/libs/constant/link";
import { X } from "lucide-react";

const MobileHeader = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6 bg-white h-full">
            <Button
              onClick={onClose}
              className="md:hidden! p-2! hover:bg-gray-100! rounded-lg! transition! text-black!"
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Navigation */}
          <ul className="flex flex-col gap-2 px-6 py-8 bg-white">
            {links.slice(0, 4).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block text-lg font-semibold text-black hover:text-green-700 hover:bg-green-50 px-4 py-3 rounded-lg transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="mt-4">
              <Button
                variant="contained"
                className="w-full! rounded-lg! bg-green-600! py-3! font-bold! hover:bg-green-700! shadow-lg!"
                onClick={onClose}
              >
                <Link href={links[4].href}>{links[4].name}</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;

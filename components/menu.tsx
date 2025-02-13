"use client";

import ThemeSwitch from "@/components/theme_switch";
import MenuButton from "@/components/menu_button";
import { useState } from "react";
import { AboutData } from "@/data/setup";
import Link from "next/link";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-40 fixed w-full border-b-[1px] border-secondary/10">
      <div className="absolute bg-primary/80 backdrop-blur-sm h-full w-full z-30"></div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-24 py-3 max-lg:px-12 max-lg:space-y-4">
        <div className="z-40 flex flex-row items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            {AboutData.name} • Portfolio
          </Link>
          <MenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className="lg:hidden text-2xl"
          />
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } z-40 lg:flex max-lg:flex-col max-lg:space-y-4 max-lg:py-4 flex-row lg:space-x-6 lg:items-center`}
        >
          <Link href="/" className="menu_link">
            Home
          </Link>
          <p className="menu_separator">|</p>
          <Link href="/about" className="menu_link">
            About
          </Link>
          <p className="menu_separator">|</p>
          <Link href="/projects" className="menu_link">
            Projects
          </Link>
          <p className="menu_separator">|</p>
          <Link href="/contact" className="menu_link">
            Contact
          </Link>
          <p className="menu_separator">|</p>
          <ThemeSwitch className="menu_link text-left text-lg box-content p-2 rounded-md hover:bg-secondary/10" />
        </div>
      </div>
    </nav>
  );
}

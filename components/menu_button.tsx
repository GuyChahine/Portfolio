"use client";

import { Dispatch, SetStateAction } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface MenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function MenuButton({
  isMenuOpen,
  setIsMenuOpen,
  className,
}: MenuButtonProps) {
  const Icon = isMenuOpen ? FiX : FiMenu;
  return (
    <Icon
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`${className} cursor-pointer`}
    />
  );
}

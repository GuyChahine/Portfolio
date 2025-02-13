"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const Icon = resolvedTheme === "dark" ? FiSun : FiMoon;

  return (
    <Icon
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`${className} cursor-pointer`}
    />
  );
}

"use client"

import { Home, Scale, Lock, Mail } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const navItems = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "利用規約",
    url: "/terms",
    icon: Scale,
  },
  {
    name: "プライバシーポリシー",
    url: "/privacy",
    icon: Lock,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: Mail,
  },
];

export function NavBarWrapper() {
  return <AnimeNavBar items={navItems} defaultActive="Home" />;
}

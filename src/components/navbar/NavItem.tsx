"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const path = usePathname();

  return (
    <Link
      data-active={path == href}
      href={href}
      className={`rounded-full px-4 py-2 text-zinc-200 transition-all duration-700 
      hover:shadow-purple data-[active=true]:text-woodsmoke-500`
      }
    >
      {children}
    </Link>
  );
}

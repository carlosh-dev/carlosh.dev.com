"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

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
      className={
        "rounded-md px-4 py-2 text-zinc-200 transition-all duration-700 hover:bg-purple-900 hover:shadow-purple data-[active=true]:bg-purple-900"
      }
    >
      {children}
    </Link>
  );
}

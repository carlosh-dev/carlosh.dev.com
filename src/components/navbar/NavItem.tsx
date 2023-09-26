'use client'
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation'

export default function NavItem({ children, href }: { children: ReactNode, href: string }) {
  const path = usePathname();

  return (
    <Link
      data-active={path == href}
      href={href}
      className={"data-[active=true]:bg-purple-900 text-zinc-200 px-4 py-2 rounded-md hover:bg-purple-800 hover:shadow-purple transition-all duration-700"}>
      {children}
    </Link>
  )
}

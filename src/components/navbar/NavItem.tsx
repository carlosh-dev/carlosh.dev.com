'use client'
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from 'next/navigation'

export default function NavItem({ children, href }: { children: ReactNode, href: string }) {
  const path = usePathname();

  return (
    <Link href={href} className={`${path == "/" ? href : ""} text-zinc-200 px-4 py-2 rounded-md hover:bg-purple-800 hover:shadow-purple transition-all duration-700 active:bg-purple-900`}>
      {children}
    </Link>
  )
}

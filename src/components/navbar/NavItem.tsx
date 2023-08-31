import Link from "next/link";
import { ReactNode } from "react";

export default function NavItem({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link
      className="text-zinc-200 px-4 py-2  rounded-full hover:bg-purple-800 hover:shadow-purple transition-all duration-700"
      href={href}
    >
      {children}
    </Link>
  )
}

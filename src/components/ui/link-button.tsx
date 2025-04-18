import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  icon?: ReactNode;
}

export default function LinkButton({ children, icon, ...props }: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={`delay flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-orange-500 text-white-50 
                shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:from-oragnge-600 hover:to-oragnge-600 hover:-translate-y-1`}
      target="_blank"
    >
      {icon} {children}
    </Link>
  );
}

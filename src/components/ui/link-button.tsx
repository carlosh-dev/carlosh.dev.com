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
      className={`delay flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r
                  from-violet-500 to-purple-500 text-white 
                shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:from-violet-600 hover:to-purple-600 hover:shadow-purple`}
      target="_blank"
    >
      {icon} {children}
    </Link>
  );
}

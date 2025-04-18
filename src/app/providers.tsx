'use client';

import { TooltipProvider } from 'components/ui/tooltip';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <TooltipProvider>
        {children}
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}

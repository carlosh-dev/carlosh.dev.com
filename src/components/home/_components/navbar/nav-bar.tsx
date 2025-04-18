'use client';
import { ThemeToogle } from '../../../ui/theme-toogle';

export default function Navbar() {
  return (
    <div className="sticky z-10 w-full">
      <header className="fixed flex w-full flex-col items-center justify-center bg-transparent bg-opacity-10 bg-clip-padding backdrop-blur-md backdrop-filter">
        <div className="grid h-full w-full grid-cols-[repeat(3,_minmax(1.2rem,_auto))] items-center justify-between gap-2 px-2 py-4">
          <div className="w-[2.25rem]"></div>
          <div className="animate-fadein select-none">
            {'<'}carlosh-
            <span className={'bg-orange-500 bg-clip-text text-transparent'}>dev</span>
            {'/>'}
          </div>
          <ThemeToogle />
        </div>
        <div className="h-1 w-full bg-orange-500"></div>
      </header>
    </div>
  );
}

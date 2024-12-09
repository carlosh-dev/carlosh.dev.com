'use client';
import { ThemeToogle } from '../theme-toogle';

export default function Navbar() {
  return (
    <div className="sticky z-10 w-full">
      <header className="fixed flex w-full flex-col items-center justify-center bg-transparent bg-opacity-10 bg-clip-padding backdrop-blur-md backdrop-filter">
        <div className="flex h-full w-full items-center justify-between px-2 py-4">
          <div></div>
          <div className="animate-fadein select-none">
            {'<'}carlosh-
            <span className={'bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent'}>dev</span>
            {'/>'}
          </div>
          <ThemeToogle />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-500  shadow-purple-300 drop-shadow-md"></div>
      </header>
    </div>
  );
}

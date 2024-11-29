export default function Navbar() {
  return (
    <div className="sticky z-10 w-full">
      <header className="fixed flex w-full flex-col items-center justify-center bg-transparent bg-opacity-10 bg-clip-padding backdrop-blur-md backdrop-filter">
        <div className="flex h-full w-full max-w-5xl items-center justify-center p-4">
          <div className="animate-fadein select-none">
            {'<'}carlosh-<span className={'text-purple-500'}>dev</span>
            {'/>'}
          </div>
          {/* <nav className="flex gap-4">
            <NavItem href="/">home</NavItem>
            <NavItem href="/about-me">about me</NavItem>
            <NavItem href="/projects">projects</NavItem>
            <NavItem href="/contacts">contact</NavItem>
          </nav> */}
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-500  shadow-purple-300 drop-shadow-md"></div>
      </header>
    </div>
  );
}

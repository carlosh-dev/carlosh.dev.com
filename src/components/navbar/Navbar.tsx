import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-center border-b-2 border-solid border-purple-500 bg-zinc-500 bg-opacity-10 bg-clip-padding p-8 drop-shadow-md backdrop-blur-md backdrop-filter">
      <div className="flex h-full w-full max-w-5xl items-center justify-between">
        {/* <Box3D /> */}
        <div>
          {"<"}CarlosH<span className={"text-purple-400"}>Dev</span>
          {"/>"}
        </div>
        <nav className="flex gap-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-me">About me</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contacts">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}
